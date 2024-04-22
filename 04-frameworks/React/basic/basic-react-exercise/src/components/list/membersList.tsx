import { MemberVM } from "./api";
import MemberRow from "./memberRow";

interface Props{
    memberList: MemberVM[]
}
export const MemberList: React.FC<Props> = ({ memberList }) => {
  return (
    <>
      {memberList.length > 0 ? (
        memberList.map((member) => <MemberRow member={member} key={member?.id}/>)
      ) : (
        <p>0 elements</p>
      )}
    </>
  );
};

export default MemberList;
