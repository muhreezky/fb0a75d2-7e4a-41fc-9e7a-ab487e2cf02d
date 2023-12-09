"use client";
import { useState } from "react";
import FormModal, { FormInput } from "./FormModal";
import { addProduct, editProduct } from "@/actions/products";
import { Product } from "@/types/product";

type CreateProps = {
	inputs: FormInput[];
	editData?: Product;
};

export default function CreateProduct({ inputs, editData }: CreateProps) {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<>
			<FormModal
				action={!editData ? addProduct : editProduct}
				onClose={() => setOpen(false)}
				editData={editData}
				open={open}
				inputs={inputs}
				title={!!editData ? "Edit Product" : "Create a Product"}
			/>
			<button
				onClick={() => setOpen((o) => !o)}
				type="button"
				className="btn-green"
			>
				{!!editData ? "Edit this Product" : "Create New"}
			</button>
		</>
	);
}
