import Heading from "@/components/shared/Heading";
import GamesList from "@/components/Game/GamesList";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Games",
	description: "A list of all our games",
	alternates: {
		canonical: `/games`,
		languages: {
			"en-US": `/games`,
		},
	},
};

const Page = async () => {
	return (
		<div className="col-[center-start/center-end] flex flex-col pb-10 lg:pb-20">
			<Heading animated={true} size="4xl" className="mx-auto my-10">
				Our Games
			</Heading>

			<GamesList />
		</div>
	);
};

export default Page;
