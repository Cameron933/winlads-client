import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Tax from "../../assets/images/transaction/Tax.png";
import Ticket from "../../assets/images/transaction/Ticket.png";
import Blue from "../../assets/images/transaction/Blue.png";
import Green from "../../assets/images/transaction/Green.png";
import Red from "../../assets/images/transaction/Red.png";
import Arrow from "../../assets/images/transaction/Arrow.png";
import backgroundImage from "../../assets/images/transaction/Background.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import PurchaseCard from "../../components/PurchaseCard/PurchaseCard";
import Chart from "react-apexcharts";
import Loader from "../../components/Loader/Loader";

const Trasfer = () => {
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
          {/* side nav */}
          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
            {/* left side */}
            <div className="flex flex-col gap-5 flex-1">
              <div className="lg:hidden mt-5">
                <TopNav />
              </div>
              <div className="flex flex-col lg:mt-5 ">
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

              <div
                className="flex flex-col space-y-4 "
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-row justify-between items-center lg:px-5">
                  <Link to="/transaction">
                    <button className="md:text-lg xl:text-xl px-3 py-2 hover:shadow-md rounded-full hover:font-semibold">
                      Transactions History
                    </button>
                  </Link>

                  <p className="text-[#EC2639] md:text-lg xl:text-xl">
                    Fund Transfer
                  </p>
                </div>

                <img src={MainCar} alt="" />
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col flex-1 gap-5">
              <div className="flex flex-col bg-black h-full xl:px-16 px-8 lg:pt-12 pt-4 pb-10  gap-8">
                <div className="invisible lg:visible mt-5">
                  <TopNav textColor="white" />
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-[#FFFFFF]">Bank Name</p>
                  <input
                    className="bg-[#FFF7D9] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm "
                    placeholder="Enter Account Number"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#FFFFFF]">Account Number</p>
                  <input
                    className="bg-[#FFF7D9] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Account Number"
                    type="number"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#FFFFFF]">Holder Name</p>
                  <input
                    className="bg-[#FFF7D9] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Holder Name"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#FFFFFF]">Purpose of Payment</p>
                  <input
                    className="bg-[#FFF7D9] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Purpose Payment"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-[#FFFFFF]">Amount</p>
                  <input
                    className="bg-[#FFF7D9] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Amount"
                    type="number"
                  ></input>
                </div>
                <div className="flex items-center gap-6">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ml-2 text-sm font-medium text-gray-200"
                  >
                    I agree with the terms of use
                  </label>
                </div>
                <div className="flex justify-center pt-4">
                  <button className="bg-[#4FC8E8] rounded-2xl lg:px-24 md:px-20 px-16 py-1 hover:text-white hover:shadow-md ">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Trasfer;
