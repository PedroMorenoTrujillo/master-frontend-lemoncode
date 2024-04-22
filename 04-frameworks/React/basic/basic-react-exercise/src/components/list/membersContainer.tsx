import React from "react";
import MemberList from "./membersList";
import { MemberVM } from "./api";

export const MemberContainer: React.FC = () => {
  const [members, setMembers] = React.useState<MemberVM[]>([]);
  const [company, setCompany] = React.useState<string>("lemoncode");
  const url = `https://api.github.com/orgs/${company}/members`;

  const search = () => {
    if(company === '') return;
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMembers(json as MemberVM[]));
  };

  React.useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="member-container">
      <div className="member-container__search">
        <h1>Members</h1>
        <input
          type="text"
          placeholder="Search"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <button onClick={() => search()}>Search</button>
      </div>
      <MemberList memberList={members} />
    </div>
  );
};

export default MemberContainer;
