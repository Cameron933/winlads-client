import { useState, useEffect } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";

const VehicleCardForReg = ({
  bgColor,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
  raffleimage,
  id,
  select,
  setSelect,
  setSelectedPlanName,
  setSelPlanPrice
}) => {
  const handleClick = () => {
    onButton();
  };

  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    timeZone: "UTC", // Set the timeZone option to "UTC"
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  const handleClickOneOff = (count, name) => {
    console.log(name, "name");
    setSelect(count);
    setSelectedPlanName(name)
    setSelPlanPrice(count * 10)
  };

  return (
    <>
      <div
        className={`relative flex text-white flex-col justify-between pr-2 rounded-2xl  w-full pt-2 shadow-lg  cursor-pointer overflow-hidden border-2 border-[#000]`}
        // style={{ backgroundColor: color }}

        style={{
          background: `linear-gradient(90deg, ${color} 0%, #000608 100%)`,
        }}
      >
        <div className="flex flex-row justify-between">
          <img
            src={raffleimage}
            alt=""
            className="flex w-64 special:w-96 2xl:w-48 shadow-xl"
          />

          <div className="flex flex-col space-y-4">
            <div className="flex text-end flex-col z-10 pr-2 items-end space-y-2 2xl:space-y-4 special:space-y-4">
              <p className=" font-bold xl:text-2xl text-xs special:text-4xl 2xl:text-2xl text-center">
                {name}
              </p>
              <p className="text-[10px] md:text-xl special:text-xl 2xl:text-xl">
                {formattedDate}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div
                className={`col-span-1 bg-gradient-to-t hover:opacity-75 text-black to-[#FF4700] from-[#611C00] rounded-full py-2 px-2 text-[14px] text-center ${
                  select === "01" ? "border border-solid border-white" : ""
                }`}
                onClick={() =>
                  handleClickOneOff(
                    "01",
                    "01 Free Accumulating entries package"
                  )
                }
              >
                01 Free Accumulating entries package
              </div>
              <div
                className={`col-span-1 bg-gradient-to-t hover:opacity-75 text-black to-[#FF4700] from-[#611C00] rounded-full py-2 px-2 text-[14px] text-center ${
                  select === "03" ? "border border-solid border-white" : ""
                }`}
                onClick={() =>
                  handleClickOneOff(
                    "03",
                    "03 Free Accumulating entries package"
                  )
                }
              >
                03 Free Accumulating entries package
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div
                className={`col-span-1 bg-gradient-to-t hover:opacity-75 text-black to-[#00ECFF] from-[#006168] rounded-full py-2 px-2 text-[14px] text-center ${
                  select === "10" ? "border border-solid border-white" : ""
                }`}
                onClick={() =>
                  handleClickOneOff(
                    "10",
                    "10 Free Accumulating entries package"
                  )
                }
              >
                10 Free Accumulating entries package
              </div>
              <div
                className={`col-span-1 bg-gradient-to-t hover:opacity-75 text-black to-[#FFBE00] from-[#766000] rounded-full py-2 px-2 text-[14px] text-center ${
                  select === "25" ? "border border-solid border-white" : ""
                }`}
                onClick={() =>
                  handleClickOneOff(
                    "25",
                    "25 Free Accumulating entries package"
                  )
                }
              >
                25 Free Accumulating entries package
              </div>
            </div>
            <div className="grid grid-cols-2 pb-2">
              <div
                className={`col-span-2 w-full bg-gradient-to-t hover:opacity-75 text-white to-[#22272C] from-[#23282E] rounded-full py-2 px-2 text-[14px] text-center ${
                  select === "150" ? "border border-solid border-white" : ""
                }`}
                onClick={() =>
                  handleClickOneOff(
                    "150",
                    " 150 Free Accumulating entries package"
                  )
                }
              >
                150 Free Accumulating entries package
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleCardForReg;
