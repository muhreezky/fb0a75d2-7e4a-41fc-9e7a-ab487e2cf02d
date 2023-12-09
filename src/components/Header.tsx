"use client";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Swal from "sweetalert2";

const aboutText = `
	<b>DummyJSON Products API (https://dummyjson.com/docs/products)</b><br /><br />
	This website is a coding challenge from Ambisius Lab for applying the Intern Software Engineer role.<br />
	Created by Muhammad Rizkiansyah (muhrizki.my.id)
`;

function showHelp() {
	Swal.fire({
		title: "About this website",
		html: aboutText,
		icon: "info"
	});
}

export default function Header() {
	return (
		<header className="flex justify-between items-center p-5 rounded-b-lg bg-blue-600 text-white text-lg font-bold">
			<Link href="/">
				DummyJSON Products API
			</Link>
			<div>
				<button onClick={() => showHelp()} className="btn-transparent rounded-full">
					<QuestionMarkCircleIcon className="w-5 h-5" />
				</button>
			</div>
		</header>
	)
}