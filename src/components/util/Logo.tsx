import Image from "next/image";

type Props = {
	alt: string;
};

const Logo = ({ alt, ...props }: Props) => {
	const src = "";

	return <Image src={src} alt={alt} {...props} />;
};

export default Logo;
