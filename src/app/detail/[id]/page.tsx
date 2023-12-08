import { getProductById } from "@/actions/products";

type PageProps = {
	params: {
		id: string | number;
	}
}

async function page({ params }: PageProps) {
	const { id } = params;
	const data = await getProductById(id);
	return (
		<main>
			<div className="flex flex-col gap-2">
				<h1 className="text-xl font-bold">
					{data.title}
				</h1>
				<div className="text-base">
					{data.description}
				</div>
			</div>
		</main>
	);
}

export default page;