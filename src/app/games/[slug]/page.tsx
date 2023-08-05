import React from "react";
import SanityDatabase from "../../../../sanity/database";
import Image from "next/image";
import EmptyPage from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import Btn from "@/components/shared/LinkButton";
import Slider from "@/components/Game/Slider";
import MarkdownBlock from "@/components/shared/MarkdownBlock";

type Props = {
	params: { slug: string };
};

const database = new SanityDatabase();

const Page = async ({ params }: Props) => {
	const game = await database.games.getOne(params.slug);

	if (!game) {
		return <EmptyPage>Game not found!</EmptyPage>;
	}

	return (
		<main className="grid col-[center-start/center-end] mt-16 lg:mt-24">
			<section className="flex flex-col lg:flex-row justify-between gap-12 items-center">
				<header className="flex flex-col ">
					<Heading size="5xl" className="text-left mb-6 mx-0">
						{game.name}
					</Heading>
					<Heading size="xl" className="text-left max-w-xl text-dark-highlight ">
						{game.description}
					</Heading>
					<Btn
						href={game.gameLink}
						className="text-left mx-0 self-start px-8 mt-10 lg:mt-16">
						Play
					</Btn>
				</header>
				<div className="relative lg:max-w-[24rem]  lg:max-h-[24rem] w-full aspect-[3/2] object-cover lg:aspect-square rounded-3xl shadow-lg">
					<Image
						src={game.cover}
						alt={`${game.name} icon`}
						fill={true}
						className="rounded-3xl"
					/>
				</div>
			</section>
			<section className="overflow-hidden mt-20">
				<Heading size="4xl" className="mb-6">
					Gameplay &rarr;
				</Heading>

				{game?.gameplay ? (
					<Slider className="w-full h-[45rem]" images={game.gameplay} />
				) : (
					<EmptyPage>No gameplay photos</EmptyPage>
				)}
			</section>
			<article className="py-32 pt-20">
				<Heading size="4xl" className="mb-4">
					Game Information &rarr;
				</Heading>
				<MarkdownBlock markdown={game.content} />
			</article>
		</main>
	);
};

export default Page;
