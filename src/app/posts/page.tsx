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
		<main className="col-[center-start/center-end] grid mt-12 mb-16">
			<Heading className="mb-10" size="4xl">
				Posts
			</Heading>
			<PostsList />
			{/* TODO: Add paginator component */}
		</main>
	);
};

export default Page;
