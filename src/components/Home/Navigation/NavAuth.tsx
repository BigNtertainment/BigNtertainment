const NavAuth = () => {
	const isAuthenticated = false;

	const authenticatedView = <>PROFILE</>;

	const notAuthenticatedView = (
		<>
			<button>Sign In</button>
			<button>Sign Up</button>
		</>
	);

	return <div>{isAuthenticated ? authenticatedView : notAuthenticatedView}</div>;
};

export default NavAuth;
