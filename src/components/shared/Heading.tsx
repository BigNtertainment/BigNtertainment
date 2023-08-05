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
	animated: boolean;
};

const Heading = ({
	className,
	animated,
	...props
}: Props & React.HTMLAttributes<HTMLHeadElement>) => {
	return (
		<h3
			className={cn(
				`font-bold text-center transition`,
				animated ? "hover:transition hover:skew-y-2 skew-x-12 scale-105" : "",
				className
			)}
			{...props}>
			{props.children}
		</h3>
	);
};

export default Heading;
