import Link from "next/link";

const NavLinks = () => {
	return (
		<ul className="flex items-center">
			<li>
				<Link className="px-4 py-2 mx-2" href="/">
					Home
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2" href="/games">
					Games
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2" href="/posts">
					Posts
				</Link>
				<Link className="px-4 py-2 mx-2" href="/about">
					About
				</Link>
				<Link className="px-4 py-2 mx-2" href="/contact">
					Contact
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
