import { JsonSchema } from "@/types/json-schema";
import { Product } from "@/types/product";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

type GetProductsProps = {
	limit?: number | string;
	skip?: number | string;
	searchText?: string;
	category?: string;
};

const init: RequestInit = {
	cache: "force-cache"
}

const base = "https://dummyjson.com/products";

export async function getProducts({ limit, skip, searchText, category }: GetProductsProps) {
	const query = `${!searchText ? "?" : "&"}limit=${limit}&skip=${skip}`
	const cate = (category === "all" || !category) ? "" : `/category/${category}`;
	const url = `${base}${cate}${!!searchText ? `/search?q=${searchText}` : ""}${query}`;
	console.log(url);
	const res = await fetch(url, init);
	const json: JsonSchema = await res.json();
	return json;
}

export async function getProductById(id: string | number) {
	const res = await fetch(`${base}/${id}`, init);
	const json: Product = await res.json();
	return json;
}

export async function getCategories() {
	const res = await fetch(`${base}/categories`, init);
	const json: string[] = await res.json();
	return json;
}