import React from "react";
import "./GoldCard.css";

const SmallGoldCard = () => {
  return (
    <div className="cardBg rounded-3xl px-4 flex flex-row justify-between py-4 cursor-pointer gap-2">
      <div className="flex flex-col space-y-1 ">
        <span className="font-bold text-4xl">Gold</span>
        <span className="text-sm font-bold">
          Expires on 2023.00.00
        </span>
      </div>
      <div className="flex flex-row xl:gap-2 gap-1 items-center">
        <p className="font-semibold text-sm">Auto Renewal</p>
        <input
          type="checkbox"
          id="hs-basic-usage"
          className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white

before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
        />
        <label htmlFor="hs-basic-usage text-black" className="sr-only">
          switch
        </label>
      </div>
    </div>
  );
};

export default SmallGoldCard;
