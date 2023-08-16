import Heading from "@/components/shared/Heading";
import Form from "@/components/Contact/Form";
import { formAction } from "./action";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "A contact page",
	alternates: {
		canonical: `/contact`,
		languages: {
			"en-US": `/contact`,
		},
	},
};

const Page = () => {
	return (
		<main className="col-[center-start/center-end] grid pt-10 pb-16 justify-center">
			<Heading
				size="4xl"
				className="mb-4 tracking-tight font-extrabold text-center mx-auto"
				animated={true}>
				Contact Us
			</Heading>
			<p className="mb-8 lg:mb-16 font-light text-center text-dark-secondary text-lg">
				Got a technical issue? Want to send feedback about a beta feature? Need
				details about our Business plan? Let us know.
			</p>

			<Form serverAction={formAction} />
			<div className="mt-20 h-9 flex justify-center gap-4 items-center">
				<Link
					href="https://twitter.com/BigNtertainment"
					className="h-6 aspect-square hover:opacity-70 hover:transition transition">
					<svg
						viewBox="0 0 1200 1227"
						xmlns="http://www.w3.org/2000/svg"
						role="none"
						fill="rgb(136 136 136)">
						<path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
					</svg>
				</Link>
				<Link
					href="https://github.com/BigNtertainment"
					className="h-full aspect-square hover:opacity-70 hover:transition transition">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 70 70"
						fill="rgb(136 136 136)"
						className="h-full">
						<path
							className="h-full"
							d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
					</svg>
				</Link>
			</div>
		</main>
	);
};

export default Page;
