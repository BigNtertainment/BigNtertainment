import Announcement from "@/components/Home/Announcement";
import Games from "@/components/Home/Games/Games";
import Header from "@/components/Home/Header/Header";
import Blog from "@/components/Home/Blog/Blog";
import Reviews from "@/components/Home/Rewiews/Reviews";
import Newsletter from "@/components/Home/Newsletter";
import Notion from "@/lib/Notion";

export default function Home() {
	return (
		<main className="main-page-layout">
			<Header />
			<Announcement />
			<Games />
			<Blog />
			<Reviews />
			{/* <Newsletter /> */}
		</main>
	);
}
