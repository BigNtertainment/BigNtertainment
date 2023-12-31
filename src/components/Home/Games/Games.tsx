import React from "react";
import GamesList from "./GamesList";
import Button from "@/components/shared/LinkButton";
import Heading from "@/components/shared/Heading";

const Games = () => {
	return (
		<section className="col-[center-start/center-end] my-24 mb-10  grid">
			<Heading animated={true} size="4xl">
				Our Games
			</Heading>
			<GamesList />
			<Button href="/games" className="whitespace-nowrap">
				See more
			</Button>
		</section>
	);
};

export default Games;
