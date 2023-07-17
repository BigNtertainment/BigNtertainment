import Logo from "../../util/Logo";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import NavTheme from "./NavTheme";

const Navigation = () => {
	return (
		<nav className="col-[full-start/full-end] bg-dark-primary sticky top-0 pt-8 h-[8rem] py-8 pb-7 w-[calc(100%-2rem)]  flex justify-between mx-[1rem] px-2 pr-4  z-50 ">
			<div className="h-full flex gap-6 ">
				<div className="relative h-full aspect-square ">
					<Logo fill={true} />
				</div>
				<div className="flex items-center translate-y-0.5 -translate-x-3 text-3xl ">
					BigNtertainment
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
