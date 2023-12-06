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
import Visa from "../../assets/images/subcription/visa.png";
import BitCoin from "../../assets/images/subcription/bitcoin.png";
import Save from "../../assets/images/subcription/save.png";

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

function SubscribeCard({
  name,
  price,
  desc1,
  desc2,
  desc3,
  bgColor,
  gradientFrom,
  gradientTo,
  textColor,
  borderColor,
  buttonColor,
  buttonText,
  buttonHoverText,
  buttonHover,
  hoverButtonBorder,
  raffleCount,
  onButtonClick
  
}) {

  const handleChooseButton = () => {
    onButtonClick();
  };

  return (
    <div
      className={`bg-${bgColor} ${gradientFrom} ${gradientTo} justify-center items-center text-${textColor} py-2 px-4 special:py-8 2xl:py-6 rounded-3xl flex flex-col space-y-4 special:space-y-8 2xl:space-y-6`}
    >
      <div className="flex justify-center">
        <div
          className={`border-1 border w-26 text-center border-${borderColor} rounded-xl px-4 py-1 special:py-4 2xl:py-2 special:px-8 2xl:px-6`}
        >
          <p className="special:text-4xl 2xl:text-2xl">{name}</p>
        </div>
      </div>
      <p className="font-bold  text-center text-4xl special:text-8xl 2xl:text-6xl">
        {price}
      </p>
      <p className=" mb-2 text-center text-xs special:text-xl 2xl:text-lg">
        User/Month
      </p>
      <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
        <div className="flex flex-row gap-2 special:gap-4 2xl:gap-4 items-center">
          <img
            src={Blue}
            alt=""
            className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className="text-sm special:text-xl 2xl:text-lg">{desc1}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img
            src={Blue}
            alt=""
            className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className=" text-sm special:text-xl 2xl:text-lg">{desc2}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img
            src={Blue}
            alt=""
            className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className=" text-sm special:text-xl 2xl:text-lg">{desc3}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img
            src={Blue}
            alt=""
            className="w-3 h-3 special:h-7 special:w-7 2xl:h-5 2xl:w-5"
          />
          <p className=" text-sm special:text-xl 2xl:text-lg">
            Free Giveaways - {raffleCount}
          </p>
        </div>
      </div>

      <button
        type="button"
        className={`text-${buttonText} bg-${buttonColor} hover:border-2 hover:border-${hoverButtonBorder} text-black py-2 px-8 special:py-4 special:px-12 2xl:px-10 rounded-lg text-sm special:text-2xl 2xl:text-xl mt-4 mb-2 hover:bg-${buttonHover} hover:text-${buttonHoverText}`}
        onClick={handleChooseButton}
      >
        Choose Plan
      </button>
      {/* {showUpSubscibe && (
        <PopUpSubscribeBlue onClose={() => setShowUpSubscibe(false)} />
      )} */}
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
      className="subCard fixed w-full top-0 right-10 h-full flex justify-start items-center z-10"
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

        <div className="flex justify-center gap-5 border border-1 border-white p-4 rounded-xl mt-3 px-12 bg-[#FFFFFF]">
          <button className="hover:scale-105">
            {" "}
            <img src={BitCoin} alt="" className="w-7 h-7 " />
          </button>
          <div className="hover:scale-105">
            <img src={Save} alt="" className="w-7 h-7" />
          </div>
          <div className="hover:scale-105">
            <img src={Visa} alt="" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
