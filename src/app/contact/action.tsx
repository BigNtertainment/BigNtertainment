"use server";

import {
	validateEmail,
	validateMessage,
	validateSubject,
} from "@/lib/utils/mail/validate";

export const formAction = async (formData: FormData) => {
	console.log("server");

	const email = formData.get("email")?.toString();
	const subject = formData.get("subject")?.toString();
	const message = formData.get("message")?.toString();

	if (!email) {
		return { status: "FAIL", message: "No email provided." };
	}

	if (!subject) {
		return { status: "FAIL", message: "No subject provided." };
	}

	if (!message) {
		return { status: "FAIL", message: "No message provided." };
	}

	if (!validateEmail(email)) {
		return { status: "FAIL", message: "Wrong email provided." };
	}

	if (!validateSubject(subject)) {
		return { status: "FAIL", message: "Too short subject provided." };
	}

	if (!validateMessage(message)) {
		return {
			status: "FAIL",
			message:
				"Too short message provided. Message should be longer than 6 characters.",
		};
	}
};
