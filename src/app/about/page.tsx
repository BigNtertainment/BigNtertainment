import TeamList from "@/components/About/TeamList";
import Heading from "@/components/shared/Heading";
import BlockContent from "@sanity/block-content-to-react";
import SanityDatabase from "../../../sanity/database";
import { Metadata } from "next";

export const revalidate = 60 * 10;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const database = new SanityDatabase();

export const metadata: Metadata = {
	title: "About",
	description: "A page about our company",
	alternates: {
		canonical: `/about`,
		languages: {
			"en-US": `/about`,
		},
	},
};

const Page = async () => {
	const page = await database.page.getOne("about");

	return (
		<main className="col-[center-start/center-end] py-10 pb-12 lg:pb-16">
			<section>
				<article className="my-10 mb-16 prose prose-base prose-invert">
					<BlockContent
						blocks={page?.content}
						projectId={projectId}
						dataset={dataset}
					/>
				</article>
			</section>
			<section className="flex flex-col justify-center">
				<Heading
					size="4xl"
					animated={true}
					className="bg-dark-primary px-3 pl-1 mx-auto mb-8 lg:mb-10">
					Our team
				</Heading>
				<TeamList />
			</section>
		</main>
	);
};

export default Page;
