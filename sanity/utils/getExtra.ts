export const getPhoto = (ref: string) => {
	const reference = ref.slice(6);
	const extension = reference.split("-")[2];
	const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
	const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
	const id = reference.slice(0, -4);

	return `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}.${extension}`;
};
