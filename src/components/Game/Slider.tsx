"use client";

import { cn } from "@/lib/utils/tailwind";
import { Slide } from "react-slideshow-image";
import EmptyPage from "../shared/EmptyPage";

type Props = {
	className?: string;
	images: string[];
};

const Slider = ({ images, className }: Props) => {
	if (!images) {
		return <EmptyPage>No gameplay.</EmptyPage>;
	}

	return (
		<div className={cn("rounded-3xl overflow-hidden z-40", className)}>
			<Slide
				arrows={false}
				duration={4000}
				canSwipe={true}
				pauseOnHover={true}
				indicators={true}>
				{images.map((slide, index) => (
					<div key={index} className="h-full ">
						<div
							className="h-full bg-cover mx-10 pl-5"
							style={{
								backgroundImage: `url(${slide})`,
							}}></div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slider;
