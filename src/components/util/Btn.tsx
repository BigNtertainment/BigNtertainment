import React, { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const Btn = (props: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className={`mt-16 mx-auto bg-dark-neon-green px-9 py-4 rounded-full  text-light-primary ${props.className}`}
			{...props}>
			{props.children}
		</button>
	);
};

export default Btn;
