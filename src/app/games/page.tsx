import SanityDatabase from "../../../sanity/database";
import Heading from "@/components/shared/Heading";
import GamesList from "@/components/Game/GamesList";

const database = new SanityDatabase();

const Page = async () => {
	return (
		<div className="col-[center-start/center-end] flex flex-col pb-10 lg:pb-20">
			<Heading animated={true} size="4xl" className="mx-auto my-10">
				Our Games
			</Heading>

			<GamesList />

			{/* TODO: Add paginator component */}
		</div>
	);
};

export default Page;
