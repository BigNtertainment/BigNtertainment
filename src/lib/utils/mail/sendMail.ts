import { mailOptions, transporter } from "./configTransporter";

type MailData = {
	email: string;
	subject: string;
	message: string;
};

export const sendMail = async (data: MailData) => {
	await transporter.sendMail({
		...mailOptions,
		subject: data.subject,
		text: data.message,
		html: "<h1>Test lmao</h1>",
	});
};
