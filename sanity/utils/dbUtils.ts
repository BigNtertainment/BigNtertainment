import slugify from "slugify";

export const generateSlug = (input: string) => {
	return slugify(input.toLowerCase());
};

export const paginate = ({ limit = 10, page = 1 }) => {
	const start = limit * (page - 1);
	const end = limit * (page - 1) + limit;
	return `${start}...${end}`;
};
