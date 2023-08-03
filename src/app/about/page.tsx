import TeamList from "@/components/About/TeamList";
import Heading from "@/components/shared/Heading";
import React from "react";

const Page = async () => {
	return (
		<main className="col-[center-start/center-end] py-10">
			<article></article>
			<section>
				<Heading size="md" className="mb-14">
					Our team
				</Heading>
				<TeamList />
			</section>
		</main>
	);
};

export default Page;
