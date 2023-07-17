import Logo from "../../util/Logo";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import NavTheme from "./NavTheme";

const Navigation = () => {
	return (
		<nav className="col-[full-start/full-end] sticky top-2.5 h-[7rem] py-4 pb-7 w-[calc(100%-2.5rem)]  flex justify-between mx-[1.3rem] px-2 pr-4  z-50 rounded-b-3xl ">
			<div className="h-full flex gap-6">
				<div className="relative h-full aspect-square">
					<Logo fill={true} />
				</div>
				<div className="flex items-center translate-y-0.5 -translate-x-3 text-3xl">
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
