import React from "react";

type Props = {
	params: { id: string };
};

const Post = ({ params }: Props) => {
	const postId = params.id;

	return <main className="col-[center-start/center-end]">{postId}</main>;
};

export default Post;
