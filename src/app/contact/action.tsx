"use server";

export const formAction = async (formData: FormData) => {
	console.log("server");

	return { message: "może działa lmao" };
};
