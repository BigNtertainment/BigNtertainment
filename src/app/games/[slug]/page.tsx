import React from "react";
import SanityDatabase from "../../../../sanity/database";
import Image from "next/image";
import EmptyPage from "@/components/shared/EmptyPage";
import Heading from "@/components/shared/Heading";
import Btn from "@/components/shared/LinkButton";
import Slider from "@/components/Game/Slider";
import BlockContent from "@sanity/block-content-to-react";

type Props = {
	params: { slug: string };
};

const database = new SanityDatabase();

const Page = async ({ params }: Props) => {
	const game = await database.games.getOne(params.slug);

	if (!game) {
		return <EmptyPage>Game not found!</EmptyPage>;
	}

	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

	return (
		<main className="grid col-[center-start/center-end] mt-32">
			<section className="flex justify-between gap-12">
				<header className="flex flex-col  justify-between max-h-[24rem]">
					<Heading size="xl" className="text-left">
						{game.name}
					</Heading>
					<Heading size="sm" className="text-left max-w-4xl text-dark-highlight ">
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
			<Slider className="mt-36 h-[45rem]" images={game.gameplay} />
			<article className="py-32">
				<BlockContent
					blocks={game.content}
					projectId={projectId}
					dataset={dataset}
				/>
			</article>
		</main>
	);
};

export default Page;
