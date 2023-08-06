import Link from "next/link";

const Location = () => {
	return (
		<div className="absolute -top-16">
			<Link href="/">Home</Link>
			<div className="-translate-y-0.5 inline-block mx-1.5 text-dark-highlight">
				»{" "}
			</div>
			<Link href="/games">Games</Link>
		</div>
	);
};

export default Location;
