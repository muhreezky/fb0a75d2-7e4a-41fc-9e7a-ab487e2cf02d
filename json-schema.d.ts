import { Product } from "@/types/product"

type JsonSchema = {
	products: Product[];
	total?: number;
	skip?: number;
	limit?: number;
}