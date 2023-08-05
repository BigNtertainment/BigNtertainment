"use client";

import { Slide } from "react-slideshow-image";
import useSWR from "swr";
import "react-slideshow-image/dist/styles.css";
import { fetcher } from "@/lib/utils/fetchter";
import { Slider } from "../../../../sanity/database/controller/slider";
import BlockContent from "@sanity/block-content-to-react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Btn from "@/components/shared/LinkButton";

const Slideshow = () => {
	const { data } = useSWR("/api/slider", fetcher);

	const { breakPoint } = useWindowDimensions();

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
				{slides.map((slide, index) => {
					let backgroundImage = `linear-gradient(105deg,rgba(37,37,37,.9) 0,rgba(37,37,37,.9) 45%,transparent 45%),url(${slide.image})`;

					if (breakPoint === "md") {
						backgroundImage = `linear-gradient(105deg,rgba(37,37,37,.9) 0,rgba(37,37,37,.9) 60%,transparent 60%),url(${slide.image})`;
					}

					if (breakPoint === "sm") {
						backgroundImage = `linear-gradient(105deg,rgba(37,37,37,.9) 0,rgba(37,37,37,.9) 100%,transparent 100%),url(${slide.image})`;
					}

					return (
						<div key={index} className="h-full ">
							<div
								className="h-full grid lg:grid-cols-2 bg-fixed bg-center bg-no-repeat bg-cover"
								style={{
									backgroundImage,
								}}>
								<div>
									<div className="uppercase flex flex-col h-full flex-1 ml-14 py-10 prose  prose-invert prose-2xl break-words relative">
										<BlockContent
											blocks={slide.text}
											projectId={projectId}
											dataset={dataset}
										/>
										{slide.link && (
											<Btn
												className="mx-0 mt-0 -translate-y-32 self-start hover:-translate-y-32 no-underline text-lg"
												href={slide.link}>
												{slide.linkCaption}
											</Btn>
										)}
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</Slide>
		</div>
	);
};

export default Slideshow;
