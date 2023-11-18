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

const Transaction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
    },
  };

  const chartWidth = windowWidth > 768 ? 400 : windowWidth - 70;
  return (
    <div>
      <div className="flex relative min-h-screen">
        <SideNav screen="full" />
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 px-4 xl:gap-8 pb-5 space-y-4 xl:space-y-0">
          <div className="flex flex-col space-y-4 flex-1">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
              <div className="lg:w-2/3">
                <GoldCard />
              </div>
              <div>
                <EarningCard />
              </div>
              </div>

              
            </div>

            <div className="flex flex-col space-y-1">
              <p className="font-bold text-xl xl:text-2xl md:text-3xl">Your Balance</p>
              <p className="font bold text-2xl xl:text-4xl">$576,000.00</p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-6 md:gap-6">
              <div className="bg-[#FF6363] justify-between flex-1 items-center gap-2 md:gap-4 xl:gap-4 rounded-2xl xl:px-4 px-2 py-2 md:px-4 md:py-4 flex flex-row">
                <img src={Tax} alt="" className="md:h-20 md:w-20 xl:h-16 xl:w-16" />
                <div className="flex flex-col">
                  <p className="text-sm xl:text-xl text-[#000000] md:text-2xl">
                    $5,000
                  </p>
                  <p className="text-gray-700 text-xs xl:text-lg md:text-xl">
                    Earning
                  </p>
                </div>
              </div>
              <div className="bg-[#79FF63] flex-1 justify-between items-center xl:gap-4 gap-2 md:gap-4 rounded-2xl xl:px-4 px-2 py-2 md:px-4 md:py-4 flex flex-row">
                <img src={Ticket} alt="" className="md:h-20 md:w-20 xl:h-16 xl:w-16" />
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
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-center gap-2 mb-5">
                <p className="text-center uppercase md:text-xl xl:text-lg">DECEMBER 2022</p>
                <img src={Arrow} alt="" />
              </div>
              <div className="flex justify-center">
                <Chart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="donut"
                  width={chartWidth}
                />
              </div>
              {/* <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col space-y-2">
                  <div className="flex flex-row gap-2 items-center">
                    <img src={Blue} alt="" />
                    <p className="text-xs xl:text-md md:text-md text-gray-800">
                      Card Transactions
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={Green} alt="" />
                    <p className="text-xs xl:text-md md:text-md text-gray-800">
                      Digital Transactions
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <img src={Red} alt="" />
                    <p className="text-xs xl:text-md md:text-md text-gray-800">
                      Earning Transactions
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex flex-col space-y-4 flex-1">
              <div className="flex flex-row justify-between items-center">
                <p className="text-[#EC2639] md:text-2xl xl:text-xl">Transactions History</p>
                <Link to="/transfer">
                  <p className="md:text-2xl xl:text-xl">Transactions</p>
                </Link>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="font-bold text-xl md:text-2xl xl:text-xl">Transactions</p>
                <div className="flex flex-row items-center gap-4">
                  <p className="md:text-xl xl:text-xl">See All</p>
                  <BiSolidDownArrow />
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={Transfer}
                    alt=""
                    className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm md:text-lg xl:text-sm">Car Purchase</p>
                    <p className="text-xs md:text-sm xl:text-xs">Auto Loan</p>
                  </div>
                </div>
                <p className="text-[#4FC8E8] font-semibold text-sm md:text-xl xl:text-lg">-$250</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={Slip}
                    alt=""
                    className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm md:text-lg xl:text-sm">Houses Purchase</p>
                    <p className="text-xs md:text-sm xl:text-xs">Airbnb home</p>
                  </div>
                </div>
                <p className="text-[#059713] font-semibold text-sm md:text-xl xl:text-lg">$2250</p>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    src={Save}
                    alt=""
                    className="xl:w-10 xl:h-10 md:w-12 md:h-12 w-8 h-8"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm md:text-lg xl:text-sm">Transport</p>
                    <p className="text-xs md:text-sm xl:text-xs">Uber pathao</p>
                  </div>
                </div>
                <p className="text-[#059713] font-semibold text-sm md:text-xl xl:text-lg">$250</p>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="flex flex-col flex-1 space-y-4">
              <div className="invisible xl:visible">
                <TopNav />
              </div>

              <div className="top-img-inner-subscription">
                <img className="" src={MainCar} alt="main" />
              </div>
              <div className="lg:w-2/3">
                <GoldCard />
              </div>

              <div>
                <EarningCard />
              </div>
            </div> */}
            <div className="flex-col flex-1 space-y-4 hidden xl:flex">
              <div className=" space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <img className="" src={MainCar} alt="main" />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <GoldCard />
                </div>

                <div>
                  <EarningCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
