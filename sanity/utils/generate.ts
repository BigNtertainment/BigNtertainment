import slugify from "slugify";

export const generateSlug = (input: string) => {
	return slugify(input.toLowerCase());
};
