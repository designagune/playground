import React from "react";

const Mentee = ({ mentee }) => {
  return (
    <div>
      <strong
        style={{
          marginRight: "10px",
        }}
      >
        {mentee.name}
      </strong>
      <span>{mentee.katalk}</span>
    </div>
  );
};

const Member = ({ memberData }) => {
  return (
    <div>
      {memberData.map((val) => (
        <Mentee mentee={val} key={val.id} />
      ))}
    </div>
  );
};

export default Member;
