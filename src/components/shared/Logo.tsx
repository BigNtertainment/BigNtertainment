import Image from "next/image";

const Logo = (props: any) => {
	return (
		<Image
			loading="lazy"
			src={"/logo-dark.svg"}
			alt="BigNtertainment logo"
			{...props}
		/>
	);
};

export default Logo;
