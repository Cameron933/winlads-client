import React, { useState } from "react";
import Blue from "../../assets/images/subscribers/blue.png";
import Green from "../../assets/images/subscribers/green.png";
import Yellow from "../../assets/images/subscribers/yellow.png";
import Red from "../../assets/images/subscribers/red.png";
import wallet from "../../assets/images/rafflesImages/wallet.png";
import savelotto from "../../assets/images/rafflesImages/savelotto.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import { ImCancelCircle } from "react-icons/im";

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

  return (
    <div className="container mx-auto p-1">
      <p className="font-bold text-3xl mb-5">Choose Your Plan</p>

      <div className="flex flex-row justify-between bg-black items-center rounded-full px-2 py-2 mb-5">
        <div className="bg-white text-xs text-semibold xl:text-sm md:text-sm text-center px-24 rounded-full  flex-1">
          <button type="button" className="">
            Monthly
          </button>
        </div>
        <div className="bg-black text-xs xl:text-sm md:text-sm  text-semibold text-white text-center px-24 rounded-full flex-1">
          <button type="button" className="">
            Yearly (Save2.5%)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="bg-gradient-to-br justify-center items-center from-[#37DBFF] to-[#00819D] py-2 px-4 rounded-3xl flex flex-col">
          <div className="flex justify-center mb-2">
            <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Standard</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$10</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                2 Day database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Blue} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>

          <button
            type="button"
            className="border border-black bg-gray-800 text-[#37DBFF] py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-[#37DBFF] hover:text-black"
            onClick={() => setShowUpSubscibe(true)}
          >
            Choose Plan
          </button>
          {showUpSubscibe && (
            <PopUpSubscribeBlue onClose={() => setShowUpSubscibe(false)} />
          )}
        </div>

        <div className="bg-gradient-to-br from-[#FF9F9F] to-[#D04D4D] justify-center items-center py-2 px-4 rounded-3xl flex flex-col">
          <div className="flex justify-center mb-2">
            <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Bronz</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$30</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Red} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                1 Week database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Red} alt="" className="w-3 h-3" />
              <p className="text-black text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Red} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-black bg-gray-800 text-[#FF9F9F] py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-[#FF9F9F] hover:text-black"
            onClick={() => setShowUpSubscibeBronze(true)}
          >
            Choose Plan
          </button>
          {showUpSubscibeBronze && (
            <PopUpSubscribeRed onClose={() => setShowUpSubscibeBronze(false)} />
          )}
        </div>
        <div className="bg-gradient-to-br from-[#47FF37] to-[#169D00] justify-center items-center py-2 px-4 rounded-3xl flex flex-col">
          <div className="flex justify-center mb-2">
            <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Silver</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$100</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Green} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                1 Month database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Green} alt="" className="w-3 h-3" />
              <p className="text-black text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Green} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-black bg-gray-800 text-[#47FF37] py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-[#47FF37] hover:text-black"
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
        <div className="bg-gradient-to-br from-[#FFDF37] to-[#9D7C00] justify-center items-center py-2 px-4 rounded-3xl flex flex-col">
          <div className="flex justify-center mb-2">
            <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1">
              <p className="text-black">Gold</p>
            </div>
          </div>
          <p className="font-bold text-black text-center text-4xl mb-2">$250</p>
          <p className="text-black mb-2 text-center text-xs">User/Month</p>
          <div className="flex justify-center flex-col space-y-2">
            <div className="flex flex-row gap-2 items-center">
              <img src={Yellow} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">
                6 Month database discount Access
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Yellow} alt="" className="w-3 h-3" />
              <p className="text-black text-sm"> winlads + Events Invites</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <img src={Yellow} alt="" className="w-3 h-3" />
              <p className="text-black text-sm">10% off Winland + Merch</p>
            </div>
          </div>
          <button
            type="button"
            className="border border-black bg-gray-800 text-[#FFDF37] py-2 px-8 rounded-lg text-sm mt-4 mb-2 hover:bg-[#FFDF37] hover:text-black"
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
      className="subCard fixed top-0 left-0 w-full h-full flex justify-start items-center bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className=" popup-content bg-gradient-to-br  from-[#37DBFF] to-[#00819D] items-center py-6 xl:px-12 rounded-3xl flex flex-col xl:ml-68 ml-60 xl:mt-32 mt-60 md:ml-72 md:mt-60">
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Standard</p>
        </div>
        <p className="font-bold text-black text-center text-5xl mb-1 mt-1">
          $10
        </p>
        <p className="text-black mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs 	">
              2 Day database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs ">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className="text-black xl:text-lg text-base  font-semibold mt-3">
          Payment Methods
        </p>

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 hover:bg-[#37DBFF]">
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
      className="subCard2 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50  backdrop-blur-sm"
      onClick={handleBackdropClick2}
    >
      <div className=" popup-content bg-gradient-to-br  from-[#FF9F9F] to-[#D04D4D]   items-center py-6  xl:px-12 rounded-3xl flex flex-col xl:ml-68  ml-60 xl:mt-32 mt-60 md:ml-72 md:mt-60">
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Bronz</p>
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

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 hover:bg-[#FF9F9F]">
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
      className="subCard3 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50  backdrop-blur-sm"
      onClick={handleBackdropClick3}
    >
      <div className=" popup-content bg-gradient-to-br  from-[#47FF37] to-[#169D00]   items-center py-6  xl:px-12 rounded-3xl flex flex-col xl:ml-68  xl:mt-32 ml-52 md:ml-72 md:mt-60 mt-60">
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Standard</p>
        </div>
        <p className="font-bold text-black text-center text-5xl mb-1 mt-1">
          $100
        </p>
        <p className="text-black mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Green} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base  text-xs	">
              1 Month database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Green} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Green} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base  md:text-base text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className="text-black text-lg 	font-semibold mt-3">Payment Methods</p>

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 hover:bg-[#47FF37]">
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
      className="subCard4 fixed top-0 left-0 w-full h-full flex justify-start items-center  bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackdropClick3}
    >
      <div className=" popup-content bg-gradient-to-br  from-[#FFDF37] to-[#9D7C00] items-center py-6 xl:px-12 rounded-3xl flex flex-col xl:ml-68  xl:mt-32 ml-52 md:ml-72 md:mt-60 mt-60 ">
        <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
          <p className="text-black">Gold</p>
        </div>
        <p className="font-bold text-black text-center text-5xl mb-1 mt-1">
          $250
        </p>
        <p className="text-black mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base text-xs">
              6 Month database discount Access
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base text-xs">
              winlads + Events Invites
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Yellow} alt="" className="w-3 h-3" />
            <p className="text-black xl:text-base md:text-base  text-xs	">
              10% off Winland + Merch
            </p>
          </div>
        </div>

        <p className="text-black text-lg 	font-semibold mt-3">Payment Methods</p>

        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12  hover:bg-[#FFDF37]">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default SubscribeCard;
