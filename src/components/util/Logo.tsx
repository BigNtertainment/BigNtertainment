import Image from "next/image";

type Props = {
	alt: string;
	className: string;
};

const Logo = ({ alt, className, ...props }: Props) => {
	const src = "";

	return <Image src={src} className={` ${className}`} alt={alt} {...props} />;
};

export default Logo;
