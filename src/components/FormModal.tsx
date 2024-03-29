"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Input from "./Input";
import { useFormStatus } from "react-dom";
import Swal from "sweetalert2";
import { useParams, useRouter } from "next/navigation";
import { Product } from "@/types/product";

export type FormInput = {
  name: string;
  type: string;
  label: string;
  required?: boolean;
  value?: string;
  defaultValue?: string;
};

type FormModalProps = {
  inputs: FormInput[];
  title: string;
  open: boolean;
  editData?: Product;
  action: (formData: FormData) => Promise<Product>;
  onClose: () => void;
};

export default function FormModal(props: FormModalProps) {
  const { pending } = useFormStatus();
  const { id } = useParams();

  const defaultAction = async (formData: FormData) => {
    if (!props.action) return null;
    if (props.editData) {
      formData.append("id", id as string);
      console.log(id);
    }
    const json = await props.action(formData);
    Swal.fire({
      title: props.editData ? "Edit Success" : "Create Success",
      icon: "success",
      html: `
        Product Name: <b>${json.title}</b><br />
        Description: <b>${json.description}</b><br />
        Price: <b>$${json.price}</b>
      `,
      imageUrl: json.thumbnail
    }).then(() => {
      props.onClose();
    });
  }
  return (
    <>
      <Transition show={!!props.open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={props.onClose}
        >
          <Transition.Child>
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full bg-white max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                  <form action={defaultAction}>
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {props.title}
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col gap-2">
                      {props.inputs.map((val, key) => (
                        <Input key={`${val.name}-${key}`} {...val} />
                      ))}
                    </div>

                    <div className="mt-4">
                      <button type="submit" aria-disabled={pending} disabled={pending} className="w-full">
                        Submit
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
