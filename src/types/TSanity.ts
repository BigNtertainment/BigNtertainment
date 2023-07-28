type Link = {
	_type: "link";
	href: string;
};

type Block = {
	_type: "block";
	children: {
		_type: "span";
		text: string;
		marks?: Array<{
			_type: "link";
			_key: string;
			href: string;
		}>;
	}[];
	level: number;
	listItem: "number" | "bullet";
	markDefs?: Link[];
	style: "normal" | "h2" | "h3" | "blockquote";
};

type Image = {
	_type: "image";
	asset: {
		_type: "reference";
		_ref: string;
	};
	hotspot: boolean;
};

export type MarkdownBlock = {
	_type: "content";
	title: string;
	type: "array";
	of: (Block | Image)[];
};
