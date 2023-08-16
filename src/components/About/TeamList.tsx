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
				"grid gap-3 grid-cols-[repeat(auto-fit,minmax(15rem,1fr)] sm:grid-cols-[repeat(auto-fit,minmax(15rem,16.5rem))] justify-center",
				className
			)}>
			{members.map((member) => (
				<Member key={member.id} member={member} />
			))}
		</div>
	);
};

export default TeamList;
