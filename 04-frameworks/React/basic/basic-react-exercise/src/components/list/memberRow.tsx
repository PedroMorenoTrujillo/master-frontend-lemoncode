import { Link } from "react-router-dom";
import { MemberVM } from "./api";

interface Props {
  member: MemberVM;
}

export const MemberRow: React.FC<Props> = ({ member }) => {
  return (
    <div className="member-row">
      <h1>{member.login}</h1>
      <img src={member.avatar_url} alt={member.login} />
      <Link to={`/detail/${member.login}`}>Go to {member.login} details</Link>
    </div>
  );
};

export default MemberRow;
