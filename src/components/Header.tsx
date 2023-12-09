import Link from "next/link";

export default function Header() {
	return (
		<header className="p-5 rounded-b-lg bg-blue-600 text-white text-lg font-bold">
			<Link href="/">
				DummyJSON Products API
			</Link>
		</header>
	)
}