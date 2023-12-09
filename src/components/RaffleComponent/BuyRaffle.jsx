import React from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import axios from "axios";

const BuyRaffle = ({onClose, quotation, count, giveawayId, subId, userId}) => {

  const handleClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyRaffleRound`,
        {
          uid: userId,
          subid: subId,
          roundid: giveawayId,
          
        }
      );
      console.log("Response:", response.data);
      console.log("user id:", userId);
      console.log("giv id:", giveawayId);
      console.log("sub id:", subId);

      // const payURL = response.data.payurl;

      // // Redirect the user to the payURL
      // window.location.href = payURL;
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div
          className="popup-container bg-white/50 justify-center items-center"
        //   onClick={handleBackdropClick2}
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
              <div className="text-center text-white flex justify-center w-64 special:w-[600px] 2xl:w-[500px] text-sm special:text-3xl 2xl:text-2xl special:leading-normal">
                You have purchased<span className='font-bold text-xl'>{count}</span>number of raffles from the amount of
                subscriptions in your account and there are<span className='font-bold text-xl'>{parseFloat(quotation-count)}</span>amount remaining.
              </div>
              <p className="text-white text-sm special:text-3xl 2xl:text-2xl">
                Do you want to buy this?
              </p>
              <div className="flex justify-center items-center bg-white rounded-lg text-black py-2 special:py-6 2xl:py-5 font-bold hover:bg-black hover:text-white border border-solid hover:border-white">
                <button className="capitalize 2xl:text-4xl special:text-5xl" onClick={handleClick}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default BuyRaffle