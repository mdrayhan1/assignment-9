import React from "react";
import Option from "../Option/Option";
import Swal from "sweetalert2";


// show quiz questioins and ans
const Singlequiz = ({ questionData }) => {
  console.log(questionData);
  const { correctAnswer, options, question } = questionData;
  const handleCorrection = (option) => {
    if (option === correctAnswer) {
      Swal.fire("Correct Answer", `${correctAnswer}`, "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Wrong Answer",
        text: "Try Another Option",
      });
    }
  };
  const eye = () => {
    Swal.fire(`Correct Answer: ${correctAnswer}`);
  };
  return (
    <div className=" bg-blue-100 rounded-lg p-5 shadow-lg my-5 mx-auto w-3/4">
      <div className="flex justify-between text-center">
        <h1>{question}</h1>
        <h2>
          {
            <svg
              onClick={eye}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 ml-3  h-6	"
            >
              "
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        </h2>
      </div>

      {options.map((option, id) => (
        <Option
          key={id}
          option={option}
          correctAnswer={correctAnswer}
          handleCorrection={handleCorrection}
        ></Option>
      ))}
    </div>
  );
};

export default Singlequiz;
