import React, { useState } from "react";
import { IoIosOptions } from "react-icons/io";
import { GoBell } from "react-icons/go";
const Filters = ({
  categoryVal,
  roundVal,
  winStatus,
  validDate,
  entNumber,
}) => {
  const [isCatShow, setIsCat] = useState(false);
  const [isRoundShow, setIsRound] = useState(false);
  const [winShow, setWinShow] = useState(false);

  const [catValue, setCatValue] = useState("Giveaway Category");
  const [roundValue, setRoundVal] = useState("Giveaway Rounds");

  const handleCategoryShow = () => {
    setIsCat((prev) => !prev);
  };
  const handleRoundsShow = () => {
    setIsRound((prev) => !prev);
  };
  const handleWinShow = () => {
    setWinShow((prev) => !prev);
  };

  const handleCatChange = (val) => {
    setCatValue(val);
    categoryVal(val);
    setIsCat(false);
  };
  const handleRoundChange = (val) => {
    setRoundVal(val);
    roundVal(val);
    setIsRound(false);
  };

  return (
    <>
      <h1 className="special:text-4xl xl:text-3xl md:text-xl text-lg font-extrabold mb-10 xl:block hidden">
        My Entries
      </h1>
      <div className="hidden xl:grid grid-cols-5 mb-4 gap-2">
        <div className="col-span-1">
          <div className="w-full text-ellipsis overflow-hidden flex items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold">
            <p className="2xl:text-lg xl:text-sm">{catValue}</p>
            <IoIosOptions
              className="2xl:text-xl xl:text-sm m-1 cursor-pointer flex-shrink-0"
              onClick={handleCategoryShow}
            />
          </div>
          {isCatShow && (
            <ul className="absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold">
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCatChange("Blue")}
              >
                Blue
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCatChange("Yellow")}
              >
                Yellow
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCatChange("Red")}
              >
                Red
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleCatChange("Green")}
              >
                Green
              </li>
            </ul>
          )}
        </div>
        {/* Giveaway Rounds */}
        <div className="col-span-4 gap-2">
          <div className="flex flex-row">
          <div className="flex flex-1 items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold">
            <p className="2xl:text-lg xl:text-sm">{roundValue}</p>
            <IoIosOptions
              className="2xl:text-xl xl:text-sm m-1 cursor-pointer"
              onClick={handleRoundsShow}
            />
          </div>
          {isRoundShow && (
            <ul className="absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold">
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleRoundChange("1")}
              >
                Round 1
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleRoundChange("2")}
              >
                Round 2
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleRoundChange("3")}
              >
                Round 3
              </li>
              <li
                className="p-3 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleRoundChange("4")}
              >
                Round 4
              </li>
            </ul>
          )}
          <div className="flex flex-row">
            <input
              type="text"
              name="entry-number"
              className="bg-gray-300 px-4 py-3 gap-2 rounded-full 2xl:text-lg xl:text-sm font-semibold placeholder:2xl:text-lg placeholder:xl:text-sm  placeholder:text-black outline-none"
              placeholder="Entry Numbers"
              onChange={(e) => entNumber(e.target.value)}
            />
            <input
              type="date"
              name="valid-date"
              className="bg-gray-300 flex-3 max-w-[300px] px-4 py-3 gap-2 rounded-full 2xl:text-lg xl:text-sm font-semibold cursor-pointer"
              placeholder="Valid Date"
              onChange={(e) => validDate(e.target.value)}
            />
          </div>
          <div className="relative cursor-pointer">
            <div
              className="flex items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold w-max"
              onClick={handleWinShow}
            >
              <p className="2xl:text-lg xl:text-sm">Win State</p>
            </div>
            {winShow && (
              <ul className="absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold">
                <li
                  className="p-3 hover:bg-gray-200 cursor-pointer"
                  onClick={() => winStatus(1)}
                >
                  Win
                </li>
                <li
                  className="p-3 hover:bg-gray-200 cursor-pointer"
                  onClick={() => winStatus(0)}
                >
                  Loss
                </li>
              </ul>
            )}
          </div>
          <input
            type="text"
            name="search"
            className="rounded-xl px-4 py-4 outline-none w-full bg-gray-200 xl:hidden"
            placeholder="Search"
          />
        </div>
          </div>
       

        {/* Entry Numbers */}

        {/* Win Status */}
      </div>
    </>
  );
};

export default Filters;
