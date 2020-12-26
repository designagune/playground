import React from "react";

const TextInput = ({ setNumber, number, placeholder }) => {
  return (
    <input
      type="number"
      onChange={(e) => setNumber(e.target.value)}
      value={number}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
