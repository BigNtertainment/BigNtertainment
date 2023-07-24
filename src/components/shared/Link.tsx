import RouterLink from "next/link";

type Props = {
	href: string;
	text: string;
};

const Link = (props: Props) => {
	return (
		<RouterLink
			href={props.href}
			className="py-3 w-max rounded-lg px-7 text-3xl no-underline">
			<span className="underline">{props.text}</span>{" "}
			<span className="no-underline">&rarr;</span>
		</RouterLink>
	);
};

export default Link;
