import React, { useState } from "react";
import TextInput from "./TextInput";

const PlusMinus = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const calcClick = (e) => {
    const {
      target: { innerText },
    } = e;

    const firstVal = Number(firstNumber);
    const secondVal = Number(secondNumber);

    if (firstNumber && secondNumber) {
      if (innerText === "PLUS") {
        alert(`아마 ${firstVal + secondVal} 일지도?`);
      } else if (innerText === "MINUS") {
        alert(`아마 ${firstVal - secondVal} 일지도?`);
      }
    } else {
      alert("둘다 입력해 주시던가");
    }
  };

  return (
    <div>
      <TextInput setNumber={setFirstNumber} placeholder="입력해 보시던가" />
      <TextInput setNumber={setSecondNumber} placeholder="또 입력해 보시던가" />
      <div>
        {["PLUS", "MINUS"].map((v, i) => (
          <button type="button" onClick={calcClick} key={i}>
            {v}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlusMinus;
