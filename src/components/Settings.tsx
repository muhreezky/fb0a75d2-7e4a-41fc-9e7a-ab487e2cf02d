"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import Input from "./Input";
import Combo from "./Combo";

type SettingsProps = {
	categories: string[];
}

function Settings({ categories }: SettingsProps) {
	const router = useRouter();

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget as HTMLFormElement);
		const searchText = form.get("q");
		const limit = form.get("limit") || "30";
		const skip = form.get("skip") || "0";
		const q = searchText ? `&q=${searchText}` : "";
		const category = form.get("category");
		router.push(`/?limit=${limit}&skip=${skip}${q}&category=${category}`);
	}

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-3 w-full justify-center items-center">
			<div className="flex gap-3 flex-wrap max-w-max justify-center">
				<Input
					label="Limit"
					type="number"
					name="limit"
					min={0}
					placeholder="Rows limit here..."
				/>
				<Input
					label="Skip"
					type="number"
					name="skip"
					min={0}
					placeholder="How many rows skipped..."
				/>
				<Input
					label="Search"
					type="search"
					name="q"
					placeholder="Text to be searched here..."
				/>
				<Combo options={["all", ...categories]} name="category" label="Category" />
			</div>
			<button type="submit" className="w-full btn-light-blue">
				Start Search
			</button>
		</form>
	);
}

export default Settings;
