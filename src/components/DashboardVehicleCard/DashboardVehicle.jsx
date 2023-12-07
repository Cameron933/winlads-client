import { useState } from "react";
import vehicle from "../../assets/images/Lottery/Jeep.png";
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import white from "../../assets/images/subscribers/white.png";
import { IoCloseSharp } from "react-icons/io5";
// [${fromColor}]

const DashboardVehicleCard = ({ name, date, icon, fromColor, type }) => {

  const [popup, setPopup] = useState(false)

  const handleClick = () => {
    setPopup(true)
  }

  return (
    <>
    <div
      className={`bg-gradient-to-r from-[${fromColor}] to-black rounded-3xl py-2 px-2 special:px-4 border-2 hover:border-black cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex justify-end">
        <img src={icon} alt="" className="w-12 special:w-36" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <img
          src={vehicle}
          alt="vehicle"
          className="w-36 special:w-96 2xl:w-64"
        />
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 text-white">
            <div className="text-white font-bold xl:text-sm text-xs special:text-4xl 2xl:text-2xl">
              {name}
            </div>
            <div className="text-[10px] text-white special:text-2xl 2xl:text-xl">
              {date}
            </div>
            <p className="text-black">{type}</p>
          </div>
        </div>
      </div>
    </div>
      {popup && (
        <PopUpLotto onClose={() => setPopup(false)} />
      )}
    </>
  );
};

function PopUpLotto({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state
  function handleBackdropClick(event) {
    if (event.target.classList.contains("backdrop")) {
      onClose();
    }
  }

  return (
    <div
      className="popup-container bg-white/50 justify-center items-center"
      onClick={handleBackdropClick}
    >
      <div className="popup-content text-white flex flex-col bg-gradient-to-br from-[#000000] space-y-4 special:space-y-12 2xl:space-y-8  to-[#000000] justify-center py-4 special:py-8 2xl:py-6">
        <div className="flex justify-end">
          <button
            className="text-3xl 2xl:text-4xl special:text-5xl hover:scale-105"
            onClick={onClose}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col special:px-24 2xl:px-8 px-4 space-y-4 special:space-y-12 2xl:space-y-8">
          <p className="font-bold text-white text-center xl:text-5xl 2xl:text-6xl special:text-9xl md:5xl text-3xl">
            $10
          </p>
          <p className="text-white text-center special:text-4xl">User/Month</p>
          <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
            <div className="flex flex-row gap-4 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                1991 Land Rover Defender 110
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                {" "}
                2023-SEP-19 TUESDAY
              </p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <img
                src={white}
                alt=""
                className="w-3 h-3 2xl:h-5 2xl:w-5 special:w-7 special:h-7"
              />
              <p className="text-white text-sm xl:text-sm md:text-sm 2xl:text-lg special:text-2xl">
                10% off WinladsMerch
              </p>
            </div>
          </div>
          <p className="text-white text-lg font-bold 2xl:text-xl special:text-4xl">
            Payment Methods
          </p>
          <div className="flex justify-center gap-4 special:gap-6 px-4 py-2 special:py-5 2xl:py-4 bg-white rounded-xl  cursor-pointer">
            <button className="hover:scale-110">
              <img
                src={bitcoin}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
            </button>
            <button className="hover:scale-110">
              <img
                src={Usd}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
            </button>
            <button className="hover:scale-110">
              <img
                src={Visa}
                alt=""
                className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardVehicleCard;
