import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";

type Props = {
	className?: string;
	children?: React.ReactNode;
};

const NavLinks = ({ className, children }: Props) => {
	return (
		<ul className={cn("flex items-center text-lg", className)}>
			<li>
				<Link className="px-4 py-2 mx-2 hover:opacity-80" href="/">
					Home
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2 hover:opacity-80" href="/games">
					Games
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2 hover:opacity-80" href="/posts">
					Posts
				</Link>
			</li>
			<li>
				<Link className="px-4 py-2 mx-2 hover:opacity-80" href="/about">
					About
				</Link>
			</li>

			<li>
				<Link className="px-4 py-2 mx-2 hover:opacity-80" href="/contact">
					Contact
				</Link>
			</li>

			{children}
		</ul>
	);
};

export default NavLinks;
