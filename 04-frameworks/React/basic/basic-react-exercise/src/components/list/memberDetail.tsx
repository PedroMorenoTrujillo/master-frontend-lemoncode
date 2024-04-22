import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberVM } from "./api";

export const MemberDetail = () => {
  const [member, setMember] = React.useState<MemberVM>({} as MemberVM);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => setMember(json as MemberVM));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="member-detail">
      <p> <span className="member-detail__title">Id:</span> {member.id}</p>
      <p> <span className="member-detail__title">Login:</span> {member.login}</p>
      <p> <span className="member-detail__title">Name:</span> {member?.name}</p>
      <p> <span className="member-detail__title">Company:</span> {member?.company}</p>
      <p> <span className="member-detail__title">Bio:</span> {member?.bio}</p>
      <p><img className="member-detail__image" src={member.avatar_url} alt={member.login}/></p>
      <Link to="/">Back to list page</Link>
    </div>
  );
};

export default MemberDetail;
