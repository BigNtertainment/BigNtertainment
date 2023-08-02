import React from "react";
import SanityDatabase from "../../../../sanity/database";
import Image from "next/image";
import EmptyPage from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import Btn from "@/components/shared/LinkButton";

type Props = {
	params: { slug: string };
};

const database = new SanityDatabase();

const Page = async ({ params }: Props) => {
	const game = await database.games.getOne(params.slug);

	console.log(game);

	if (!game) {
		return <EmptyPage>Game not found!</EmptyPage>;
	}

	return (
		<main className="grid col-[center-start/center-end] mt-32">
			<section className="flex justify-between gap-12">
				<header className="flex flex-col gap-14 justify-between max-h-[24rem]">
					<Heading size="xl" className="text-left">
						{game.name}
					</Heading>
					<Heading size="sm" className="text-left max-w-4xl">
						{game.description}
					</Heading>
					<Btn
						href={game.gameLink}
						className="mt-0 text-left mx-0 self-start px-12 py-3">
						Play
					</Btn>
				</header>
				<div className="relative max-w-[24rem] max-h-[24rem] w-full aspect-square rounded-3xl shadow-lg">
					<Image
						src={game.cover}
						alt={`${game.name} icon`}
						fill={true}
						className="rounded-3xl"
					/>
				</div>
			</section>
			<div></div>
			<article></article>
		</main>
	);
};

export default Page;
