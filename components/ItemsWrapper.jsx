import { getTable } from "../lib/airtable"
import ItemElement from "./ItemElement"

// const data = fetch("https://api.airtable.com/v0/appykXDNKrc5192kn/Main?view=Grid%20view", {
// 	method: "get",
// 	headers: { Authorization: `Bearer ${process.env.AIRTABLE_KEY}` },
// }).then((response) => response.json())

// console.log(data)

export default function ItemsWrapper({ records }) {
	return (
		<div className="flex flex-col md:space-y-6 space-y-3 overflow-visible max-w-3xl mx-auto">
			{records.map((item, idx) => (
				<ItemElement item={item} key={idx} />
			))}
		</div>
	)
}
