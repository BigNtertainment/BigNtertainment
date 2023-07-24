import { cn } from "@/lib/utils/tailwind";
import RouterLink from "next/link";

type Props = {
	href: string;
	text: string;
	className?: string;
};

const Link = (props: Props) => {
	return (
		<RouterLink
			href={props.href}
			className={cn(
				`py-3 w-max rounded-lg text-2xl no-underline`,
				props.className
			)}>
			<span className="underline">{props.text}</span>{" "}
			<span className="no-underline">&rarr;</span>
		</RouterLink>
	);
};

export default Link;
