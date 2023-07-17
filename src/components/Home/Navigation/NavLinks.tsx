import Link from "next/link";

const NavLinks = () => {
	return (
		<ul className="flex items-center">
			<li>
				<Link className="px-4 py-2 mx-2" href="#">
					Home
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2" href="#">
					Home
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2" href="#">
					Home
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
