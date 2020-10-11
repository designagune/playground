import React, { useState } from "react";

const SampleComponent = ({ 프롭스, number }) => {
  const a = 1;
  const b = 1;
  const condition = a === b;
  return (
    <>
      <h1>
        {condition ? (
          <div>
            <input type="text" placeholder="적어보시든지" />
          </div>
        ) : (
          <span>스터디 루지해~</span>
        )}
      </h1>
      <div>
        <h1>
          {프롭스}
          {number}
        </h1>
      </div>
    </>
  );
};

export default SampleComponent;
