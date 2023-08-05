import Heading from "@/components/shared/Heading";
import { revalidatePath, revalidateTag } from "next/cache";

const Page = () => {
	return (
		<main className="col-[center-start/center-end] grid pt-10 pb-16 justify-center">
			<Heading
				size="4xl"
				className="mb-4 tracking-tight font-extrabold text-center mx-auto">
				Contact Us
			</Heading>
			<p className="mb-8 lg:mb-16 font-light text-center text-dark-secondary text-lg">
				Got a technical issue? Want to send feedback about a beta feature? Need
				details about our Business plan? Let us know.
			</p>

			<form className="space-y-8 lg:mx-20">
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
		</main>
	);
};

export default Page;
