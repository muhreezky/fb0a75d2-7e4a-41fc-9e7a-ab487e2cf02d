"use client";
import { useState } from "react";
import FormModal, { FormInput } from "./FormModal";
import { addProduct } from "@/actions/products";

type CreateProps = {
	inputs: FormInput[];
};

export default function CreateProduct({ inputs }: CreateProps) {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<FormModal
				action={addProduct}
				onClose={() => setOpen(false)}
				open={open}
				inputs={inputs}
				title="Create a Product"
			/>
			<button
				onClick={() => setOpen((o) => !o)}
				type="button"
				className="btn-green"
			>
				Create New
			</button>
		</>
	);
}
