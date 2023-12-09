"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import Rating from "./Rating";
import { useRouter } from "next/navigation";

type ProductCardProps = {
	data: Product;
};

export default function ProductCard({ data }: ProductCardProps) {
	const {
		id,
		title,
		price,
		rating,
		discountPercentage,
		thumbnail,
		description,
	} = data;
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(`/detail/${id}`)}
			className="flex transition-all hover:cursor-pointer bg-gray-100 hover:bg-gray-200 justify-between items-center shadow-lg hover:shadow-xl rounded-lg w-full p-5"
		>
			<div className="flex flex-col">
				<div className="text-xl font-bold">{title}</div>
				<div className="text-lg">{description}</div>
				<div className="font-bold text-2xl">
					USD {price} ({discountPercentage}% Off)
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<Image
					loading="lazy"
					className="rounded-lg object-contain w-[150px] h-[150px]"
					src={thumbnail}
					width={150}
					height={150}
					alt={title}
				/>
				<Rating value={rating} />
			</div>
		</div>
	);
}
