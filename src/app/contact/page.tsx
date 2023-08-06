import Heading from "@/components/shared/Heading";

import Form from "@/components/Contact/Form";
import { formAction } from "./action";

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

			<Form serverAction={formAction} />
		</main>
	);
};

export default Page;
