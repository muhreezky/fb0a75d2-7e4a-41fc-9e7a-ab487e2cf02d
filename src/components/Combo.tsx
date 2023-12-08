"use client";
import { Combobox, Transition } from "@headlessui/react";
import { Fragment, SyntheticEvent, useState } from "react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/20/solid";

type ComboProps = {
	options: string[];
	name?: string;
	label?: string;
	onChange?: (e: SyntheticEvent) => void;
};

export default function Combo({ options, name, label, onChange }: ComboProps) {
	const [selected, setSelected] = useState(options[0]);
	const [query, setQuery] = useState("");

	const filtered =
		query === ""
			? options
			: options.filter((o) => o.toLowerCase().includes(query.toLowerCase()));
	return (
		<Combobox name={name} value={selected} onChange={setSelected}>
			<div className="relative">
				<div className="relative flex flex-col gap-2 w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
					<Combobox.Label className="font-bold text-base">
						{label}
					</Combobox.Label>
					<Combobox.Input
						className="w-full border-none pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Combobox.Button className="absolute bottom-1 right-0 flex items-center !bg-transparent hover:!bg-transparent">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-800"
							aria-hidden="true"
						/>
					</Combobox.Button>
				</div>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					afterLeave={() => setQuery("")}
				>
					<Combobox.Options className="absolute max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
						{filtered.length === 0 && query !== "" ? (
							<div className="relative cursor-default select-none px-4 py-2 text-gray-700">
								Nothing found.
							</div>
						) : (
							filtered.map((opt) => (
								<Combobox.Option
									key={opt}
									className={({ active }) =>
										`relative hover:cursor-pointer select-none py-2 pl-10 pr-4 ${
											active ? "bg-teal-600 text-white" : "text-gray-900"
										}`
									}
									value={opt}
								>
									{({ selected, active }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{opt}
											</span>
											{selected ? (
												<span
													className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
														active ? "text-white" : "text-teal-600"
													}`}
												>
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</Transition>
			</div>
		</Combobox>
	);
}
