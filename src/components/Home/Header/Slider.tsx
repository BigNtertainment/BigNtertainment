"use client";

import { Slide } from "react-slideshow-image";
import useSWR from "swr";
import "react-slideshow-image/dist/styles.css";
import { fetcher } from "@/lib/utils/fetchter";
import { Slider } from "../../../../sanity/database/controller/slider";
import BlockContent from "@sanity/block-content-to-react";

const Slideshow = () => {
	const { data } = useSWR("/api/slider", fetcher);

	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

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
								<div className="uppercase flex flex-col gap-8  h-full flex-1 ml-14 mt-28 prose  prose-invert prose-2xl break-words">
									<BlockContent
										blocks={slide.text}
										projectId={projectId}
										dataset={dataset}
									/>
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
