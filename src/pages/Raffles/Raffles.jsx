import { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import MainCar from "../../assets/images/MainCar.png";
import grouptest from "../../assets/images/welcome/Groupraffletest.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import TopNav from "../../components/TopNav/TopNav";
import RaffleComponent from "../../components/RaffleComponent/RaffleComponent";
import EarningCard from "../../components/EarningCard/EarningCard";
import Frame from "../../assets/images/Frame.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GoQuestion } from "react-icons/go";
import { ImCancelCircle } from "react-icons/im";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import six from "../../assets/images/rafflesImages/six4.png";
import max from "../../assets/images/rafflesImages/max.png";
import lotto from "../../assets/images/rafflesImages/lotto.png";
import Loto from "../../assets/images/rafflesImages/loto.png";
import { Link } from "react-router-dom";
import wallet from "../../assets/images/rafflesImages/wallet.png";
import savelotto from "../../assets/images/rafflesImages/savelotto.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import Red from "../../assets/images/subscribers/red.png";
import RedDot from "../../assets/images/RedDot.png";
import Blue from "../../assets/images/subscribers/blue.png";
import { useParams } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";
import RaffleViewer from "../../components/RaffleComponent/RaffleViewer";

function Raffles() {
  const [value, onChange] = useState(new Date());
  const [showPopup, setShowPopup] = useState(false);
  const [showLessPopup, setShowLessPopup] = useState(false);
  const [raffleRounds, setRaffleRounds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    getRafflesRounds();
  }, []);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const getRafflesRounds = async () => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/raffleRounds?raffleid=${params.id}`
      )
      .then((response) => {
        console.log(response.data.data);
        setRaffleRounds(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative mx-auto justify-between">
          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex-1 mx-5 w-full  max-w-[2048px] 3xl:mx-auto">
            <div className="flex flex-col lg:flex-row-reverse   gap-5">
              {/* right side */}
              <div className="flex flex-col flex-1 ">
                <div className="visible lg:hidden space-y-4">
                  <div className="bg-black rounded-b-3xl py-4">
                    <TopNav textColor={"white"} />
                    <div className="pt-10">
                      <motion.img
                        initial={carAnimation.initialMobile}
                        animate={carAnimation.animate}
                        transition={carAnimation.transition}
                        className="w-4/5"
                        src={MainCar}
                        alt="main"
                      />
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col space-y-4">
                  <div className="bg-black rounded-b-3xl space-y-4 pt-6">
                    <TopNav textColor={'white'} />
                    <div className="flex flex-row items-center bottom-0  relative h-[500px]">

                      <img
                        src={HiddenCar}
                        alt="hidden-car"
                        className="w-84 h-48"
                      />

                      <motion.img
                        initial={carAnimation.initial}
                        animate={carAnimation.animate}
                        transition={carAnimation.transition}
                        src={MainCar}
                        alt="main"
                        className="absolute right-5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* left-side */}
              <div className="flex flex-col flex-1 gap-5 relative mb-5">
                <div className=" flex flex-row items-center bg-[#333333] gap-4 rounded-full px-4 mt-5">
                  <img src={Spicker} alt="" className="w-8 h-8" />
                  <span className="text-sm text-white">
                    Your golden card is about to expire in 30 days. Renew now!
                  </span>
                </div>
                <div className="side-bg" style={{ height: "500px" }}></div>

                {/* Search Bar */}
                <div className="rounded-xl flex flex-row justify-between px-4 py-2  items-center bg-gray-300 lg:mt-1">
                  <input
                    className="bg-inherit placeholder:text-gray-800 w-full py-3 border-none outline-none shadow-none "
                    type="text"
                    placeholder="Search"
                  />
                  <img src={Frame} alt="" width={30} />
                </div>

                {/* Calender */}
                <div className="flex flex-col gap-4  lg:flex-row lg:items-end lg:mt-1">
                  <Calendar
                    value={value}
                    onChange={onChange}
                    className="flex-1"
                  />

                  <div className="flex-1">
                    <Link to="/live-raffle">
                      <div
                        className="flex flex-col rounded-3xl px-2 py-1 space-y-2 flex-1 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                        style={{
                          background:
                            "linear-gradient(98.92deg, #E9BA0D 45%, #000000 83%)",
                        }}
                      >
                        <img src={Jeep} alt="" className="absolute flex w-48" />
                        <div className="justify-end flex">
                          <div className="flex-col flex">
                            <img src={six} alt="" className="w-16" />

                            <div className="flex-row flex justify-end gap-1">
                              <p className="text-white text-xs uppercase">live</p>
                              <img
                                src={RedDot}
                                alt=""
                                className="w-1.5 h-1 flex flex-col justify-start items-start"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex text-end flex-col z-10">
                          <p className="text-white font-bold xl:text-sm text-xs">
                            1991 Land Rover
                            <br /> Defender 110
                          </p>
                          <p className="text-xs text-white">
                            2023-SEP-19 TUESDAY
                          </p>
                        </div>
                        <div className="grid grid-cols-3 px-5 items-center">
                          <div className="col-span-2 flex justify-end gap-2 z-10">
                            <p className="text-[#4FC8E8] font-bold">R</p>
                            <p className="text-white font-bold">14</p>
                            <p className="text-white font-bold">34</p>
                            <p className="text-white font-bold">38</p>
                            <p className="text-white font-bold">76</p>
                          </div>
                          <div className="col-span-1 justify-end flex">
                            <GoQuestion />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {showPopup && <PopUpLotto onClose={() => setShowPopup(false)} />}

              {showLessPopup && (
                <PopUpLess onClose={() => setShowLessPopup(false)} />
              )}
            </div>

            {/* SMALL JEEPS CONTAINER */}
            
             {/* Raffle View Tabpane */}
             {
              raffleRounds && <RaffleViewer raffleRounds={raffleRounds} setShowPopup={setShowPopup}/>
             }
            
            
          </div>
        </div>
      )}
    </>
  );
}

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
      className="popup-container backdrop backdrop-blur-sm lg:justify-end justify-center"
      onClick={handleBackdropClick}
    >
      <div className=" popup-content bg-gradient-to-br  from-[#D65252] space-y-4  to-[#404040]  justify-center items-center py-2  xl:px-20 md:px-20 px-10 paymentCardBorder flex flex-col lg:mr-[10%]">
        <img src={Loto} alt="" className="xl:w-16 md:w-14 w-12 h-auto" />
        <p className="font-bold text-white text-center xl:text-7xl md:5xl text-3xl mb-1">
          $10
        </p>
        <p className="text-white mb-2 text-center  ">User/Month</p>
        <div className="flex justify-center flex-col space-y-2">
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-white text-xs xl:text-sm md:text-sm">
              1991 Land Rover Defender 110
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-white xl:text-sm md:text-sm">
              {" "}
              2023-SEP-19 TUESDAY
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <img src={Blue} alt="" className="w-3 h-3" />
            <p className="text-white xl:text-sm md:text-sm">
              10% off WinladsMerch
            </p>
          </div>
        </div>

        <p className="text-white text-lg 	font-bold mt-3">Payment Methods</p>
        <div className="flex justify-center gap-5 bg-black p-4 rounded-xl mt-3 px-12 cursor-pointer hover:scale-105">
          <img src={wallet} alt="" className="w-7 h-7" />
          <img src={savelotto} alt="" className="w-7 h-7" />
          <img src={bitcoin} alt="" className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

function PopUpLess({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state
  function handleBackdropClick2(event) {
    if (event.target.classList.contains("backdrop2")) {
      onClose();
    }
  }

  return (
    <div
      className="popup-container backdrop2 backdrop-blur-sm lg:justify-end justify-center"
      onClick={handleBackdropClick2}
    >
      <div className=" popup-content bg-gradient-to-br from-[#D65252] to-[#404040] justify-center items-center py-2 paymentCardBorder flex flex-col md:px-20 xl:px-20 px-10 lg:mr-[10%]">
        <img src={Loto} alt="" className="w-16 h-auto mb-2" />
        <p className="font-bold text-white text-center xl:text-7xl md:text-5xl text-3xl mb-1">
          $10
        </p>
        <p className="text-white mb-2 text-center ">User/Month</p>
        <div className="flex justify-center flex-col space-y-4">
          <p className="text-white text-xs md:text-sm xl:text-sm text-start w-48">
            You have purchased x number of raffles from the amount of
            subscriptions in your account and there are x amount remaining.
          </p>
          <p className="text-white text-xs md:text-sm xl:text-sm text-start w-48">
            Do you want to buy this ?
          </p>
        </div>

        <button
          type="button"
          className="border border-black bg-black text-[#D65252] py-2 px-8 rounded-lg mt-4 mb-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Raffles;
