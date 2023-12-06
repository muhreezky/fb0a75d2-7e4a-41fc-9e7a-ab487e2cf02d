"use client";
import { Product } from "@/types/product";

type TableContent = {
	[key: string]: any;
};

type TableProps = {
	heads?: string[];
	contents: TableContent[];
	objKeys?: string[];
	rowClick?: () => void;
};

function Table(props: TableProps) {
	const { heads, contents, objKeys, rowClick } = props;
	const defaultHeads = Object.keys(contents[0]).map(k => k.toUpperCase());
	return (
		<div className="overflow-x-scroll w-full rounded-lg">
			<table className="min-w-max text-left w-full table-auto">
				<thead>
					<tr>
						{(heads || defaultHeads).map((head, key) => (
							<th
								key={key}
								className="py-2 px-5 underline border-b border-r border-blue-gray-50"
							>
								{head}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{contents?.map((content, key) => {
						return (
							content && (
								<tr
									key={key}
									id={content.id as string}
									className="hover:cursor-pointer border-r hover:bg-gray-400 hover:text-gray-200 transition-all"
								>
									{(objKeys || Object.keys(contents[0])).map((c, ind) => (
										<td
											data-key={c}
											className={"py-3 px-5"}
											onClick={rowClick}
											key={ind}
										>
											{typeof content[c] !== "object" ? content[c] : content[c].join(", ")}
										</td>
									))}
								</tr>
							)
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
