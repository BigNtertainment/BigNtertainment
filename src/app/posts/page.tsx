import PostsList from "@/components/Posts/PostsList";
import Heading from "@/components/shared/Heading";

export const metadata = {
	title: "Posts",
	description: "List of all posts",
	alternates: {
		canonical: `${process.env.baseUrl}/posts`,
	},
};

const Page = () => {
	return (
		<main className="col-[center-start/center-end]">
			<Heading className="mt-20" size="xl">
				Posts
			</Heading>
			<PostsList />
		</main>
	);
};

export default Page;
