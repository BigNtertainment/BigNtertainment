import BlockContent from "@sanity/block-content-to-react";

const Content = ({ blocks }: any) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

	return (
		<article className="prose prose-invert prose-2xl max-w-fit col-[1/-2]">
			<BlockContent blocks={blocks} projectId={projectId} dataset={dataset} />
		</article>
	);
};

export default Content;
