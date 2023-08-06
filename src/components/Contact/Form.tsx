"use client";

import { type Response } from "@/lib/utils/response";
import { useEffect, useRef, useState } from "react";
import Spinner from "../shared/Spinner";
import { useTransition } from "react";

type Props = {
	serverAction: (formData: FormData) => Promise<Response>;
};

const Form = ({ serverAction }: Props) => {
	const [response, setResponse] = useState<Response | null>(null);
	const [isPending, startTransition] = useTransition();

	const formRef = useRef<HTMLFormElement | null>(null);

	useEffect(() => {
		if (response?.status === "success") {
			formRef.current?.reset();
		}
	}, [response?.status]);

	return (
		<form
			ref={formRef}
			className="space-y-8 lg:mx-20"
			action={(formData) => {
				startTransition(() =>
					serverAction(formData).then((data) => setResponse(data))
				);
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
			{response?.status === "fail" && (
				<div className="text-red-500 text-lg text-center font-bold">
					{response.message}
				</div>
			)}
			{response?.status === "success" && (
				<div className="text-green-500 text-lg font-bold text-center">
					{response.message}
				</div>
			)}
			<button
				disabled={isPending}
				type="submit"
				className="hover:-translate-y-0.5 hover:transition transition py-2.5 px-4 text-sm border border-dark-neon-green text-dark-neon-green font-bold text-center self-center rounded-lg  sm:w-fit">
				{isPending ? (
					<div className="scale-75">
						<Spinner />{" "}
					</div>
				) : (
					"Send message"
				)}
			</button>
		</form>
	);
};

export default Form;
