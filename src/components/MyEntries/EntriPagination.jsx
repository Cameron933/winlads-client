import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const EntriPagination = ({ pageCount, buttonClick }) => {

  const handleClick = (no) => {
    buttonClick(no);
  };

  const minusButton = () => {
 
  };

  const plusButton = () => {

  };

  return (
    <div className="mx-auto my-10 flex items-center justify-center gap-3">
      <div className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border">
        <FaLessThan onClick={minusButton} />
      </div>
      {Array.from({ length: pageCount }, (_, index) => (
        <div
          className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer"
          key={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <div className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border">
        <FaGreaterThan onClick={plusButton} />
      </div>
    </div>
  );
};

export default EntriPagination;
