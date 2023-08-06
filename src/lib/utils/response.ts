export type Message<T> = T;

export const sendFailResponse = <T>(message: Message<T>) => ({
	status: "fail",
	message,
});

export const sendSuccessResponse = <T>(message: Message<T>) => ({
	status: "success",
	message,
});
