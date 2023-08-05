import MarkdownBlock from "@/components/shared/MarkdownBlock";
import { cn } from "@/lib/utils/tailwind";
import { type MarkdownBlock as Markdown } from "@/types/TSanity";

const Content = ({
	blocks,
	className,
}: {
	blocks: Markdown;
	className?: string;
}) => {
	return (
		<article
			className={cn(
				"prose prose-invert prose-base max-w-fit col-[1/-1] break-words",
				className
			)}>
			<MarkdownBlock markdown={blocks} />
		</article>
	);
};

export default Content;
