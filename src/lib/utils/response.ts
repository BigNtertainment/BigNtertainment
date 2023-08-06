export type Message<T> = T;

export const failResponse = <T>(message: Message<T>) => ({
	status: "fail",
	message,
});

export const successResponse = <T>(message: Message<T>) => ({
	status: "success",
	message,
});
