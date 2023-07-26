"use client";

import { Slide } from "react-slideshow-image";
import useSWR from "swr";
import "react-slideshow-image/dist/styles.css";
import { fetcher } from "@/lib/utils/fetchter";
import { Slider } from "../../../../sanity/database/controller/slider";

const Slideshow = () => {
	const { data } = useSWR("/api/slider", fetcher);

	const slides = data?.data as Slider[];

	if (!slides) {
		return "Loading...";
	}

	return (
		<div className="slide-container h-full rounded-t-3xl ">
			<Slide
				arrows={false}
				duration={10000}
				canSwipe={false}
				pauseOnHover={true}
				indicators={true}>
				{slides.map((slide, index) => (
					<div key={index} className="h-full ">
						<div
							className="h-full bg-cover grid grid-cols-2"
							style={{
								backgroundImage: `linear-gradient(105deg,rgba(37,37,37,.9) 0,rgba(37,37,37,.9) 45%,transparent 45%),url(${slide.image})`,
							}}>
							<div>
								<div className="uppercase flex flex-col gap-8 items-center h-full flex-1 mt-32">
									XD
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
