import { Member } from "../../../sanity/schemas/member";

type Props = {
	member: Member;
};

const MemberComponent = ({ member }: Props) => {
	console.log(member);

	return <div>Member</div>;
};

export default MemberComponent;
