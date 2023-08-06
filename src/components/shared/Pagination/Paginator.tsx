import Button from "./Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
	elementsAmount: number;
	page: number;
	setPage: (page: number) => void;
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
		buttons.push(<Button>{i}</Button>);
	}

	return (
		<div className="flex items-center gap-7">
			<Button disabled={page === 1}>
				<AiOutlineArrowLeft /> PREVIOUS
			</Button>
			{...buttons}
			<Button disabled={page === pages}>
				NEXT <AiOutlineArrowRight />
			</Button>
		</div>
	);
};

export default Paginator;
