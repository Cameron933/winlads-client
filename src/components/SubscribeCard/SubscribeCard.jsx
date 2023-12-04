import React, { useState } from "react";
import Blue from "../../assets/images/subscribers/blue.png";
import Green from "../../assets/images/subscribers/green.png";
import Yellow from "../../assets/images/subscribers/yellow.png";
import Red from "../../assets/images/subscribers/red.png";
import wallet from "../../assets/images/rafflesImages/wallet.png";
import savelotto from "../../assets/images/rafflesImages/savelotto.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import { ImCancelCircle } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";

const PaymentModal = ({ handleClose, show }) => {
  return (
    <div className={show ? "block" : "hidden"}>
      <section className="modal-main">
        {/* Your payment method form or content goes here */}
        text
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

function SubscribeCard() {
  const [showUpSubscibe, setShowUpSubscibe] = useState(false);
  const [showUpSubscibeBronze, setShowUpSubscibeBronze] = useState(false);
  const [showUpSubscibeSilver, setShowUpSubscibeSilver] = useState(false);
  const [showUpSubscibeGold, setShowUpSubscibeGold] = useState(false);

  // Monthly package or Yearly Package
  const [isYearly, setYearly] = useState(false);

  const handleYear = (val = false) => {
    setYearly(val);
  };

  return (
    <div className="container mx-auto flex flex-col space-y-4 2x:space-y-8 special:space-y-12">
      <p className="font-bold text-3xl special:text-6xl 2xl:text-4xl">
        Choose Your Plan
      </p>

      <div className="flex flex-row justify-between bg-black items-center rounded-full px-1 py-1 special:py-3 2xl:py-2">
        <button
          type="button"
          onClick={() => handleYear(false)}
          className={`${
            isYearly ? "bg-black text-white" : "bg-white text-black"
          } text-xs text-semibold xl:text-sm md:text-sm text-center special:text-2xl 2xl:text-xl rounded-full py-4 flex-1`}
        >
          Monthly
        </button>

        <button
          type="button"
          onClick={() => handleYear(true)}
          className={`${
            isYearly ? "bg-white text-black" : "bg-black text-white"
          } text-xs text-semibold xl:text-sm md:text-sm text-center special:text-2xl 2xl:text-xl rounded-full py-4 flex-1`}
        >
          Yearly (Save2.5%)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 special:gap-6 2xl:gap-4">
        <div className="bg-black justify-center items-center text-white py-2 px-4 special:py-8 2xl:py-6 rounded-3xl flex flex-col space-y-4 special:space-y-8 2xl:space-y-6">
          <div className="flex justify-center">
            <div className="border-1 border w-26 text-center border-white rounded-xl px-4 py-1 special:py-4 2xl:py-2 special:px-8 2xl:px-6">
              <p className="special:text-4xl 2xl:text-2xl">Standard</p>
            </div>
          </div>
          <p className="font-bold  text-center text-4xl special:text-8xl 2xl:text-6xl">$10</p>
          <p className=" mb-2 text-center text-xs special:text-xl 2xl:text-lg">User/Month</p>
          <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
            <div className="flex flex-row gap-2 special:gap-4 2xl:gap-4 items-center">
              <img src={Blue} alt="" className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5" />
              <p className=" text-sm special:text-xl 2xl:text-lg">2 Day database discount Access</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5" />
              <p className=" text-sm special:text-xl 2xl:text-lg">winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5" />
              <p className=" text-sm special:text-xl 2xl:text-lg">10% off Winland + Merch</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5" />
              <p className=" text-sm special:text-xl 2xl:text-lg">10% off Winland + Merch</p>
            </div>
          </div>

          <button
            type="button"
            className="border border-1 border-white bg-white text-black py-2 px-8 special:py-4 special:px-12 2xl:px-10 rounded-lg text-sm special:text-2xl 2xl:text-xl mt-4 mb-2 hover:bg-black hover:text-white"
            onClick={() => setShowUpSubscibe(true)}
          >
            Choose Plan
          </button>
          {showUpSubscibe && (
            <PopUpSubscribeBlue onClose={() => setShowUpSubscibe(false)} />
          )}
        </div>

        <div className="bg-gradient-to-br from-gray-200 to-white border border-1 border-gray-500 justify-center items-center py-2 px-4 rounded-3xl flex flex-col ">
          <div className="flex justify-center mb-2">
            <div className="border border-1 w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Bronze</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$30</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                1 Week database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-black bg-black text-white py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-white hover:text-black"
            onClick={() => setShowUpSubscibeBronze(true)}
          >
            Choose Plan
          </button>
          {showUpSubscibeBronze && (
            <PopUpSubscribeRed onClose={() => setShowUpSubscibeBronze(false)} />
          )}
        </div>
        <div className="bg-gradient-to-br from-[#FFDF37] to-[#9D7C00] justify-center items-center py-2 px-4 rounded-3xl flex flex-col">
          <div className="flex justify-center mb-2">
            <div className="border-1 border w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Silver</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$100</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                1 Month database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-black bg-black text-white py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-white hover:text-black"
            onClick={() => setShowUpSubscibeSilver(true)}
          >
            Choose Plan
          </button>
          {showUpSubscibeSilver && (
            <PopUpSubscribeGreen
              onClose={() => setShowUpSubscibeSilver(false)}
            />
          )}
        </div>
        <div className="bg-gradient-to-br bg-black justify-center items-center py-2 px-4 rounded-3xl flex flex-col text-white">
          <div className="flex justify-center mb-2">
            <div className="border-1 border w-26 text-center border-white rounded-xl px-4 py-1">
              <p className="">Gold</p>
            </div>
          </div>
          <p className="font-bold text-center text-4xl mb-2">$250</p>
          <p className=" mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className=" text-sm">6 Month database discount Access</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className=" text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-1 border-white bg-white text-black py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-black hover:text-white"
            onClick={() => setShowUpSubscibeGold(true)}
          >
            Choose Plan
          </button>
        </div>
        {showUpSubscibeGold && (
          <PopUpSubscribeYellow onClose={() => setShowUpSubscibeGold(false)} />
        )}
      </div>
    </div>
  );
}

function PopUpSubscribeBlue({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the
  function handleBackdropClick(event) {
    if (event.target.classList.contains("subCard")) {
      onClose();
    }
  }

  return (
    <div
      className="subCard fixed top-0 left-0 w-full h-full flex justify-start items-center bg-opacity-50 backdrop-blur-sm z-10"
      onClick={handleBackdropClick}
    >
      <div className=" popup-content bg-black text-white items-center py-6 xl:px-12 rounded-xl flex flex-col xl:ml-68 ml-60 xl:mt-32 mt-60 md:ml-72 md:mt-60">
        <button
          className="absolute top-1 right-1 text-3xl text-inherit"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p>Standard</p>
        </div>
        <p className="font-bold text-center text-5xl mb-1 mt-1">$10</p>
        <p className="mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className=" xl:text-base  md:text-base text-xs 	">
              2 Day database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="xl:text-base  md:text-base text-xs ">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className=" xl:text-base md:text-base text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className=" xl:text-lg text-base  font-semibold mt-3">
          Payment Methods
        </p>

        <div className="flex justify-center gap-5 border border-1 border-white p-4 rounded-xl mt-3 px-12 hover:bg-gray-500">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

function PopUpSubscribeRed({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state
  function handleBackdropClick2(event) {
    if (event.target.classList.contains("subCard2")) {
      onClose();
    }
  }
  return (
    <div
      className="subCard2 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50  backdrop-blur-sm z-10"
      onClick={handleBackdropClick2}
    >
      <div className=" popup-content bg-gradient-to-br  from-gray-400 to-white   items-center py-6  xl:px-12 rounded-xl flex flex-col xl:ml-68  ml-60 xl:mt-32 mt-60 md:ml-72 md:mt-60 relative">
        <button
          className="absolute top-1 right-1 text-3xl text-inherit"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Bronze</p>
        </div>
        <p className="font-bold text-black text-center text-5xl mb-1 mt-1">
          $30
        </p>
        <p className="text-black mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Red} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base text-xs ">
              1 Week database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Red} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base text-xs ">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Red} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base	 text-xs">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className="text-black xl:text-lg text-base	font-semibold mt-3">
          Payment Methods
        </p>

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 hover:bg-gray-500">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

function PopUpSubscribeGreen({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state
  function handleBackdropClick3(event) {
    if (event.target.classList.contains("subCard3")) {
      onClose();
    }
  }

  return (
    <div
      className="subCard3 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50  backdrop-blur-sm z-10"
      onClick={handleBackdropClick3}
    >
      <div className=" popup-content bg-gradient-to-br from-[#FFDF37] to-[#9D7C00]  items-center py-6  xl:px-12 rounded-xl flex flex-col xl:ml-68  xl:mt-32 ml-52 md:ml-72 md:mt-60 mt-60">
        <button
          className="absolute top-1 right-1 text-3xl text-inherit"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Silver</p>
        </div>
        <p className="font-bold text-black text-center text-5xl mb-1 mt-1">
          $100
        </p>
        <p className="text-black mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base  text-xs	">
              1 Month database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className="text-black text-lg 	font-semibold mt-3">Payment Methods</p>

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 hover:bg-gray-500">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

function PopUpSubscribeYellow({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state
  function handleBackdropClick3(event) {
    if (event.target.classList.contains("subCard4")) {
      onClose();
    }
  }

  return (
    <div
      className="subCard4 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50 backdrop-blur-sm z-10"
      onClick={handleBackdropClick3}
    >
      <div className=" popup-content bg-black text-white items-center py-6 xl:px-12 rounded-xl flex flex-col xl:ml-68  xl:mt-32 ml-52 md:ml-72 md:mt-60 mt-60 ">
        <button
          className="absolute top-1 right-1 text-3xl text-inherit"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p>Gold</p>
        </div>
        <p className="font-bold text-center text-5xl mb-1 mt-1">$250</p>
        <p className=" mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className=" xl:text-base md:text-base text-xs">
              6 Month database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className=" xl:text-base md:text-base text-xs">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className=" xl:text-base md:text-base  text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className=" text-lg 	font-semibold mt-3">Payment Methods</p>

        <div className="flex justify-center gap-5 bg-black border border-1 border-white p-4 rounded-xl mt-3 px-12  hover:bg-gray-500">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
