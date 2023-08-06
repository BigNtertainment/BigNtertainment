import { mailOptions, transporter } from "./configTransporter";
import { generateEmailContent } from "./generateContent";

export type MailData = {
	email: string;
	subject: string;
	message: string;
};

export const sendMail = async (data: MailData) => {
	await transporter.sendMail({
		...mailOptions,
		...generateEmailContent(data),
		subject: data.subject,
	});
};
