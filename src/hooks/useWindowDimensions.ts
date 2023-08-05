"use client";

import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	const [breakPoint, setBreakPoint] = useState<
		"sm" | "md" | "lg" | "xl" | "2xl"
	>("xl");

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const { width } = windowDimensions;

		if (width <= 768) {
			setBreakPoint("sm");
		}
		if (width > 768) {
			setBreakPoint("md");
		}
		if (width > 865) {
			setBreakPoint("lg");
		}
		if (width > 1024) {
			setBreakPoint("xl");
		}
		if (width > 1280) {
			setBreakPoint("2xl");
		}
	}, [windowDimensions.width]);

	return { ...windowDimensions, breakPoint };
}
