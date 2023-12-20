import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import Arrow from "../../assets/images/transaction/Arrow.png";
import Chart from "react-apexcharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import Balance from "../../assets/images/transaction/balance.png";
import Profit from "../../assets/images/transaction/profit.png";
import ShoppingBag from "../../assets/images/transaction/shopping-bag.png";

const Trasfer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [valUser, setValUser] = useState({});
  const [wallet, setWallet] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    currentUserValidation();
    getEarning();
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
        `${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valUser.uid}`
      )
      .then((response) => {
        setWallet(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
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

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

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

  const chartWidth = windowWidth > 700 ? 500 : windowWidth - 150;

  return (
    <div>
      <div className="flex relative">
        <SideNav screen="screen" name={valUser.name} userId={valUser.uid} />
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 px-4 xl:gap-6 space-y-4 xl:space-y-0 ">
          <div className="flex flex-col space-y-4 flex-1 py-5">
            <div className="xl:hidden">
              <TopNav />
            </div>
            <div className="flex flex-col space-y-1">
              <p className="font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-3xl special:text-4xl">
                Your Balance
              </p>
            </div>

            <div className="flex flex-row gap-2 xl:gap-2 md:gap-6 2xl:text-2xl special:text-3xl">
              <div className="bg-[#008767] justify-between items-center rounded-2xl gap-4 py-2 xl:px-3 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-green-600/75">
                <img
                  src={Balance}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.balance || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
                    Balance
                  </p>
                </div>
              </div>
              <div className="bg-[#52A0DF] justify-between items-center rounded-2xl gap-4 py-2 xl:px-4 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-[#52A0DF]/75">
                <img
                  src={Profit}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.earning || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
                    Earning
                  </p>
                </div>
              </div>

              <div className="bg-[#DF7E59] justify-between items-center rounded-2xl gap-4 py-2 xl:px-3 md:px-4 flex flex-1 flex-row px-4 cursor-pointer hover:bg-[#DF7E59]/75">
                <img
                  src={ShoppingBag}
                  alt=""
                  className="w-12 h-12 md:h-20 md:w-20 xl:h-16 xl:w-16 max-w-screen-sm"
                />
                <div className="flex flex-col">
                  <p className="text-white text-xl md:text-xl xl:text-3xl 2xl:text-2xl special:text-3xl">
                    ${wallet.purchase || "0.00"}
                  </p>
                  <p className="text-white text-lg md:text-lg xl:text-xl 2xl:text-xl special:text-2xl">
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
                />
              </div>
            </div>
            <div
              className="flex flex-col space-y-4 "
        
            >
              <div className="flex flex-row justify-between items-center">
                <Link to="/transaction">
                  <p className="md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                    Transactions History
                  </p>
                </Link>
                <p className="text-[#EC2639] md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl">
                  Fund Transfer
                </p>
              </div>

            </div>
          </div>
          <div className="flex-col flex-1 mt-0 relative">
            <div className="invisible xl:visible absolute w-full mt-4">
              <TopNav textColor={"black"} />
            </div>
            <div className="flex flex-col h-full xl:px-16 px-8 xl:pt-12 pt-4 pb-4 md:pt-8 space-y-8">
              <div className="flex flex-col space-y-2 mt-10">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Bank Name
                </p>
                <input
                  className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Account Number"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Account Number
                </p>
                <input
                  className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Account Number"
                  type="number"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Holder Name
                </p>
                <input
                  className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Holder Name"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Purpose of Payment
                </p>
                <input
                  className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Purpose Payment"
                  type="text"
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Amount
                </p>
                <input
                  className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm text-sm md:text-lg xl:text-xl 2xl:text-xl special:text-2xl"
                  placeholder="Enter Amount"
                  type="number"
                ></input>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <input
                    id="checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={onCheckboxChange}
                    className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />

                  <div className="flex flex-row items-center gap-2 ml-2">
                    <p
                      htmlFor="checked-checkbox"
                      className="text-xs special:text-lg font-medium text-black cursor-pointer"
                      onClick={() => setIsChecked(!isChecked)}
                    >
                      {" "}
                      I agree with the
                    </p>
                    <Link
                      to="/conditions"
                      target="_blank"
                      className="yellow-text"
                    >
                      <p
                        className="text-xs special:text-lg font-medium"
                      >
                        terms of use
                      </p>
                    </Link>
                  </div>
                </div>

                <button  disabled={!isChecked} className={`bg-${isChecked ? 'black' : 'gray-500'} hover:bg-${isChecked ?  "black/50" : ""} rounded-xl px-20 py-2 md:text-xl text-white xl:text-lg 2xl:text-2xl special:text-2xl`}>
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
