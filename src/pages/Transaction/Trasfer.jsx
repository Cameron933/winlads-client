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
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Trasfer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    // Handle date change logic here
    setDate(newDate);
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

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
      },
      legend:{
        position:'bottom'
      },
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
    },
  };

  const chartWidth = windowWidth > 700 ? 500 : windowWidth - 150;

  return (
    <div>
      <div className="flex relative">
        <SideNav screen="screen" />
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 px-4 xl:gap-6 space-y-4 xl:space-y-0 ">
          <div className="flex flex-col space-y-4 flex-1 py-5">
            <div className="xl:hidden">
              <TopNav />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">Your Balance</p>
              <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">$576,000.00</p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-6 md:gap-6 2xl:text-2xl special:text-3xl">
              <div className="bg-blue-400 justify-between flex-1 items-center gap-2 md:gap-4 xl:gap-4 rounded-2xl xl:px-4 xl:py-8 md:px-4 md:py-8 flex flex-row px-4 py-4">
                <img src={Tax} alt="" className="md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm" />
                <div className="flex flex-col">
                  <p className=" text-white text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    $5,000
                  </p>
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    Earning
                  </p>
                </div>
              </div>
              <div className="bg-orange-400 flex-1 justify-between items-center xl:gap-4 gap-2 md:gap-4 rounded-2xl xl:px-4 xl:py-8 md:px-4 md:py-8 flex flex-row px-4 py-4">
                <img src={Ticket} alt="" className="md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm" />
                <div className="flex flex-col">
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    $15,000
                  </p>
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    Purchase
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
            <div style={{ position: 'relative' }}>
                <div className="flex flex-row items-center justify-center gap-2 mb-5" onClick={toggleCalendar}>
                  <p className="text-center uppercase md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                    DECEMBER 2022
                  </p>
                  <img src={Arrow} alt="" />
                </div>
                {isCalendarVisible && (
                  <div  style={{
                    position: 'absolute',
                    top: '50%', // Center vertically
                    left: '50%', // Center horizontally
                    transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
                    zIndex: 100,
                    top: "380%",
                  }}>
                    <Calendar onChange={handleDateChange} value={date} />
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="donut"
                  width={chartWidth}
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
                zIndex: -10,
              }}
            >
              <div className="flex flex-row justify-between items-center">
                <Link to="/transaction">
                  <p className="md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">Transactions History</p>
                </Link>
                <p className="text-[#EC2639] md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">Fund Transfer</p>
              </div>
              <img src={MainCar} alt="" />
            </div>
          </div>
          <div className="flex-col flex-1 mt-0 relative">
            <div className="invisible xl:visible absolute w-full mt-4">
              <TopNav textColor={'white'} />
            </div>
            <div className="flex flex-col bg-black h-full xl:px-16 px-8 xl:pt-12 pt-4 pb-4 md:pt-8 space-y-8">
              <div className="flex flex-col space-y-2 mt-10">
                <p className="text-[#FFFFFF] md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">Bank Name</p>
                <input
                  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Account Number"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-[#FFFFFF] md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">Account Number</p>
                <input
                  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Account Number"
                  type="number"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-[#FFFFFF] md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">Holder Name</p>
                <input
                  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Holder Name"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-[#FFFFFF] md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">Purpose of Payment</p>
                <input
                  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Purpose Payment"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-[#FFFFFF] md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">Amount</p>
                <input
                  className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
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
                  className="ml-2 text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the terms of use
                </label>
              </div>
              <div className="flex justify-center pt-4">
                <button className="bg-[#4FC8E8] rounded-xl px-20 py-1 md:text-xl xl:text-lg 2xl:text-2xl special:text-2xl">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trasfer;
