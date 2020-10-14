import React from "react";

const CreateMember = ({ memberName, katalk, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="memberName"
        placeholder="이름"
        onChange={onChange}
        value={memberName}
      />
      <input
        name="katalk"
        placeholder="카톡"
        onChange={onChange}
        value={katalk}
      />
      <button onClick={onCreate}>생!성!</button>
    </div>
  );
};

export default CreateMember;
