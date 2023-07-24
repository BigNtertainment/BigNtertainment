"use client";

import useDarkMode from "@/hooks/useDarkMode";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavTheme = () => {
	const [enabled, setEnabled] = useDarkMode();

	const icon = enabled ? (
		<MdOutlineLightMode className="text-4xl" onClick={() => setEnabled(false)} />
	) : (
		<MdDarkMode className="text-4xl" onClick={() => setEnabled(true)} />
	);

	return <div className="flex items-center">{icon}</div>;
};

export default NavTheme;
