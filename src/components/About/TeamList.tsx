import SanityDatabase from "../../../sanity/database";
import EmptyPage from "../shared/EmptyPage";
import Member from "./Member";

const database = new SanityDatabase();

const TeamList = async () => {
	const members = await database.members.getAll();

	if (!members) {
		return <EmptyPage>No members.</EmptyPage>;
	}

	return (
		<div>
			{members.map((member) => (
				<Member key={member.id} member={member} />
			))}
		</div>
	);
};

export default TeamList;
