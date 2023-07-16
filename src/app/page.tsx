import Announcement from "@/components/Home/Announcement";
import Games from "@/components/Home/Games";
import Header from "@/components/Home/Header";
import Navigation from "@/components/Home/Navigation";
import Blog from "@/components/Home/Blog";
import Reviews from "@/components/Home/Reviews";
import Newsletter from "@/components/Home/Newsletter";
import Footer from "@/components/Home/Footer";

export default function Home() {
	return (
		<div className="main-page-layout">
			<Navigation />
			<Header />
			<Announcement />
			<Games />
			<Blog />
			<Reviews />
			<Newsletter />
			<Footer />
		</div>
	);
}
