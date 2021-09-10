export async function getTable() {
	const data = await fetch(`https://api.airtable.com/v0/appykXDNKrc5192kn/Main?view=Grid%20view`, {
		headers: {
			Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
		},
	})
	let r = await data.json()
	console.log(r)
	return r
}
