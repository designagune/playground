import React from "react";

const Mentee = ({ mentee, onRemove, onStatus }) => {
  const { memberName, katalk, id, status} = mentee;
  return (
    <div>
      <strong
        style={{
          marginRight: "10px",
          cursor:"pointer"
        }}
        onClick={()=> onStatus(id)}
      >
        {memberName}
      </strong>
      {
        status 
        ? <b style={{ color:"green" }}>참여</b> 
        : <b style={{ color:"tomato"}}>탈주</b>
      }
      &nbsp;<span>{katalk}</span>
      &nbsp;<button onClick={() => onRemove(id)}>삭-제</button>
    </div>
  );
};

const Member = ({ memberData, onRemove, onStatus }) => {
  return (
    <div>
      {memberData.map((val) => (
        <Mentee mentee={val} key={val.id} onRemove={onRemove} onStatus={onStatus} />
      ))}
    </div>
  );
};

export default Member;
