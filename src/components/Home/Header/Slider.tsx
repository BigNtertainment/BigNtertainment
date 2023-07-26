"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
	{
		url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		caption: "Slide 1",
	},
	{
		url: "https://img.itch.zone/aW1hZ2UvMjE2MDc2OS8xMjc1MTkxNS5wbmc=/original/yJay1h.png",
		title: "golf-control",
		description: "",
	},
	{
		url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		caption: "Slide 3",
	},
];

const Slideshow = () => {
	return (
		<div className="slide-container h-full rounded-t-3xl ">
			<Slide
				arrows={false}
				duration={10000}
				canSwipe={false}
				pauseOnHover={true}
				indicators={true}>
				{slideImages.map((slideImage, index) => (
					<div key={index} className="h-full ">
						<div
							className="h-full bg-cover grid grid-cols-2"
							style={{
								backgroundImage: `linear-gradient(105deg,rgba(37,37,37,.9) 0,rgba(37,37,37,.9) 45%,transparent 45%),url(${slideImage.url})`,
							}}>
							<div>
								<div className="uppercase flex flex-col gap-8 items-center h-full flex-1 mt-32">
									{/* BigNtertainment */}
									{/* <Image
										width={500}
										height={100}
										alt="aaa"
										src={`/${slideImage.title}.png`}
									/> */}
									{/* <h2 className="text-4xl text-center ">{slideImage.description}</h2> */}
								</div>
							</div>
						</div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;
