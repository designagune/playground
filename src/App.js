import React, { useState, useRef } from "react";
import CreateMember from "./CreateMember";
import Member from "./Member";

function App() {
  const memberData = [
    {
      id: 1,
      name: "채동건",
      katalk: "건이",
    },
    {
      id: 2,
      name: "김영우",
      katalk: "♻️",
    },
    {
      id: 3,
      name: "유항진",
      katalk: "항따리",
    },
    {
      id: 4,
      name: "정세리",
      katalk: "SeRi",
    },
  ];

  const onChange = (event) => {};

  const nextId = useRef(5);

  const onCreate = () => {
    nextId.current += 1;
  };

  return (
    <>
      <Member memberData={memberData} />
      <CreateMember onChange={onChange} onCreate={onCreate} />
    </>
  );
}

export default App;
