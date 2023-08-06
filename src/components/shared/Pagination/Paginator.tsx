import { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
	elementsAmount: number;
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	elementsPerPage: number;
};

const Paginator = ({
	elementsAmount,
	page,
	setPage,
	elementsPerPage,
}: Props) => {
	const pages = Math.ceil(elementsAmount / elementsPerPage);

	const buttons = [];

	for (let i = 1; i <= pages; i++) {
		buttons.push(
			<Button onClick={() => setPage(i)} active={i === page}>
				{i}
			</Button>
		);
	}

	return (
		<div className="flex items-center gap-4">
			<Button
				disabled={page === 1}
				onClick={() => setPage((prevState) => prevState - 1)}>
				<AiOutlineArrowLeft /> PREVIOUS
			</Button>
			{...buttons}
			<Button
				disabled={page === pages}
				onClick={() => setPage((prevState) => prevState + 1)}>
				NEXT <AiOutlineArrowRight />
			</Button>
		</div>
	);
};

export default Paginator;
