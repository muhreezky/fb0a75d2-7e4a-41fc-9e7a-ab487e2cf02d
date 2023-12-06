import Table from '@/components/Table'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-7 gap-4">
      <button className="blue">
        Click Me
      </button>
      <Table contents={[{ id: 1, name: "Rizki" }]} heads={["ID", "Name"]} objKeys={["id", "name"]} />
    </main>
  )
}
