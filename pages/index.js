import Header from "../components/Header"

import ItemsWrapper from "../components/ItemsWrapper"
import PlusButton from "../components/PlusButton"
import SEO from "../components/SEO"
import { getTable } from "../lib/airtable"

export default function Home({ records }) {
	return (
		<>
			<SEO />
			<div className="px-4 pb-16 md:px-0">
				<Header />
				<ItemsWrapper records={records} />
			</div>
			<PlusButton />
		</>
	)
}

export async function getStaticProps() {
	const { records } = await getTable()
	console.log(records)
	return {
		props: {
			records,
		},
		revalidate: 60,
	}
}
