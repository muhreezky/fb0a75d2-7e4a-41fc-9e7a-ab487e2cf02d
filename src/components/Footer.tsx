import React from 'react'

function Footer() {
	return (
		<footer className="mt-auto shadow-lg rounded-t-lg bg-blue-500 text-white p-5 flex justify-between flex-wrap items-center">
			<div className="font-bold">
				Created by Muhammad Rizkiansyah
			</div>
			<div className="flex gap-5">
				<a href="https://github.com/muhreezky" target="_blank">My Github</a>
				<a href="https://muhrizki.my.id" target="_blank">My Website</a>
			</div>
		</footer>
	)
}

export default Footer