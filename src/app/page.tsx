import Games from "@/components/Home/Games/Games";
import Header from "@/components/Home/Header/Header";
import Blog from "@/components/Home/Blog/Blog";

export const revalidate = 60 * 10;

export default async function Home() {
	return (
		<main className="grid grid-rows-[75vh_repeat(5,min-content)] gridLayout col-[full-start/full-end] lg:px-4 lg:pt-1">
			<Header />
			<Games />
			<Blog />
		</main>
	);
}
