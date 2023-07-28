import React from "react";
import { type Badge as TBadge } from "../../../../sanity/database/controller/badge";
import Badge from "@/components/shared/Badge";

type Props = {
	badges: TBadge[];
};

const Badges = ({ badges }: Props) => {
	return (
		<div className="flex gap-5 flex-wrap">
			{badges.map((badge) => (
				<Badge
					color={badge.color}
					key={badge.id}
					name={badge.name}
					href={`/posts?topic=${badge.name}`}
				/>
			))}
		</div>
	);
};

export default Badges;
