export const validateEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const validateSubject = (subject: string) => {
	return subject.trim().length > 1;
};

export const validateMessage = (message: string) => {
	return message.trim().length > 6;
};
