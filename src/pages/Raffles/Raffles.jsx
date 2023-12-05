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
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import Red from "../../assets/images/subscribers/red.png";
import RedDot from "../../assets/images/RedDot.png";
import white from "../../assets/images/subscribers/white.png";
import { useParams } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";
import RaffleViewer from "../../components/RaffleComponent/RaffleViewer";
import { IoCloseSharp } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import bgCar from "../../assets/images/hiddenCar.png";
import SearchField from "../../components/SearchField/SearchField";
import { LuHistory } from "react-icons/lu";

import BG from "../../assets/images/HomesideBg.png";

export const bgStyle = {
  backgroundImage: `url(${bgCar})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

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
        <div className="flex flex-row justify-between mx-auto">
          <SideNav screen="full" />
          <div className="flex-1">
            {/* home-content */}
            <div className="flex flex-col xl:px-6 px-4 special:px-12 xl:space-y-16 special:space-y-24 space-y-8">
              {/* <div className="side-bg" style={{ height: "500px" }}></div> */}

              <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:items-center xl:gap-8 space-y-4 xl:space-y-0">
                <img
                  src={BG}
                  alt=""
                  className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60"
                />

                {/* left-side */}
                <div className="flex flex-col flex-1">
                  <div className="visible xl:hidden space-y-4">
                    <div className="bg-black rounded-b-3xl py-4">
                      <TopNav textColor={"white"} />
                      <div className="pt-10">
                        <img className="" src={MainCar} alt="main" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 xl:pt-0 pb-4 xl:pb-0">
                    <SearchField />
                  </div>

                  <div
                    className="flex flex-col gap-4 md:flex-row lg:flex-row lg:mt-10 xl:items-center"
                    style={bgStyle}
                  >
                    <Link
                      to=" /history"
                      className="text-3xl flex justify-end xl:hidden md:hidden"
                    >
                      <LuHistory className="hover:animate-spin z-10" />
                    </Link>
                    <Calendar
                      value={value}
                      onChange={onChange}
                      className="flex-1 bg-transparent"
                    />
                    <div className="flex flex-col flex-1 xl:space-y-24 md:space-y-24 space-y-0">
                      <Link
                        to=" /history"
                        className="text-3xl xl:flex md:flex justify-end hidden"
                      >
                        <LuHistory className="hover:animate-spin special:w-16 special:h-16 2xl:w-12 2xl:h-12 z-10" />
                      </Link>

                      <Link to="/live-raffle">
                        <div
                          className="flex-col rounded-3xl px-2 special:px-4 py-1 space-y-2 flex-1 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                          style={{
                            background:
                              "linear-gradient(98.92deg, #E9BA0D 45%, #000000 83%)",
                          }}
                        >
                          <div className="flex flex-row justify-between items-center">
                            <img
                              src={Jeep}
                              alt=""
                              className="flex w-36 special:w-96 2xl:w-36"
                            />
                            <div>
                              <div className="justify-end flex">
                                <div className="flex-col flex">
                                  <img
                                    src={six}
                                    alt=""
                                    className="w-12 special:w-36 2xl:w-16"
                                  />
                                </div>
                              </div>
                              <div className="flex-row flex justify-end gap-1">
                                <p className="text-white text-[10px] uppercase 2xl:text-sm special:text-lg">
                                  live
                                </p>
                                <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
                                </span>
                              </div>

                              <div className="flex text-end flex-col z-10">
                                <p className="text-white font-bold xl:text-xs text-xs special:text-2xl 2xl:text-sm">
                                  1991 Land Rover
                                  <br /> Defender 110
                                </p>
                                <p className="text-xs text-white special:text-xl 2xl:text-sm">
                                  2023-SEP-19 TUESDAY
                                </p>
                              </div>
                            </div>
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

                  {/* <GucciCard /> */}
                </div>
                {/* right side */}
                <div className="flex-col flex-1 space-y-4 hidden xl:flex">
                  <div className="bg-black rounded-b-[50px] py-4">
                    <TopNav textColor={"white"} />
                    <div className="pt-10">
                      <motion.img
                        initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                        animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                        transition={{ type: "tween", duration: 1, delay: 1 }}
                        className="w-full"
                        src={MainCar}
                        alt="main"
                      />
                    </div>
                  </div>
                </div>

                {showPopup && (
                  <PopUpLotto onClose={() => setShowPopup(false)} />
                )}

                {showLessPopup && (
                  <PopUpLess onClose={() => setShowLessPopup(false)} />
                )}
              </div>

              {/* SMALL JEEPS CONTAINER */}

              {/* Raffle View Tabpane */}
              {raffleRounds && (
                <RaffleViewer
                  raffleRounds={raffleRounds}
                  setShowPopup={setShowPopup}
                  showLessPopUp={setShowLessPopup}
                />
              )}
            </div>
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
      className="popup-container backdrop2 backdrop-blur-sm lg:justify-center justify-center"
      onClick={handleBackdropClick2}
    >
      <div className=" popup-content text-white bg-gradient-to-br  from-[#000000] space-y-4  to-[#000000]  justify-center items-center  pt-5 pb-10 xl:px-20 md:px-20 px-10 flex flex-col lg:mr-[10%]">
        <button
          className="absolute top-1 right-1 text-3xl text-inherit hover:scale-105"
          onClick={onClose}
        >
          <IoCloseSharp />
        </button>
        <img src={Loto} alt="" className="xl:w-16 md:w-14 w-12 h-auto" />
        <p className="font-bold text-white text-center xl:text-5xl md:5xl text-3xl mb-1">
          $10
        </p>
        <p className="text-white mb-2 text-center">User/Month</p>
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
          className="flex justify-center gap-5 bg-white text-[#000] font-bold p-4 rounded-xl mt-3 px-12 cursor-pointer hover:scale-105"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Raffles;
