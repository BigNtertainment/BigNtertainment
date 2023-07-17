import Logo from "../../util/Logo";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import NavTheme from "./NavTheme";

const Navigation = () => {
	return (
		<nav className="col-[full-start/full-end] fixed top-0 h-[6rem] py-3 w-full flex justify-between px-4 bg-dark-primary">
			<div className="h-full flex gap-6">
				<div className="relative h-full aspect-square">
					<Logo fill={true} />
				</div>
				<NavLinks />
			</div>
			<div className="flex gap-10">
				{/* <NavTheme /> */}
				<NavAuth />
			</div>
		</nav>
	);
};

export default Navigation;
