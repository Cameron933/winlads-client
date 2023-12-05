import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import Blue from "../../assets/images/subscribers/blue.png";
import Visa from "../../assets/images/subcription/visa.png";
import BitCoin from "../../assets/images/subcription/bitcoin.png";
import Save from "../../assets/images/subcription/save.png";


const ChoosePlane = () => {
  return (
    <div
    className="subCard fixed w-full top-0 right-10 h-full flex justify-start items-center z-10"
    // onClick={handleBackdropClick}
  >
    <div className=" popup-content bg-black text-white items-center py-6 xl:px-12 rounded-xl flex flex-col xl:ml-68 ml-60 xl:mt-32 mt-60 md:ml-72 md:mt-60">
      <button
        className="absolute top-1 right-1 text-3xl text-inherit"
        // onClick={onClose}
      >
        <IoCloseSharp />
      </button>
      <div className="border-2 w-26 text-center border-black rounded-xl px-4 py-1 mb-2">
        <p>Standard</p>
      </div>
      <p className="font-bold text-center text-5xl mb-1 mt-1">$10</p>
      <p className="mb-2 text-center">User/Month</p>
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
  )
}

export default ChoosePlane