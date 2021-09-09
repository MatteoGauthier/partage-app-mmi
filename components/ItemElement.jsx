export default function ItemElement({ item: { fields: record } }) {
	return (
		<div
			className="md:px-7 px-5 md:py-4 py-3 bg-white/50 rounded-xl "
			style={{
				boxShadow: "#9090906e 0px 25px 80px -12px",
			}}
		>
			<span className="text-xl font-semibold">{record.Name}</span>
			<p className="text-gray-500 font-medium leading-snug mt-1 mb-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aut perspiciatis repudiandae blanditiis vel.
				Rem voluptates quam, velit odio, possimus consequatur mollitia cumque, odit facilis aliquam quidem corrupti
				quia? Temporibus?	
			</p>
			<div className="flex justify-between items-center">
				<div className="flex space-x-2">
					{record.Type == "Association" && (
						<div className="px-1 flex items-center bg-yellow-100 py-1 text-sm rounded">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path
									d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-1 font-normal">Association</span>
						</div>
					)}
					{record.Type == "Application" && (
						<div className="px-1 flex items-center bg-blue-100 py-1 text-sm rounded">
							<svg width="1em" height="1em" viewBox="0 0 24 24">
								<path opacity=".3" d="M7 4h10v14H7z" fill="currentColor"></path>
								<path
									d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3-3H7V4h10v14z"
									fill="currentColor"
								></path>
							</svg>
							<span className="ml-1 font-normal">Application</span>
						</div>
					)}
				</div>
				<a href={record.Lien} className="bg-primary text-white font-medium px-3 py-1 rounded">Accéder au site</a>
			</div>
		</div>
	)
}
