import Table from '@/components/Table';
import Settings from '@/components/Settings';
import { JsonSchema } from '@/types/json-schema';
import { getProducts } from '@/actions/products';

export default async function Home() {
  const data = await getProducts({ limit: 30, searchText: "", skip: 0 });
  return (
    <main>
      <Settings />
      <Table contents={data.products} />
    </main>
  )
}
