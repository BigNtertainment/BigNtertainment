import { NextResponse } from "next/server";
import SanityDatabase from "../../../../sanity/database";

export const GET = async () => {
	const database = new SanityDatabase();

	const slides = await database.slider.getAll();

	if (!slides) {
		return NextResponse.json({
			results: 0,
			data: null,
		});
	}

	return NextResponse.json(
		{
			results: slides.length,
			data: slides,
		},
		{
			status: 200,
		}
	);
};
