import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

const EntriPagination = ({ pageCount, buttonClick, currentPage, setCurrentPage }) => {

  const handleClick = (no) => {
    buttonClick(no);
    setCurrentPage(no)
  };

  const minusButton = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  };

  const plusButton = () => {
    if(pageCount > currentPage) {
      setCurrentPage(currentPage + 1)
    }
  };

  return (
    <div className="mx-auto my-10 flex items-center justify-center gap-3">
      <div className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border" onClick={minusButton}>
        <FaLessThan />
      </div>
      {Array.from({ length: pageCount }, (_, index) => (
        <div
          className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer"
          style={{backgroundColor: currentPage === index+1 ? "grey" : "white"}}
          key={index + 1}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <div className="p-2 rounded-full hover:bg-gray-300 aspect-square cursor-pointer border" onClick={plusButton}>
        <FaGreaterThan />
      </div>
    </div>
  );
};

export default EntriPagination;
