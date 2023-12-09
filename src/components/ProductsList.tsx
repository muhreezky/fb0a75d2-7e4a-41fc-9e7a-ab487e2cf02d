"use client";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

type TableContent = {
	[key: string]: any;
};

type TableProps = {
	heads?: string[];
	contents: TableContent[];
	objKeys?: string[];
};

function ProductsList(props: TableProps) {
	const { heads, contents, objKeys } = props;
	return (
		<div className="flex flex-col gap-3 w-full rounded-lg">
			{contents && contents.map(
				(content) => <ProductCard key={content.id} data={content as Product} />	
			)}
		</div>
	);
}

export default ProductsList;
