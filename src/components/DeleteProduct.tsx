"use client";
import { deleteProduct } from '@/actions/products';
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

type DeleteProductProps = {
	id: string | number;
};

export default function DeleteProduct({ id }: DeleteProductProps) {
	const router = useRouter();
	const deleteItem = async (id: string | number) => {
		const { isConfirmed } = await Swal.fire({
			title: "Confirm Delete",
			text: "Do you want to delete this item?",
			confirmButtonText: "Yes",
			denyButtonText: "No",
			showDenyButton: true,
			icon: "question"
		})
		if (isConfirmed) {
			const { title, deletedOn } = await deleteProduct(id);
			Swal.fire({
				title: "Item Deleted",
				icon: "success",
				html: `
					Product Name : <b>${title}</b><br/>
					Deleted On : <b>${new Date(deletedOn)}</b>
				`
			}).then(() => router.push("/"));
		}
	}

	return (
		<button className="btn-red" type="button" onClick={() => deleteItem(id)}>
			Delete this Item
		</button>
	)
}