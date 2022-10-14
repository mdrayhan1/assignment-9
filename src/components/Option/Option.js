import React from "react";

const Option = ({ option, correctAnswer, handleCorrection }) => {
  console.log(correctAnswer);

  return (
    <div className="my-2">
      <label>
        <input
          onClick={() => handleCorrection(option)}
          type="radio"
          name="circle"
          id=""
        />
        <span>{option}</span>
      </label>
    </div>
  );
};

export default Option;
