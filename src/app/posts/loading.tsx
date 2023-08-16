import Heading from "@/components/shared/Heading";
import Post from "@/components/shared/loading/Post";

const Loading = () => {
	return (
		<main className="col-[center-start/center-end] flex flex-col pb-10 lg:pb-20">
			<Heading className="mx-auto my-10" size="4xl">
				Posts
			</Heading>
			<div className="list-grid">
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</main>
	);
};

export default Loading;
