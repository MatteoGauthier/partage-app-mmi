export default function Header() {
	return (
		<div className="max-w-3xl flex items-center flex-col mx-auto my-12">
			<h1 className="md:text-9xl text-[20vw] text-dark text-center leading-none font-bold header-text" >Partager</h1>
			<p className="max-w-lg text-center mt-6 font-medium text-dark text-opacity-70">
				Découvrer et faite découvrir le partage, retrouvez ici des application, des associations, des mouvements ou
				encore des savoirs
			</p>
			<style jsx>
				{`
					.header-text {
						font-family: "Kaisei Tokumin", serif;
						font-weight: lighter;
					}
				`}
			</style>
		</div>
	)
}
