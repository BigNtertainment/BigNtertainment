import Games from "@/components/Home/Games/Games";
import Header from "@/components/Home/Header/Header";
import Blog from "@/components/Home/Blog/Blog";
import Reviews from "@/components/Home/Rewiews/Reviews";
import SanityDatabase from "../../sanity/database";

export default async function Home() {
	return (
		<main className="pt-2.5  px-4 grid grid-rows-[75vh_repeat(5,min-content)] grid-cols-defaultLayout col-[full-start/full-end]">
			<Header />
			<Games />
			<Blog />
			<Reviews />
			{/* <Newsletter /> */}
		</main>
	);
}
