import Table from '@/components/Table';
import Settings from '@/components/Settings';
import { getCategories, getProducts } from '@/actions/products';
import FormModal, { FormInput } from '@/components/FormModal';
import CreateProduct from '@/components/CreateProduct';

type PageProps = {
  searchParams: {
    [key: string]: string | undefined;
  }
}

const heads = [
  "id", 
  "title", 
  "description", 
  "price", 
  "discountPercentage",
  "rating",
  "stock",
  "brand",
  "category",
  "thumbnail",
  "images"
];

const inputs: FormInput[] = [
  {
    required: true, label: "Product Name", name: "title", type: "text"
  },
  {
    required: true, label: "Description", name: "description", type: "text"
  },
  {
    required: true, label: "Price (USD)", name: "price", type: "number"
  },
  {
    required: true, label: "Rating", name: "rating", type: "number"
  },
  {
    required: true, label: "Discount %", name: "discountPercentage", type: "number"
  },
  {
    required: true, label: "Stocks", name: "stock", type: "number",
  },
  {
    required: true, label: "Brand", name: "brand", type: "text"
  },
  {
    required: true, label: "Category", name: "category", type: "text"
  },
  {
    required: true, label: "Image URL", name: "thumbnail", type: "text"
  }
];

export default async function Home({ searchParams }: PageProps) {
  const { limit = 30, q, skip = 0, category } = searchParams;
  const data = await getProducts({ 
    limit, 
    searchText: q, 
    skip,
    category
  });
  const categories = await getCategories();
  return (
    <main>
      <Settings categories={categories} />
      <CreateProduct inputs={inputs} />
      <Table objKeys={heads} contents={data.products} />
    </main>
  )
}
