import ProductsList from '@/components/ProductsList';
import Settings from '@/components/Settings';
import { getCategories, getProducts } from '@/actions/products';
import CreateProduct from '@/components/CreateProduct';
import inputs from './inputs';

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
      <ProductsList objKeys={heads} contents={data.products} />
    </main>
  )
}
