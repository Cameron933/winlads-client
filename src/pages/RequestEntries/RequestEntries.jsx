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
import ItemLoader from "../../components/Loader/ItemLoader";
import { motion } from "framer-motion";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { RiArrowDropDownLine } from "react-icons/ri";
import CardComponentNoWithdraw from "../../components/cardComponent/CardComponentNoWithdraw";
import directBankIcon from "../../assets/images/icons/direct-bank.svg";
import stripeIcon from "../../assets/images/icons/stripe.svg";
import { IoIosArrowBack } from "react-icons/io";

const RequestEntries = () => {
  const cookies = new Cookies(null, { path: "/" });
  const id = cookies.get("wr_token");
  const [withdrawShow, setWithdrawShow] = useState(false);
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});

  const [instausername, setInstausername] = useState("");
  const [instalink, setInstalink] = useState("");

  useEffect(() => {
    currentUserValidation();
  }, []);

  const handleShowBank = () => {
    setWithdrawShow(!withdrawShow);
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const setRequest = async () => {
    try {
      const responseRequest = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/instaFormAdd`,
        {
          uid: valUser.uid,
          instausername: instausername,
          instalink: instalink,
        }
      );
      if (responseRequest.data.status == 200) {
        toast.success("Request Success", {
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
        toast.error("Something went wrong", {
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
      toast.error("Something went wrong", {
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
          <div className="flex flex-col space-y-4 flex-1 xl:mx-8 ">
            <div className="flex flex-col space-y-3 pt-12">
              <div className="flex items-center justify-start gap-2">
                <h1 className="text-2xl font-bold capitalize">
                  Request free Entries
                </h1>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-black text-sm xl:text-md special:text-xl capitalize">
                Instagram Username
              </p>
              <div className="w-full relative flex items-center">
                <input
                  className="bg-[#ECECEC] w-full rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                  placeholder="@"
                  type="text"
                  value={instausername}
                  onChange={(e) => setInstausername(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="text-black text-sm xl:text-md special:text-xl">
                Instagram Post Link
              </p>
              <div className="w-full relative flex items-center">
                <input
                  className="bg-[#ECECEC] w-full rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                  placeholder="http://"
                  type="text"
                  value={instalink}
                  onChange={(e) => setInstalink(e.target.value)}
                />
              </div>
            </div>
            <div
              className="bg-black py-2 text-center rounded-xl cursor-pointer hover:bg-black/75 md:w-1/2 w-full ml-auto"
              onClick={() =>
                setRequest({
                  instausername,
                  instalink,
                })
              }
            >
              <p className="text-white font-semibold">Request</p>
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <motion.img
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 80, opacity: 1 }}
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-3/4"
                  src={MainCar}
                  alt="main"
                />
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

export default RequestEntries;
