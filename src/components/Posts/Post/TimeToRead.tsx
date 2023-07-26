import React from "react";

const calculateTimeToRead = (wordCount: number) => {
	const averageReadingSpeed = 200;
	const minutes = Math.ceil(wordCount / averageReadingSpeed);
	return minutes;
};

const countWords = (content: any) => {
	let wordCount = 0;

	content.forEach((block: any) => {
		if (block._type === "block" && block.children) {
			block.children.forEach((child: any) => {
				if (child._type === "span" && child.text) {
					const words = child.text.trim().split(/\s+/);
					wordCount += words.length;
				}
			});
		}
	});

	return wordCount;
};

const TimeToRead = ({ content }: any) => {
	const minutes = calculateTimeToRead(countWords(content));

	return <div>{minutes} min</div>;
};

export default TimeToRead;
