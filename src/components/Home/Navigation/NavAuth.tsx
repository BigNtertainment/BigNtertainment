const NavAuth = () => {
	const isAuthenticated = false;

	const authenticatedView = <>PROFILE</>;

	const notAuthenticatedView = (
		<>
			<button className=" border-2 border-[#07f468] text-[#07f468] rounded-lg  px-10 font-bold">
				Sign In
			</button>
		</>
	);

	return (
		<div className="flex gap-4">
			{isAuthenticated ? authenticatedView : notAuthenticatedView}
		</div>
	);
};

export default NavAuth;
