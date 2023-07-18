import React from "react";

type Props = {
	name: string;
	color: string;
};

const Badge = ({ name, color }: Props) => {
	console.log(name, color);

	return (
		<div className="rounded-full border-[#07f468] border px-5 py-0.5 text-[#07f468]">
			{name}
		</div>
	);
};

export default Badge;
