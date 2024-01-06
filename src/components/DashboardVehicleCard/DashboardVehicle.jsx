import CatJeep from "../../assets/images/rafflesImages/newJeep.png";
import NewVeh from "../../assets/images/newVeh.png";
import { LuInfo } from "react-icons/lu";
import { Link } from "react-router-dom";

const DashboardVehicleCard = ({
  bgColor,
  name,
  date,
  icon,
  fromColor,
  type,
  onButton,
  color,
  raffleimage
}) => {
  const handleClick = () => {
    onButton();
  };

  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = dateObject.toLocaleString("en-US", options);

  return (
    <>
      <div
        className={`flex text-white flex-col justify-between pr-2 rounded-2xl  w-full pt-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 cursor-pointer overflow-hidden border-2 border-[#000]`}
        // style={{ backgroundColor: color }}

        style={{
          background: `linear-gradient(90deg, ${color} 0%, #000608 100%)`,
        }}
      >
        <div className="flex flex-row items-center justify-between px-1">
          <Link to="/won">
            <LuInfo className="text-white" />
          </Link>
          <img
            src={icon}
            alt=""
            className="2xl:w-12 xl:w-8 w-8 special:w-16  "
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
            <div>
              <button
                onClick={handleClick}
                className="rounded-md border-2 hover:bg-black bg-white text-black cursor-pointer border-white  py-1 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto hover:text-white text-sm px-1"
              >
                Try Single Entries
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardVehicleCard;
