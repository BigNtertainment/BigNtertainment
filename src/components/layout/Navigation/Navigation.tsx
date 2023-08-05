import Logo from "../../shared/Logo";
import ClassicNav from "./ClassicNav";
import MobileNav from "./MobileNav";
import NavAuth from "./NavAuth";
import NavLinks from "./NavLinks";
import NavTheme from "./NavTheme";

const Navigation = () => {
	return (
		<nav className="col-[full-start/full-end] bg-dark-primary sticky top-0 pt-1 pb-2 px-2 sm:pt-5 sm:pb-4 sm:px-4 lg:px-0  w-full lg:w-[calc(100%-2rem)] flex justify-between lg:mx-[1rem] z-50 items-center">
			<ClassicNav />
			<MobileNav />
		</nav>
	);
};

export default Navigation;
