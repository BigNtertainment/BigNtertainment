import { cn } from "@/lib/utils/tailwind";

type Props = {
	className?: string;
	childrenClassName?: string;
};

const NavAuth = ({ className, childrenClassName }: Props) => {
	const isAuthenticated = false;

	const authenticatedView = <>PROFILE</>;

	const notAuthenticatedView = (
		<>
			<button
				className={cn(
					"border-2 border-[#07f468] text-[#07f468] rounded-lg py-1.5  px-7 font-bold",
					childrenClassName
				)}>
				Sign In
			</button>
		</>
	);

	return (
		<div className={cn("flex gap-4", className)}>
			{isAuthenticated ? authenticatedView : notAuthenticatedView}
		</div>
	);
};

export default NavAuth;
