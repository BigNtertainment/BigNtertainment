import { cn } from "@/lib/utils/tailwind";

type Props = {
	children: React.ReactNode;
	size: "sm" | "md" | "xl";
};

const Heading = ({
	className,
	...props
}: Props & React.HTMLAttributes<HTMLHeadElement>) => {
	let size = "";

	switch (props.size) {
		case "sm":
			size = "text-2xl";
			break;
		case "md":
			size = "text-4xl";
			break;
		case "xl":
			size = "text-6xl";
			break;
		default:
			size = "text-xl";
	}

	return (
		<h3 className={cn(`font-bold text-center`, size, className)} {...props}>
			{props.children}
		</h3>
	);
};

export default Heading;
