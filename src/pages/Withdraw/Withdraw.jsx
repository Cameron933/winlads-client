import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardComponentNoWithdraw from "../../components/cardComponent/CardComponentNoWithdraw";
import directBankIcon from "../../assets/images/icons/direct-bank.svg";
import stripeIcon from "../../assets/images/icons/stripe.svg";
const Withdraw = () => {
  const cookies = new Cookies(null, { path: "/" });
  const id = cookies.get("wr_token");
  const [withdrawShow, setWithdrawShow] = useState(false);
  const navigate = useNavigate();
  const [withdrawMethod, setWithdrawMethod] = useState("Direct Bank");
  const [valUser, setValUser] = useState({});

  const [amount, setAmount] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    currentUserValidation();
  }, []);

  const handleDrowpdownChange = (val) => {
    setWithdrawMethod(val);
    handleShowBank();
  };

  const handleShowBank = () => {
    setWithdrawShow((prev) => !prev);
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
      setTransactions(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  const setTransactions = async (uid) => {
    console.log(uid, "click");
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/requestFundTransfer`,
      {
        uid: uid,
        method: withdrawMethod,
        bank: bankName,
        accountnumber: accountNumber,
        amount: amount,
      }
    );
    if (response.data.status == 200) {
      toast.success(response.data.message, {
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
      toast.success(response.data.message, {
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
  };

  return (
    <div>
      <div className="flex relative">
        <div className="right-side-logo max-xl:hidden"></div>
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-0 xl:space-y-0 bg-no-repeat">
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>
            <CardComponentNoWithdraw />
          </div>

          <div className="flex flex-col space-y-4 flex-1 xl:mx-12">
            <div className="flex flex-col space-y-3 md:mt-20 mt-0">
              <div className="flex items-center justify-start gap-2">
                <h1 className="text-2xl font-bold">Withdraw Funds</h1>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-sm xl:text-md special:text-xl">
                Payout Amount
              </p>
              <input
                className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                placeholder="Payout Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col space-y-2 relative">
              <p className="text-black text-sm xl:text-md special:text-xl">
                Withdraw Method
              </p>
              <div
                className="bg-[#ECECEC] flex items-center justify-between text-black rounded-xl px-2 py-2 focus:outline-none text-xs xl:text-sm special:text-xl special:py-3"
                onClick={handleShowBank}
              >
                {withdrawMethod}{" "}
                <RiArrowDropDownLine className="text-2xl cursor-pointer" />
              </div>
              {withdrawShow && (
                <div className="absolute top-14 rounded-lg border left-0 w-full p-2 bg-white">
                  <div
                    className="flex items-center justify-start gap-4 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleDrowpdownChange("bank")}
                  >
                    <div>
                      <img
                        src={directBankIcon}
                        alt="icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h2>Direct Bank</h2>
                  </div>
                  <div
                    className="flex items-center justify-start gap-4 px-3 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleDrowpdownChange("stripe")}
                  >
                    <div>
                      <img
                        src={stripeIcon}
                        alt="icon"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h2>Stripe</h2>
                  </div>
                </div>
              )}
            </div>
            {/* ONLY FOR BANK WITHDRAW */}
            {withdrawMethod == "Direct Bank" ? (
              <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Bank Name
                  </p>
                  <input
                    className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    placeholder="Bank Name"
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  ></input>
                </div>

                <div className="flex flex-col space-y-2 mb-4">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Account Number
                  </p>
                  <input
                    className="bg-[#ECECEC] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    placeholder="Account Number"
                    type="number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  ></input>
                </div>
                <br />
              </div>
            ) : (
              <></>
            )}
            <div
              className="bg-black py-2 text-center rounded-xl cursor-pointer hover:bg-black/75 md:w-1/2 w-full ml-auto"
              onClick={() =>
                setTransactions({
                  withdrawMethod,
                  bankName,
                  accountNumber,
                  amount,
                })
              }
            >
              <p className="text-white font-semibold">Withdraw</p>
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="w-3/4" src={MainCar} alt="main" />
              </div>
            </div>

            {/* <div className="w-full">
              <GoldCard />
            </div> */}
            <div>
              <CardComponentNoWithdraw />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
