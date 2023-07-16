"use client";

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (): [boolean, (enabled: boolean) => void] => {
	const [enabled, setEnabled] = useLocalStorage("dark-theme", false);
	const isEnabled = typeof enabled === "undefined" ? enabled : enabled;

	useEffect(() => {
		const className = "dark";
		const bodyClass = window.document.body.classList;

		isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
	}, [isEnabled]);

	return [enabled, setEnabled];
};

export default useDarkMode;
