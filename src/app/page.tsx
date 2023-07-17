import Announcement from "@/components/Home/Announcement";
import Games from "@/components/Home/Games/Games";
import Header from "@/components/Home/Header/Header";
import Blog from "@/components/Home/Blog";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Home/Newsletter";
import Partners from "@/components/Home/Partners";

export default function Home() {
	return (
		<main className="main-page-layout">
			<Header />
			<Announcement />
			<Games />
			<Blog />
			<Reviews />
			<Partners />
			<Newsletter />
		</main>
	);
}
