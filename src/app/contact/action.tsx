"use server";

import { sendMail } from "@/lib/utils/mail/sendMail";
import {
	validateEmail,
	validateMessage,
	validateSubject,
} from "@/lib/utils/mail/validate";
import { sendFailResponse, sendSuccessResponse } from "@/lib/utils/response";

export const formAction = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const subject = formData.get("subject")?.toString();
	const message = formData.get("message")?.toString();

	if (!email) {
		return sendFailResponse("No email provided.");
	}

	if (!subject) {
		return sendFailResponse("No subject provided.");
	}

	if (!message) {
		return sendFailResponse("No message provided.");
	}

	if (!validateEmail(email)) {
		return sendFailResponse("Wrong email provided.");
	}

	if (!validateSubject(subject)) {
		return sendFailResponse("Too short subject provided.");
	}

	if (!validateMessage(message)) {
		return sendFailResponse(
			"Too short message provided. Message should be longer than 6 characters."
		);
	}

	try {
		await sendMail({
			email,
			message,
			subject,
		});
	} catch (error: any) {
		return sendFailResponse(error.message);
	}

	return sendSuccessResponse("Email sent!");
};
