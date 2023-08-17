import React from "react";

const Loading = () => {
	return (
		<div
			role="status"
			className="animate-pulse aspect-square col-[center-start/center-end]  overflow-x-hidden overflow-y-hidden">
			<section className="flex flex-col lg:flex-row justify-between gap-12 items-center ">
				<header className="flex flex-col ">
					<div className="text-left mb-6 mx-0 bg-dark-loading h-5"></div>
					<div className="text-left max-w-xl text-dark-highlight bg-dark-loading h-2.5"></div>
					<div className="text-left mx-0 self-start px-8 mt-10 lg:mt-16 bg-dark-loading h-8"></div>
				</header>
				<div className="relative lg:max-w-[24rem] bg-dark-loading  lg:max-h-[24rem] w-full aspect-[3/2] object-cover lg:aspect-square rounded-3xl shadow-lg"></div>
			</section>

			<div className="bg-dark-loading w-full aspect-video mt-24 mb-8 rounded-3xl"></div>

			<div className="h-2.5 rounded-full bg-dark-loading  w-full mb-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading w-full mb-4 mt-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading  w-full mb-4 mt-4"></div>
			<div className="h-2  rounded-full bg-dark-loading  mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading mb-2.5"></div>
			<div className="h-2  rounded-full bg-dark-loading "></div>
			<div className="h-2.5 rounded-full bg-dark-loading  w-full mb-4 mt-4"></div>
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
