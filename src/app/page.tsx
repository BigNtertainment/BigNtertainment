import Announcement from "@/components/Home/Announcement";
import Games from "@/components/Home/Games";
import Header from "@/components/Home/Header/Header";
import Navigation from "@/components/Home/Navigation/Navigation";
import Blog from "@/components/Home/Blog";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Home/Newsletter";
import Footer from "@/components/Home/Footer";
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
