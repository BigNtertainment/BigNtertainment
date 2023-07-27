import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/tailwind";

export type BadgeColor = "red" | "green" | "violet" | "blue";

type LinkProps = {
	href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">;

type BadgeProps = {
	name: string;
	color: BadgeColor;
} & (LinkProps | React.HTMLAttributes<HTMLDivElement>);

const baseClassNames =
	"rounded-full border-[#07f468] border px-5 py-0.5 no-underline";

const calculateColor = (color: BadgeColor): string => {
	switch (color) {
		case "blue":
			return "text-badge-blue border-badge-blue";
		case "green":
			return "text-badge-green border-badge-green";
		case "red":
			return "text-badge-red border-badge-red";
		case "violet":
			return "text-badge-violet border-badge-violet";
		default:
			return "text-dark-highlight border-dark-highlight";
	}
};

const LinkBadge = (props: LinkProps & { name: string; color: BadgeColor }) => {
	const { href, name, color, ...rest } = props;
	return (
		<Link href={href}>
			<a className={cn(baseClassNames, calculateColor(color))} {...rest}>
				{name}
			</a>
		</Link>
	);
};

const DecorationBadge = (
	props: Omit<React.HTMLAttributes<HTMLDivElement>, "color"> & {
		name: string;
		color: BadgeColor;
	}
) => {
	const { name, color, ...rest } = props;
	return (
		<div className={cn(baseClassNames, calculateColor(color))} {...rest}>
			{name}
		</div>
	);
};

const Badge = (props: BadgeProps) => {
	const { name, color, ...rest } = props;

	if ("href" in props) {
		const linkProps = rest as LinkProps;
		return <LinkBadge color={color} name={name} {...linkProps} />;
	}

	const divProps = rest as Omit<React.HTMLAttributes<HTMLDivElement>, "color">;
	return <DecorationBadge color={color} name={name} {...divProps} />;
};

export default Badge;
