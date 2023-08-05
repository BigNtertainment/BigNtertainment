import Link from "next/link";
import { Member } from "../../../sanity/schemas/member";
import Image from "next/image";

type Props = {
	member: Member;
};

const MemberComponent = ({ member }: Props) => {
	return (
		<Link
			href={`/team/${member.slug}`}
			className="rounded-3xl bg-dark-line-highlight hover:-translate-y-1 transition hover:transition">
			<div className="relative aspect-square rounded-t-3xl ">
				<Image
					src={member.image}
					fill={true}
					alt={`${member.name} image`}
					className="object-cover rounded-t-2xl"
				/>
			</div>
			<div className="py-4 px-5">
				<span className="font-bold text-xl mb-6">
					{member.name} {member.surname}
				</span>
				<div className="text-base text-dark-highlight">{member.description}</div>
			</div>
		</Link>
	);
};

export default MemberComponent;
