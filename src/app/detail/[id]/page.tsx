import { getProductById } from "@/actions/products";
import MyImage from "@/components/MyImage";
import Image from "next/image";

type PageProps = {
	params: {
		id: string | number;
	};
};

async function page({ params }: PageProps) {
	const { id } = params;
	const data = await getProductById(id);
	return (
		<main>
			<div className="flex justify-between items-center gap-5">
				<div className="flex flex-col gap-1">
					<h1 className="text-xl font-bold">{data.title}</h1>
					<div className="text-sm">{data.description}</div>
					<div className="text-sm font-bold">Stocks : {data.stock}</div>
				</div>
				<div className="text-2xl font-extrabold">${data.price}</div>
			</div>
	    <div className="flex flex-row gap-3 overflow-x-auto">
				{data.images.map((src, key) => (
	        <MyImage
	        	key={key}
	        	className="rounded-xl object-contain w-[500px] h-[400px]"
	          alt="Mountains"
	          src={src}
	          width={500}
	          height={400}
	          sizes="(min-width:808px) 50vw, 100vw"
	        />
				))}
	    </div>
		</main>
	);
}

export default page;
