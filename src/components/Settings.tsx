"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import Input from "./Input";
import Combo from "./Combo";

type SettingsProps = {
	categories: string[];
}

function Settings({ categories }: SettingsProps) {
	const search = useSearchParams();
	const [limit, setLimit] = useState<string>("30");
	const [skip, setSkip] = useState<string>("0");
	const [searchText, setSearchText] = useState("");
	const router = useRouter();

	const onSubmit = (e: SyntheticEvent) => {
		const q = searchText ? `&q=${searchText}` : "";
		const form = new FormData(e.currentTarget as HTMLFormElement);
		e.preventDefault();
		router.push(`/?limit=${limit || "30"}&skip=${skip || "0"}${q}&category=${form.get("category")}`);
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
					value={limit}
					onChange={(e) => setLimit(e.target.value)}
				/>
				<Input
					label="Skip"
					type="number"
					name="skip"
					min={0}
					placeholder="How many rows skipped..."
					value={skip}
					onChange={(e) => setSkip(e.target.value)}
				/>
				<Input
					label="Search"
					type="search"
					name="q"
					placeholder="Text to be searched here..."
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
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
