import { cn } from "@/lib/utils/tailwind";
import BlockContent from "@sanity/block-content-to-react";

const Content = ({ blocks, className }: { blocks: any; className: string }) => {
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

	return (
		<article
			className={cn(
				"prose prose-invert prose-2xl max-w-fit col-[1/-1] break-words",
				className
			)}>
			<BlockContent blocks={blocks} projectId={projectId} dataset={dataset} />
		</article>
	);
};

export default Content;
