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
			className="max-w-xl flex gap-10 rounded-3xl border-2 border-[#333333] p-5 py-4 hover:scale-105 transition hover:transition">
			<div className="w-1/4 relative aspect-square rounded-3xl ">
				<Image
					src={member.image}
					fill={true}
					alt={`${member.name} image`}
					className="object-cover rounded-full"
				/>
			</div>
			<div className="py-4">
				<span className="font-bold text-3xl">
					{member.name} {member.surname}
				</span>
				<div className="text-2xl">{member.description}</div>
			</div>
		</Link>
	);
};

export default MemberComponent;
