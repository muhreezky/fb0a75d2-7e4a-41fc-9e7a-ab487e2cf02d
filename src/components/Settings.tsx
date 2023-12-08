function Settings() {
	return (
		<form className="flex flex-col gap-3 w-full justify-center items-center">
			<div className="flex gap-3 flex-wrap max-w-max justify-center">
				<input type="number" min={0} placeholder="Limit" />
				<input type="number" min={0} placeholder="Skip" />
				<input type="search" placeholder="Search..." />
			</div>
			<button type="submit" className="w-full btn-light-blue">
				Start Search
			</button>
		</form>
	)
}

export default Settings