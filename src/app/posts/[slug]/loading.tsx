import React from "react";

const Loading = () => {
	return (
		<div
			role="status"
			className="animate-pulse md:p-6 aspect-square col-[center-start/center-end]">
			<div className="flex gap-2">
				<div className="h-2 bg-dark-loading w-14 rounded-full"></div>
				<div className="h-2 bg-dark-loading w-14 rounded-full"></div>
			</div>
			<div className="h-7 bg-dark-loading w-64 mt-5 rounded"></div>
			<div className="flex gap-2 mt-5 mb-5">
				<div className="h-2 bg-dark-loading w-32 rounded-full"></div>
				<div className="h-2 bg-dark-loading w-10 rounded-full"></div>
				<div className="h-2 bg-dark-loading w-28 rounded-full"></div>
			</div>
			<div className="bg-dark-loading w-full aspect-video mt-5 mb-8 rounded-3xl"></div>

			<div className="h-2.5 rounded-full bg-dark-loading  w-48 mb-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading  w-48 mb-4 mt-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading  w-48 mb-4 mt-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading  w-48 mb-4 mt-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>

			<div className="my-10 mt-16 flex justify-between items-center">
				<div className="flex gap-2">
					<div className="h-4  rounded-full bg-dark-loading w-24"></div>
					<div className="h-4  rounded-full bg-dark-loading w-24"></div>
				</div>
				<div className="h-4  rounded-full bg-dark-loading w-36"></div>
			</div>

			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default Loading;
