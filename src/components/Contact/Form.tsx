"use client";

import { useState } from "react";

type Props = {
	serverAction: (formData: FormData) => Promise<any>;
};

const Form = ({ serverAction }: Props) => {
	const [res, setRes] = useState(null);

	return (
		<form
			className="space-y-8 lg:mx-20"
			action={(formData) => {
				serverAction(formData).then((data) => console.log(data));
			}}>
			<div>
				<label
					htmlFor="email"
					className="block mb-2 text-base font-medium text-dark-primary ">
					Your email
				</label>
				<input
					type="email"
					id="email"
					name="email"
					className="outline-none shadow-sm bg-dark-line-highlight placeholder:text-dark-secondary text-dark-primary text-sm rounded-lg block w-full py-4 px-5"
					placeholder="name@flowbite.com"
					required
				/>
			</div>
			<div>
				<label htmlFor="subject" className="block mb-2 text-base font-medium ">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					name="subject"
					className="outline-none shadow-sm bg-dark-line-highlight placeholder:text-dark-secondary text-dark-primary text-sm rounded-lg block w-full py-4 px-5"
					placeholder="Let us know how we can help you"
					required
				/>
			</div>
			<div className="sm:col-span-2">
				<label htmlFor="message" className="block mb-2 text-base font-medium ">
					Your message
				</label>
				<textarea
					required
					id="message"
					name="message"
					rows={6}
					className="outline-none shadow-sm bg-dark-line-highlight placeholder:text-dark-secondary text-dark-primary text-sm rounded-lg block w-full py-4 px-5"
					placeholder="Leave a comment..."></textarea>
			</div>
			<button
				type="submit"
				className="py-2.5 px-4 text-sm border border-dark-neon-green text-dark-neon-green font-bold text-center self-center rounded-lg  sm:w-fit">
				Send message
			</button>
		</form>
	);
};

export default Form;
