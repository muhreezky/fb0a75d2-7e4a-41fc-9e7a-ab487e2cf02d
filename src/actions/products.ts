"use server";

import { JsonSchema } from "@/types/json-schema";
import { Product } from "@/types/product";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

type GetProductsProps = {
	limit?: number | string;
	skip?: number | string;
	searchText?: string;
	category?: string;
};

type DeletedProduct = Product & {
	isDeleted: boolean;
	deletedOn: string;
}

const init: RequestInit = {
	cache: "force-cache"
}

const headers = { "Content-Type": "application/json" };

const base = "https://dummyjson.com/products";

export async function getProducts({ limit, skip, searchText, category }: GetProductsProps) {
	const query = `${!searchText ? "?" : "&"}limit=${limit}&skip=${skip}`
	const cate = (category === "all" || !category) ? "" : `/category/${category}`;
	const url = `${base}${cate}${!!searchText ? `/search?q=${searchText}` : ""}${query}`;
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

export async function addProduct(formData: FormData) {
	const obj: { [key: string]: any } = {};
	formData.forEach((value, key) => obj[key] = value);
	obj.images = [obj.thumbnail];
	const res = await fetch(`${base}/add`, { 
		headers,
		method: "POST",
		body: JSON.stringify(obj)
	});
	const json: Product = await res.json();
	return json;
}

export async function editProduct(formData: FormData) {
	const obj: { [key: string]: any } = {};
	formData.forEach((value, key) => obj[key] = value);
	obj.images = [obj.thumbnail];
	const res = await fetch(`${base}/${formData.get("id")}`, {
		headers,
		method: "PUT",
		body: JSON.stringify(obj)
	});
	const json: Product = await res.json();
	console.log(json);
	return json;
}

export async function deleteProduct(id: string | number) {
	const res = await fetch(`${base}/${id}`, {
		method: "DELETE"
	});
	const json: DeletedProduct = await res.json();
	console.log(json);
	return json;
}