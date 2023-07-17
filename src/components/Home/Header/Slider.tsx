"use client";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
	padding: "20px",
	background: "#efefef",
	color: "#000000",
};

const divStyle = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	backgroundSize: "cover",
	height: "70vh",
};
const slideImages = [
	{
		url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		caption: "Slide 1",
	},
	{
		url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
		caption: "Slide 2",
	},
	{
		url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		caption: "Slide 3",
	},
];

const Slideshow = () => {
	return (
		<div className="slide-container h-full">
			<Slide
				arrows={false}
				duration={10000}
				canSwipe={false}
				pauseOnHover={true}
				indicators={true}>
				{slideImages.map((slideImage, index) => (
					<div key={index} className="h-full">
						<div
							className="h-full rounded-3xl mx-3 mr-5 my-2"
							style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
							<span style={spanStyle}>{slideImage.caption}</span>
						</div>
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;
