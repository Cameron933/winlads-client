import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Link } from "react-router-dom";
import Tax from "../../assets/images/transaction/Tax.png";
import Ticket from "../../assets/images/transaction/Ticket.png";
import Arrow from "../../assets/images/transaction/Arrow.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import Blue from "../../assets/images/transaction/Blue.png";
import Green from "../../assets/images/transaction/Green.png";
import Red from "../../assets/images/transaction/Red.png";
import Transfer from "../../assets/images/transaction/Transfer.jpeg";
import Save from "../../assets/images/transaction/Save.jpeg";
import Slip from "../../assets/images/transaction/Slip.jpeg";
import { BiSolidDownArrow } from "react-icons/bi";
import Chart from "react-apexcharts";
import EarningCard from "../../components/EarningCard/EarningCard";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";

const Transaction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chartOptions = {
    series: [26, 30, 54],
    options: {
      chart: {
        type: "donut",
        width: 420,
      },
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
      legend: {
        position: "left", // Set the default legend position
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              width: 375,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative max-w-[2048px] mx-auto">
          {/* side-nav */}
          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
            
            {/* left side */}
            <div className="flex flex-col flex-1 gap-5 order-2 lg:order-1">
              <div className="flex flex-col ">
                <p className="font-bold text-xl xl:text-3xl md:text-2xl">
                  Your Balance
                </p>
                <p className="font bold text-3xl md:text-4xl xl:text-6xl">
                  $576,000.00
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 xl:gap-6 md:gap-4">
                <div className="bg-[#FF6363] justify-between flex-1 items-center gap-2 md:gap-4 xl:gap-4 rounded-2xl xl:px-4 px-2 py-2 md:px-4 md:py-4 flex flex-row hover:cursor-pointer hover:shadow-lg">
                  <img
                    src={Tax}
                    alt=""
                    className="md:h-20 md:w-20 xl:h-16 xl:w-16"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm xl:text-xl text-[#000000] md:text-2xl">
                      $5,000
                    </p>
                    <p className="text-gray-700 text-xs xl:text-lg md:text-xl">
                      Earning
                    </p>
                  </div>
                </div>
                <div className="bg-[#79FF63] flex-1 justify-between items-center xl:gap-4 gap-2 md:gap-4 rounded-2xl xl:px-4 px-2 py-2 md:px-4 md:py-4 flex flex-row hover:cursor-pointer hover:shadow-lg">
                  <img
                    src={Ticket}
                    alt=""
                    className="md:h-20 md:w-20 xl:h-16 xl:w-16"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm xl:text-xl text-[#000000] md:text-2xl">
                      $15,000
                    </p>
                    <p className="text-gray-700 text-xs xl:text-lg md:text-xl">
                      Purchase
                    </p>
                  </div>
                </div>
              </div>

              {/* chart section */}
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-center gap-2 mb-5 cursor-pointer">
                  <p className="text-center uppercase md:text-xl xl:text-lg">
                    DECEMBER 2022
                  </p>
                  <img src={Arrow} alt="" />
                </div>
                <div className="flex justify-center">
                  <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type={chartOptions.options.chart.type}
                    width={chartOptions.options.chart.width}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                <div className="flex flex-row justify-between items-center lg:px-5">
                  <p className="text-[#EC2639] md:text-lg xl:text-xl">
                    Transactions History
                  </p>
                  <Link to="/transfer">
                    <button className="md:text-lg xl:text-xl px-3 py-2 hover:shadow-md rounded-full hover:font-semibold">
                    Fund Transfer
                    </button>
                  </Link>
                </div>

                {/* select */}
                <div className="flex flex-row justify-between items-center lg:px-5">
                  <p className="font-bold text-xl md:text-2xl xl:text-xl">
                    Transactions
                  </p>
                  <div className="flex flex-row items-center gap-4">
                    {/* <p className="md:text-xl xl:text-xl">See All</p>
              <BiSolidDownArrow /> */}
                    <select
                      name=""
                      id=""
                      className="form-select p-2 border rounded-md outline-none cursor-pointer"
                    >
                      <option value="">See All</option>
                      <option value="">Card Transaction</option>
                      <option value="">Digital Transaction</option>
                      <option value="">Earning Transaction</option>
                    </select>
                  </div>
                </div>

                {/* history */}
                <div className="flex flex-row items-center justify-between py-2 lg:px-5 rounded-full cursor-pointer hover:shadow-lg">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Transfer}
                      alt=""
                      className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-sm">
                        Car Purchase
                      </p>
                      <p className="text-xs md:text-sm xl:text-xs">Auto Loan</p>
                    </div>
                  </div>
                  <p className="text-[#4FC8E8] font-semibold text-sm md:text-xl xl:text-lg">
                    -$250
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between py-2 lg:px-5 rounded-full cursor-pointer hover:shadow-lg">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Slip}
                      alt=""
                      className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-sm">
                        Houses Purchase
                      </p>
                      <p className="text-xs md:text-sm xl:text-xs">
                        Airbnb home
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold text-sm md:text-xl xl:text-lg">
                    $2250
                  </p>
                </div>
                <div className="flex flex-row items-center justify-between py-2 lg:px-5 rounded-full cursor-pointer hover:shadow-lg">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Save}
                      alt=""
                      className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-sm">Transport</p>
                      <p className="text-xs md:text-sm xl:text-xs">
                        Uber pathao
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold text-sm md:text-xl xl:text-lg">
                    $250
                  </p>
                </div>
              </div>
            </div>

            {/* right-side */}
            <div className="flex flex-col flex-1 order-1 lg:order-2">
              <div className="visible lg:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <div className="pt-5">
                    <TopNav textColor={"white"} />
                  </div>
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

                <div className="lg:w-2/3 md:w-1/2">
                  <GoldCard />
                </div>

                <EarningCard />
              </div>
              <div className="hidden lg:flex flex-col space-y-4">
                <div className="bg-black rounded-b-3xl space-y-4">
                  <div className="pt-5">
                    <TopNav textColor={"white"} />
                  </div>
                  <div className="flex flex-row items-center bottom-0  relative h-[450px]">
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
                <div className="lg:w-2/3 md:w-1/2">
                  <GoldCard />
                </div>
                <div className="hidden lg:block">
                  <EarningCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Transaction;
