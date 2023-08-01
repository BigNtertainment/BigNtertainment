import { cn } from "@/lib/utils/tailwind";

type Props = {
	children: React.ReactNode;
	className?: string;
};

const EmptyPage = ({ children, className }: Props) => {
	return (
		<div
			className={cn(
				"col-[center-start/center-end] font-bold text-center text-4xl",
				className
			)}>
			{children}
		</div>
	);
};

export default EmptyPage;
