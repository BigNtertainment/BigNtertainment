export type Response = {
	status: "success" | "fail";
	message: string;
};

export const sendFailResponse = (message: string): Response => ({
	status: "fail",
	message,
});

export const sendSuccessResponse = (message: string): Response => ({
	status: "success",
	message,
});
