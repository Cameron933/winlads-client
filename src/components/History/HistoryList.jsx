import React from "react";
import { IoIosOptions } from "react-icons/io";
import { Link } from "react-router-dom";
import newsimage4 from "../../assets/images/news/4.png";
import { HiDotsHorizontal } from "react-icons/hi";
import { bgStyle } from "../../pages/Raffles/Raffles";
import SearchField from "../SearchField/SearchField";

const HistoryList = () => {
  return (
    <div>
      {/* <form className="form-inline relative">
                <input
                    className="form-control mr-sm-2 outline-none bg-gray-300"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                        border: "none",
                        marginBottom: "40px",
                        width: "100%",
                        height: "50px",
                        borderRadius: "10px",
                        padding: "10px",
                    }}
                />
                <button className="absolute top-3 right-5">
                    <IoIosOptions className="text-2xl" />
                </button>
            </form> */}
      <div className="flex flex-col space-y-8">
        <SearchField />
        <div className="md:pr-32" style={bgStyle}>
          <div className="flex flex-col space-y-2 2xl:space-y-6 special:space-y-8">
            <Link to="/#">
              <div className="flex flex-row gap-4 border-b-2 border-gray-200">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex flex-row gap-4 border-b-2 border-gray-200">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex flex-row gap-4 border-b-2 border-gray-200">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/#">
              <div className="flex flex-row gap-4 border-b-2 border-gray-200">
                <img
                  src={newsimage4}
                  alt=""
                  className="w-16 h-16 xl:w-16 xl:h-16 rounded-full 2xl:h-24 2xl:w-24 special:h-32 special:w-32"
                />
                <div className="flex w-full flex-col">
                  <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold special:text-4xl 2xl:text-2xl">
                    1991 land rover defender 110
                  </h3>
                  <p className="text-md xl:text-lg 2xl:text-xl special:text-2xl">
                    2023-SEP-19 Tuesday
                  </p>
                  <p className="text-left special:text-xl">
                    {" "}
                    <span className="text-blue-500 font-bold">R</span> 14 34 46
                    88
                  </p>
                  <p className="text-xl ml-auto">
                    <HiDotsHorizontal />
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
