import React from "react";

const QuestionBox = ({ question }) => {
  
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Problem Statement
      </h1>
      <div className="w-full h-80 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto mb-4">
        { <>{question}</> }
      </div>
    </>
  );
};


export default QuestionBox;
