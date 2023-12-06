import { Product } from "@/types/product";

type TableContent = {
	[key: string]: any;
};

type TableProps = {
	heads: string[];
	contents: TableContent[];
	objKeys: string[];
	rowClick?: () => void;
};

function Table(props: TableProps) {
	const { heads, contents, objKeys, rowClick } = props;
	return (
		<div className="overflow-x-scroll w-full">
			<table className="min-w-max text-left w-full table-auto">
				<thead>
					<tr>
						{heads.map((head, key) => (
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
									className="hover:cursor-pointer border-r hover:bg-blue-gray-100"
								>
									{objKeys.map((c, ind) => (
										<td
											data-key={c}
											className={"py-3 px-5"}
											onClick={rowClick}
											key={ind}
										>
											{content[c]}
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
