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
  id
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

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);

  return (
    <>
      <div
        className={`relative flex text-white flex-col justify-between pr-2 rounded-2xl  w-full pt-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:opacity-75 cursor-pointer overflow-hidden border-2 border-[#000]`}
        // style={{ backgroundColor: color }}

        style={{
          background: `linear-gradient(90deg, ${color} 0%, #000608 100%)`,
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <img
            src={raffleimage}
            alt=""
            className="flex w-36 special:w-96 2xl:w-48 shadow-xl"
          />

          <div className="flex flex-col space-y-4 items-center">
            <div className="flex text-end flex-col z-10 pr-2 items-center space-y-2 2xl:space-y-4 special:space-y-4">
              <p className=" font-bold xl:text-2xl text-xs special:text-4xl 2xl:text-2xl text-center">
                {name}
              </p>
              <p className="text-[10px] md:text-xl special:text-xl 2xl:text-xl">
                {formattedDate}
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleCardForReg;
