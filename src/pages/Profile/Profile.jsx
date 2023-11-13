import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import EarningCard from "../../components/EarningCard/EarningCard";
import backgroundcar from "../../assets/images/background/Background-car.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";

const Profile = () => {
  const cookies = new Cookies(null, { path: "/" });
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const id = cookies.get("wr_token");
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUserData(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
  
    <>
    {isLoading ? (<Loader/>): (<div className="flex relative max-w-[2048px] mx-auto">
        {/* side-nav */}
        <SideNav screen="full" />

        {/* home-content */}
        <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
          {/* left side */}
          <div className="flex flex-col flex-1 gap-5" style={{ backgroundImage: `url(${backgroundcar})`, backgroundRepeat:'no-repeat',backgroundPositionY:'bottom',backgroundSize:'contain' }}>
            <div className="flex flex-col space-y-3">

              <div className="block lg:hidden  my-5">
                <TopNav textColor={"black"} />
              </div>

              <div className="flex justify-center">
                <img src={User} alt="" />
              </div>
              <div className="flex flex-col gap-2 px-4 sm:px-10 lg:px-12">
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    User Id
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter User Name"
                    type="text"
                    value={userData?._id}
                    disabled
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    First Name
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter First Name"
                    type="text"
                    value={userData?.name}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Last Name
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter Last Name"
                    type="text"
                    value={userData?.name}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Valid Email
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter Valid EMail"
                    type="text"
                    value={userData?.email}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Phone Number
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter Phone Number"
                    type="number"
                    value={userData?.mobile}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Passport Number
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter Passport Number"
                    type="text"
                    value={userData?.passport}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Date of Birth
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                    placeholder="Enter Date of Birth"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Postal Address
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Postal Address"
                    type="text"
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Tin
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Tin"
                    type="text"
                    value={userData?.tin}
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md ml-2 font-semibold">
                    Reference Id
                  </p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Reference Id"
                    type="text"
                    value={userData?.rafflesId}
                  ></input>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center  items-start justify-start gap-4 pt-4 ">
                  <div className="flex items-center lg:gap-6 gap-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 sm:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
                    >
                      <p className="text-black flex-1 w-full">
                        I agree with the terms of use
                      </p>
                    </label>
                  </div>
                  <div className="flex justify-center sm:justify-end  sm:w-[180px] w-full">
                    <button className="bg-[#4FC8E8] rounded-2xl px-12 py-1 font-semibold hover:shadow hover:text-white">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right-side */}
          <div className="flex flex-col flex-1 ">
            <div className="visible lg:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <div className="pt-5">
                  <div className="invisible lg:visible">
                    <TopNav textColor={"white"} />
                  </div>
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
                  <img src={HiddenCar} alt="hidden-car" className="w-84 h-48" />

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
      </div>)}
    </>
      

  );
};

export default Profile;
