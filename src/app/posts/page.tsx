import PostsList from "@/components/Posts/PostsList";
import Heading from "@/components/shared/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Posts",
	description: "A list of our posts",
	alternates: {
		canonical: `/posts`,
		languages: {
			"en-US": `/posts`,
		},
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
