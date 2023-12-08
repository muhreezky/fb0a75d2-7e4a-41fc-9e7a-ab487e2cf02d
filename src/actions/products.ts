import { JsonSchema } from "@/types/json-schema";
import { Product } from "@/types/product";

type GetProductsProps = {
	limit?: number | 30;
	skip?: number | 0;
	searchText?: string;
};

const base = "https://dummyjson.com/products";

export async function getProducts({ limit, skip, searchText }: GetProductsProps) {
	const query = `${!searchText ? "?" : "&"}limit=${limit}&skip=${skip}`
	const url = `${base}${!!searchText ? `/search?q=${searchText}` : ""}${query}`;
	const res = await fetch(url);
	console.log(url);
	const json: JsonSchema = await res.json();
	console.log(json);
	return json;
}

export async function getProductById(id: string | number) {
	const res = await fetch(`${base}/${id}`);
	const json: Product = await res.json();
	return json;
}

export async function getCategories() {
	const res = await fetch(`${base}/categories`);
	const json: JsonSchema = await res.json();
	return json;
}