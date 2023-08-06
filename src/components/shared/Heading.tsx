import { cn } from "@/lib/utils/tailwind";

type Props = {
	children: React.ReactNode;
	size:
		| "xs"
		| "sm"
		| "base"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl";
	animated?: boolean;
};

const Heading = ({
	className,
	animated,
	size,
	...props
}: Props & React.HTMLAttributes<HTMLHeadElement>) => {
	return (
		<h3
			className={cn(
				`font-bold text-center inline-block mx-auto transition text-${size}`,
				animated
					? "hover:transition hover:skew-y-2 hover:skew-x-12 hover:scale-105"
					: "",
				className
			)}
			{...props}>
			{props.children}
		</h3>
	);
};

export default Heading;
