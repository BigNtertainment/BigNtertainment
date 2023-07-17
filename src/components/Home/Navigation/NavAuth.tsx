const NavAuth = () => {
	const isAuthenticated = false;

	const authenticatedView = <>PROFILE</>;

	const notAuthenticatedView = (
		<>
			<button>Sign In</button>
			<button>Sign Up</button>
		</>
	);

	return (
		<div className="flex gap-4">
			{isAuthenticated ? authenticatedView : notAuthenticatedView}
		</div>
	);
};

export default NavAuth;
