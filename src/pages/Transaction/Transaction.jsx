import React, { useState, useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Tax from "../../assets/images/transaction/Tax.png";
import Ticket from "../../assets/images/transaction/Ticket.png";
import Arrow from "../../assets/images/transaction/Arrow.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import Blue from "../../assets/images/transaction/Blue.png";
import Green from "../../assets/images/transaction/Green.png";
import Red from "../../assets/images/transaction/Red.png";
import Transfer from "../../assets/images/transaction/transfer-outlined.png";
import Save from "../../assets/images/transaction/save-outlined.png";
import Slip from "../../assets/images/transaction/slip-outlined.png";
import { BiSolidDownArrow } from "react-icons/bi";
import Chart from "react-apexcharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";

const Transaction = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const [wallet, setWallet] = useState("");
  const [transactions, getTransactions] = useState([]);
  const [valUser, setValUser] = useState({});


  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleSelect = (option) => {
  //   // Handle selection logic here
  //   console.log(`Selected option: ${option}`);
  //   setIsOpen(false); // Close the dropdown after selection
  // };

  useEffect(() => {
    getEarning();
    getTransactionsFunction();
    currentUserValidation()
  }, []);


  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };



  const getEarning = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_SERVER_API
        }/getPointBalances?uid=${valUser.uid}`
      )
      .then((response) => {
        setWallet(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTransactionsFunction = async () => {
    await axios
      .get(
        `${
          import.meta.env.VITE_SERVER_API
        }/getTransactions?uid=jZNYcKmEmIcDhR3yqCJiGknbJiB3&start=2023-09-04T16:16:38.361Z&end=2023-12-31T16:16:38.361Z`
      )
      .then((response) => {
        console.log(response.data.data);
        getTransactions(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

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
      legend: {
        position: "bottom",
      },
      labels: [
        "Card Transactions",
        "Digital Transactions",
        "Earning Transactions",
      ],
    },
  };

  const chartWidth = windowWidth > 700 ? 500 : windowWidth - 80;

  return (
    <div>
      <div className="flex relative min-h-screen">
        <SideNav screen="full" />
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-4 special:px-12 2xl:px-8 flex-1 xl:gap-4 special:gap-8 2xl:gap-6 space-y-4 xl:space-y-0">
          <div className="side-bg " style={{ top: "50%" }}></div>
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-full" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1">
              <p className="font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                Your Balance
              </p>
              <p className="font-extrabold md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                ${valUser.balance}
              </p>
            </div>
            <div className="flex flex-row gap-2 xl:gap-6 md:gap-6 2xl:text-2xl special:text-3xl">
              <div className="bg-blue-400 justify-between flex-1 items-center gap-2 md:gap-4 xl:gap-4 rounded-2xl xl:px-4 xl:py-8 md:px-4 md:py-8 flex flex-row px-4 py-4 2xl:gap-8 2xl:py-12 special:gap-12 special:py-16">
                <img
                  src={Tax}
                  alt=""
                  className="md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className=" text-white text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    ${wallet.earning}
                  </p>
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    Earning
                  </p>
                </div>
              </div>
              <div className="bg-orange-400 flex-1 justify-between items-center xl:gap-4 gap-2 md:gap-4 rounded-2xl xl:px-4 xl:py-8 md:px-4 md:py-8 flex flex-row px-4 py-4 2xl:gap-8 2xl:py-12 special:gap-12 special:py-16">
                <img
                  src={Ticket}
                  alt=""
                  className="md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                  ${wallet.purchase}
                  </p>
                  <p className="text-white md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                    Purchase
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div style={{ position: "relative" }}>
                <div
                  className="flex flex-row items-center justify-center gap-2 mb-5"
                  onClick={toggleCalendar}
                >
                  <p className="text-center uppercase md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                    DECEMBER 2022
                  </p>
                  <img src={Arrow} alt="" />
                </div>
                {isCalendarVisible && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%", // Center vertically
                      left: "50%", // Center horizontally
                      transform: "translate(-50%, -50%)", // Center both vertically and horizontally
                      zIndex: 100,
                      top: "380%",
                    }}
                  >
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
                  font="18px"
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
                <p className="text-[#EC2639] md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                  Transactions History
                </p>
                <Link to="/transfer">
                  <p className="md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                    Fund Transfer
                  </p>
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-bold text-xl md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                  Transactions
                </p>
                {/* <p className="text-md md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">See All</p> */}
                <div className="relative inline-block text-left">
                  <button
                    onClick={handleToggle}
                    type="button"
                    className="inline-flex justify-between items-center justify-center w-full rounded-md border border-gray-500 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring focus:border-gray-300 relative"
                    id="options-menu"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="mr-4 text-md md:text-xl xl:text-xl 2xl:text-xl special:text-2xl">
                      {selectedOption || "See All"}
                    </span>
                    <span
                      className={`transform ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      }`}
                    >
                      &#9660;
                    </span>
                  </button>

                  {/* {transactions.map((transaction, key) => (
                    <div key={key}>
                      <p>{transaction.amount}</p>
                    </div>
                  ))} */}

                  {isOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div
                          onClick={() => handleSelect("Card Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Card Transaction
                        </div>
                        <div
                          onClick={() => handleSelect("Digital Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Digital Transaction
                        </div>
                        <div
                          onClick={() => handleSelect("Earning Transaction")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
                          role="menuitem"
                        >
                          Earning Transaction
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Display Card Purchase */}
              {selectedOption === "Card Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Transfer}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Car Purchase
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Auto Loan
                      </p>
                    </div>
                  </div>
                  <p className="text-[#4FC8E8] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    -$250
                  </p>
                </div>
              )}

              {/* Display House Purchase */}
              {selectedOption === "Digital Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Slip}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Houses Purchase
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Airbnb home
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    $2250
                  </p>
                </div>
              )}

              {/* Display Transport */}
              {selectedOption === "Earning Transaction" && (
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-2 items-center">
                    <img
                      src={Save}
                      alt=""
                      className="special:w-20 special:h-20 xl:w-14 xl:h-14 md:w-12 md:h-12 w-8 h-8"
                    />
                    <div className="flex flex-col">
                      <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl special:text-3xl">
                        Transport
                      </p>
                      <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-2xl">
                        Uber pathao
                      </p>
                    </div>
                  </div>
                  <p className="text-[#059713] font-semibold xl:text-lg 2xl:text-2xl special:text-4xl">
                    $250
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* <div> */}
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
                  <motion.img
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 1, delay: 1 }}
                    className="w-full"
                    src={MainCar}
                    alt="main"
                  />
                </div>
              </div>
              <div className="w-full">
                <GoldCard />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
