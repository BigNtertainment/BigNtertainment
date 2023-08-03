import TeamList from "@/components/About/TeamList";
import Heading from "@/components/shared/Heading";
import BlockContent from "@sanity/block-content-to-react";
import SanityDatabase from "../../../sanity/database";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const database = new SanityDatabase();

const Page = async () => {
	const page = await database.page.getOne("about");

	return (
		<main className="col-[center-start/center-end] py-10">
			<section>
				<article className="my-10 mb-14">
					<BlockContent
						blocks={page?.content}
						projectId={projectId}
						dataset={dataset}
					/>
				</article>
			</section>
			<section>
				<Heading
					size="md"
					className="translate-y-1/2 mb-1 bg-dark-primary px-3 pl-1 z-10 inline-block mx-auto">
					Our team
				</Heading>
				<hr className="mb-12" />
				<TeamList />
			</section>
		</main>
	);
};

export default Page;
