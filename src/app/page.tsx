import Table from '@/components/Table';
import { JsonSchema } from '../../json-schema';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products');
  const json = await res.json();
  return json as JsonSchema;
}

export default async function Home() {
  const data = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center p-7 gap-4">
      <button className="blue">
        Click Me
      </button>
      <Table contents={data.products} />
    </main>
  )
}
