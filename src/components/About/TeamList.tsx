import { cn } from "@/lib/utils/tailwind";
import SanityDatabase from "../../../sanity/database";
import EmptyPage from "../shared/EmptyPage";
import Member from "./Member";

const database = new SanityDatabase();

type Props = {
	className?: string;
};

const TeamList = async ({ className }: Props) => {
	const members = await database.members.getAll();

	if (!members) {
		return <EmptyPage>No members.</EmptyPage>;
	}

	return (
		<div
			className={cn(
				"grid  grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]",
				className
			)}>
			{members.map((member) => (
				<Member key={member.id} member={member} />
			))}
		</div>
	);
};

export default TeamList;
