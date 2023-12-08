"use client";

import { useRouter } from "next/navigation";

type TableContent = {
	[key: string]: any;
};

type TableProps = {
	heads?: string[];
	contents: TableContent[];
	objKeys?: string[];
	onRowClick?: () => void;
};

function Table(props: TableProps) {
	const { heads, contents, objKeys, onRowClick } = props;
	const defaultHeads = Object.keys(contents[0]);
	const router = useRouter();
	return (
		<div className="overflow-x-scroll w-full rounded-lg">
			<table className="min-w-max text-left w-full table-auto">
				<thead>
					<tr>
						{(heads || defaultHeads).map((head, key) => (
							<th
								key={key}
								className="py-2 px-5 underline border-b border-r border-blue-gray-50 uppercase"
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
									className="hover:cursor-pointer border-r hover:bg-gray-300"
								>
									{(objKeys || Object.keys(contents[0])).map((c, ind) => (
										<td
											data-key={c}
											className={"py-3 px-5"}
											onClick={() => router.push(`/detail/${content.id as string}`)}
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
