import React, { useState, useEffect } from "react";
import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const DashboardVehicleCard = ({
  bgColor,
  isSubscribed,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
  raffleimage,
  id,
  eligeble,
  oneOffPackage,
  checkTrial,
}) => {
  const [eligebleOne, setEligebleOne] = useState(true);
  const [onePackage, setOnePackage] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setOnePackage(oneOffPackage);
    setEligebleOne(eligeble);
  }, []);

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

  const handleNavigateWon = () => {
    navigate(`/won/${id}`);
  };

  return (
    <>
      <div
        className={`relative flex text-white flex-col justify-between pr-2 rounded-2xl  w-full pt-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 cursor-pointer overflow-hidden border-2 border-[#000]`}
        // style={{ backgroundColor: color }}

        style={{
          background: `linear-gradient(90deg, ${color} 0%, #000608 100%)`,
        }}
        onClick={handleNavigateWon}
      >
        {checkTrial ? (
          <div className="text-center bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-not-allowed z-20">
            <p className="text-xs md:text-lg font-semibold text-white capitalize">
              You remain ineligible until
              <br /> the end of the trial !
            </p>
          </div>
        ) : (
          eligebleOne &&
          !isSubscribed &&
          type != "max" && (
            <div className="text-center bg-gradient-to-t from-black to-transparent absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-not-allowed z-20">
              <p className="text-xs md:text-lg font-semibold text-white capitalize">
                You are not eligeble,
                <br /> please subscribe first !
              </p>
            </div>
          )
        )}

        <div className="flex flex-row items-center justify-between px-1">
          {/* <Link to={`/won/${id}`}>
            <LuInfo className="text-white" />
          </Link> */}
          <img
            src={icon}
            alt=""
            className="2xl:w-20 xl:w-16 w-16 special:w-28 "
          />
        </div>
        <div className="flex flex-row justify-between items-center">
          <img
            src={raffleimage}
            alt=""
            className="flex w-36 special:w-96 2xl:w-48 shadow-xl"
          />

          <div className="flex flex-col space-y-4 items-center">
            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
              <p className=" font-bold xl:text-[12px] text-xs special:text-4xl 2xl:text-[16px] text-center">
                {name}
              </p>
              <p className="text-[10px]  special:text-xl 2xl:text-[10px]">
                {formattedDate}
              </p>
            </div>
            {onePackage && (
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(); // Replace 'childPage' with the appropriate destination for the child div
                  }}
                  className="rounded-md border-2 capitalize hover:bg-black bg-white text-black cursor-pointer border-white  py-1 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto hover:text-white text-sm px-1"
                >
                  one off packages
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardVehicleCard;
