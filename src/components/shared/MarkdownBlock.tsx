import { type MarkdownBlock as Markdown } from "@/types/TSanity";
import BlockContent from "@sanity/block-content-to-react";

type Props = {
	markdown: Markdown;
};

const MarkdownBlock = ({ markdown }: Props) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

	return (
		<BlockContent blocks={markdown} projectId={projectId} dataset={dataset} />
	);
};

export default MarkdownBlock;
