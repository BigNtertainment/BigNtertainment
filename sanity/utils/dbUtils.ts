import slugify from "slugify";

export const generateSlug = (input: string) => {
	return slugify(input.toLowerCase());
};

export const paginate = (query: string, { limit = 10, page = 1 }) => {
	const start = limit * page;
	const end = limit * page + limit;

	return query.replace("]", `][${start}...${end}]`);
};
