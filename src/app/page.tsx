import Announcement from "@/components/Home/Announcement";
import Games from "@/components/Home/Games/Games";
import Header from "@/components/Home/Header/Header";
import Blog from "@/components/Home/Blog/Blog";
import Reviews from "@/components/Home/Rewiews/Reviews";

export default function Home() {
	return (
		<main className="pt-2.5  px-4 grid grid-rows-[75vh_repeat(5,min-content)] grid-cols-defaultLayout col-[full-start/full-end]">
			<Header />
			<Announcement />
			<Games />
			<Blog />
			<Reviews />
			{/* <Newsletter /> */}
		</main>
	);
}
