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
		<main className="col-[center-start/center-end] flex flex-col pb-10 lg:pb-20">
			<Heading className="mx-auto my-10" size="4xl">
				Posts
			</Heading>
			<PostsList />
		</main>
	);
};

export default Page;
