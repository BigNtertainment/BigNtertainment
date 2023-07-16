import Announcement from "@/components/Home/Announcement";
import Header from "@/components/Home/Header";
import Navigation from "@/components/Home/Navigation";

export default function Home() {
	return (
		<div className="main-page-layout">
			<Navigation />
			<Header />
			<Announcement />
		</div>
	);
}
