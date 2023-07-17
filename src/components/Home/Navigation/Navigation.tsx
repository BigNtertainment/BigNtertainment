import Logo from "../../util/Logo";
import NavLinks from "./NavLinks";

const Navigation = () => {
	return (
		<nav className="col-[full-start/full-end] fixed top-0 h-[6rem] py-3 w-full flex justify-between px-4 bg-dark-primary">
			<div className="h-full flex">
				<div className="relative h-full aspect-square">
					<Logo fill={true} />
				</div>
				<NavLinks />
			</div>
			<div>XD</div>
		</nav>
	);
};

export default Navigation;
