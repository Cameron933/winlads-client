import { IoCloseSharp } from "react-icons/io5";
import white from "../../assets/images/subscribers/white.png";
import bitcoin from "../../assets/images/rafflesImages/bitcoin.png";
import Visa from "../../assets/images/rafflesImages/Visa.png";
import Usd from "../../assets/images/rafflesImages/Usd.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SelectRafflePaymentMethod = ({
  onClose,
  userId,
  giveawayId,
  price,
  name,
  subPlane,
  valUser,
}) => {
  const [count, setCount] = useState(1);
  const [coupon, setCoupon] = useState("");
  const navigate = useNavigate();
  const [buttonMode, setButtonMode] = useState(1); //1 =  PaybySub + OneOff  \ 0 = PayBy Balance + PayBy Card
  const logDetailsToDataLayer = (valUser, giveawayId, price, name) => {
    const data = {
      user: valUser,
      giveawayId: giveawayId || "",
      price: price || "",
      plan_name: name || "",
    };

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("paymentSuccessData", JSON.stringify(data));
    }

    // Debugging log
    console.log("Logging to localstorage one off payment:", data);
  };
  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyRaffleRoundWithPayment`,
        {
          uid: userId,
          roundid: giveawayId,
          count: count,
          coupen: coupon,
        }
      );

      const payURL = response.data.payurl;

      // Redirect the user to the payURL
      logDetailsToDataLayer(valUser, giveawayId, price, name);
      window.location.href = payURL;
    } catch (error) {
      console.log(error);
    }
  };

  const handlePointsButtonClick = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/buyRaffleRoundWithPoints`,
        {
          uid: userId,
          roundid: giveawayId,
        }
      );
      if (response.data.status == 200) {
        toast.success(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.error(response.data.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleSubPlane = () => {
    navigate("/subscription");
  };
  return (
    <div
      className="popup-container bg-black/50 justify-center items-center"
      //   onClick={handleBackdropClick}
    >
      <div className="popup-content text-black flex flex-col bg-white shadow-lg space-y-4 w-[400px] special:space-y-12 2xl:space-y-8 justify-center py-4 special:py-8 2xl:py-6">
        <div className="flex justify-between items-center">
          <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            {name}
          </p>
          <button
            className="text-3xl 2xl:text-4xl special:text-5xl hover:scale-105"
            onClick={onClose}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col special:px-24 2xl:px-8 px-0 space-y-4 special:space-y-12 2xl:space-y-8">
          {/* <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            Single Entry
          </p> */}

          <p className="font-bold text-black text-center xl:text-5xl 2xl:text-6xl special:text-9xl md:5xl text-3xl">
            $ {price * count}
          </p>
          {/* <p className="text-white text-center special:text-4xl">User/Month</p> */}
          {/* <div className="flex justify-center flex-col space-y-2 special:space-y-6 2xl:space-y-4">
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
          </div> */}
          {/* <div className="">
            <div className={`to-[#0094FF] from-[#01819D] hover:scale-105 mb-2 transition-all cursor-pointer px-2 py-2 text-xs rounded-full bg-gradient-to-t capitalize ${count === 1 ? 'scale-105' : 'scale-100'}`} onClick={() => setCount(1)}>
              01 Free Accumulating entries package
            </div>
            {
              count == 1 && <motion.div className="p-3 bg-white rounded-xl border text-[0.7rem]"
              initial={{opacity:0,scaleY:0}}
              transition={{duration:0.3}}
              animate={{opacity:1, scaleY:1}}
              >
                Partner Store Discounts: 10%
              </motion.div>
            }
            <div className={`to-[#FF4700] from-[#611C00] hover:scale-105 mb-2 transition-all cursor-pointer px-2 py-2 text-xs rounded-full bg-gradient-to-t capitalize ${count === 3 ? 'scale-105' : 'scale-100'}`} onClick={() => setCount(3)}>
              03 Free Accumulating entries package
            </div>
            {
              count == 3 && <motion.div className="p-3 bg-white rounded-xl border text-[0.7rem]"
              initial={{opacity:0,scaleY:0}}
              transition={{duration:0.3}}
              animate={{opacity:1, scaleY:1}}
              >
                Access to Winlad Store Cash Back program
              </motion.div>
            }
            <div className={`to-[#00ECFF] from-[#006168] hover:scale-105 mb-2 transition-all cursor-pointer px-2 py-2 text-xs rounded-full bg-gradient-to-t capitalize ${count === 10 ? 'scale-105' : 'scale-100'}`} onClick={() => setCount(10)}>
              10 Free Accumulating entries package
            </div>
            {
              count == 10 && <motion.div className="p-3 bg-white rounded-xl border text-[0.7rem]"
              initial={{opacity:0,scaleY:0}}
              transition={{duration:0.3}}
              animate={{opacity:1, scaleY:1}}
              >
                Access to Winlads Public Events
              </motion.div>
            }
            <div className={`to-[#FFBE00] from-[#766000] hover:scale-105 mb-2 transition-all cursor-pointer px-2 py-2 text-xs rounded-full bg-gradient-to-t capitalize ${count === 25 ? 'scale-105' : 'scale-100'}`} onClick={() => setCount(25)}>
              25 Free Accumulating entries package
            </div>
            {
              count == 25 && <motion.div className="p-3 bg-white rounded-xl border text-[0.7rem]"
              initial={{opacity:0,scaleY:0}}
              transition={{duration:0.3}}
              animate={{opacity:1, scaleY:1}}
              >
                Be Eligible to Apply for Winlad GOLD Card
              </motion.div>
            }
            <div className={`to-[#22272C] from-[#23282E] hover:scale-105 mb-2 transition-all cursor-pointer px-2 py-2 text-xs rounded-full bg-gradient-to-t capitalize ${count === 150 ? 'scale-105' : 'scale-100'} text-white`} onClick={() => setCount(150)}>
            <div className="col-span-1 bg-gradient-to-t text-black to-[#FFBE00] from-[#766000] rounded-full py-2 px-4 text-center">
                25 Free Accumulating entries package
              </div>
            </div>
            {
              count == 150 && <motion.div className="p-3 bg-white rounded-xl border text-[0.7rem]"
              initial={{opacity:0,scaleY:0}}
              transition={{duration:0.3}}
              animate={{opacity:1, scaleY:1}}
              >
                Access to Winlads Urgency Program
              </motion.div>
            }

          </div> */}
          <div className="flex overflow-x-auto gap-2">
            <div
              className={`bg-gradient-to-t to-[#0094FF] cursor-pointer from-[#00347C] hover:opacity-75 border-2 rounded-lg flex flex-col py-4 md:px-2 px-4 w-[350px]  ${
                count === 1 ? "border-black" : "scale-100"
              }`}
              onClick={() => setCount(1)}
            >
              <p className="text-black font-semibold xl:text-lg md:text-xl text-lg xl:pb-12 pb-16 md:pb-8 text-center px-4">
                01 Free<br/> Acuminating
                <br /> Entry Packages
              </p>
              <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
                Partner Store Discounts: 10%
              </div>
            </div>
            <div
              className={`bg-gradient-to-t to-[#FC4701] cursor-pointer from-[#661E01] border-2 hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4 w-[350px] ${
                count === 3 ? "border-black" : "scale-100"
              }`}
              onClick={() => setCount(3)}
            >
              <p className="text-black font-semibold xl:text-lg md:text-xl text-lg xl:pb-12 pb-16 md:pb-8 text-center px-4">
                01 Free
                <br /> Acuminating
                <br /> Entry Packages
              </p>
              <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
                Partner Store Discounts: 10%
              </div>
            </div>
            <div
              className={`bg-gradient-to-t to-[#01E9FC] cursor-pointer border-2 from-[#01666D] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4 w-[350px] ${
                count === 10 ? " border-black" : "scale-100"
              }`}
              onClick={() => setCount(10)}
            >
              <p className="text-black font-semibold xl:text-lg md:text-xl text-lg xl:pb-12 pb-16 md:pb-8 text-center px-4">
                01 Free
                <br /> Acuminating
                <br /> Entry Packages
              </p>
              <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
                Partner Store Discounts: 10%
              </div>
            </div>
            <div
              className={`bg-gradient-to-t to-[#F5B701] cursor-pointer border-2 from-[#796201] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4 w-[350px] ${
                count === 25 ? "border-black" : "scale-100"
              }`}
              onClick={() => setCount(25)}
            >
              <p className="text-black font-semibold xl:text-lg md:text-xl text-lg xl:pb-12 pb-16 md:pb-8 text-center px-4">
                01 Free
                <br /> Acuminating
                <br /> Entry Packages
              </p>
              <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
                Partner Store Discounts: 10%
              </div>
            </div>
            <div
              className={`bg-gradient-to-t to-[#22282D] cursor-pointer border-2 from-[#010101] hover:opacity-75 rounded-lg flex flex-col py-4 md:px-2 px-4 w-[350px] ${
                count === 150 ? "border-black" : "scale-100"
              }`}
              onClick={() => setCount(150)}
            >
              <p className="text-white font-semibold xl:text-lg md:text-xl text-lg xl:pb-12 pb-16 md:pb-8 text-center px-4">
                01 Free
                <br /> Acuminating
                <br /> Entry Packages
              </p>
              <div className="bg-white text-black rounded-lg md:py-4 py-2 text-center px-2 md:text-xs text-[8px]">
                Partner Store Discounts: 10%
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center  flex-col space-y-2">
            {/* <div className="rounded-2xl flex flex-row justify-between items-center px-4 w-48 border border-solid border-black bg-[##F3F3F3] py-1">
              <div onClick={handleMinus} className="cursor-pointer text-lg">
                -
              </div>

              <div className="text-lg">{count}</div>
              <div onClick={handlePlus} className="cursor-pointer text-lg">
                +
              </div>
            </div> */}
            <input
              type="text"
              className="w-full rounded-2xl border border-solid border-black placeholder:text-xs text-xs px-4 py-2 placeholder:text-gray-700"
              placeholder="Coupon code"
              value={coupon}
              id="coupon"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          <p className="text-black text-lg font-bold 2xl:text-xl special:text-4xl">
            Payment Methods
          </p>
          <div className="flex flex-row justify-center items-center lg:gap-4 gap-1 text-black">
            {buttonMode ? (
              <>
                {" "}
                <div
                  className="bg-white hover:bg-black/5 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={handleSubPlane}
                >
                  <img
                    src={Usd}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="text-xs md:block hidden">Pay by Subscription</p>
                </div>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={() => setButtonMode(0)}
                >
                  <img
                    src={Usd}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="text-xs md:block hidden">One Off Payment</p>
                </div>
              </>
            ) : (
              <>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={handlePointsButtonClick}
                >
                  <img
                    src={Usd}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="text-xs md:block hidden">Pay by Balance </p>
                </div>
                <div
                  className="bg-white hover:bg-black/5 rounded-xl p-2 flex justify-center items-center cursor-pointer lg:gap-2"
                  onClick={handleButtonClick}
                >
                  <img
                    src={Visa}
                    alt=""
                    className="w-7 h-7 special:h-14 special:w-14 2xl:h-9 2xl:w-9"
                  />
                  <p className="text-xs md:block hidden">Pay by Card</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRafflePaymentMethod;
