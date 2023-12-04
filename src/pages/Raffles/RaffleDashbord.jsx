import RaffleDashboardComponent from "../../components/RaffleComponent/RaffleDashboardComponent";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import TopNav from "../../components/TopNav/TopNav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import Calendar from "react-calendar";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import six from "../../assets/images/rafflesImages/six4.png";
import RedDot from "../../assets/images/RedDot.png";
import { GoQuestion } from "react-icons/go";
import SearchField from "../../components/SearchField/SearchField";
import { LuHistory } from "react-icons/lu";

import BG from "../../assets/images/HomesideBg.png";

function RaffleDashbord() {
  const [raffles, setRaffles] = useState([]);
  const [value, onChange] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK");
    } else {
      // navigate("/login");
    }
  };
  useEffect(() => {
    currentUserValidation();
    getRaffles();
  }, []);

  const getRaffles = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffles`)
      .then((response) => {
        console.log(response.data.data);
        setRaffles(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-row justify-between min-h-screen">
          <SideNav screen="screen" />
          <div className="flex-1">
            {/* home-content */}
            <div className="flex flex-col xl:px-6 px-4 special:px-12 xl:space-y-16 special:space-y-24 space-y-8">
              <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:items-center xl:gap-8 space-y-4 xl:space-y-0">
                {/* <div className="side-bg" style={{ height: "500px" }}></div> */}
                {/* left side */}
                <div className="flex flex-col flex-1">
                  <div className="visible xl:hidden space-y-4">
                    <div className="bg-black rounded-b-3xl py-4">
                      <TopNav textColor={"white"} />
                      <div className="pt-10">
                        <img className="" src={MainCar} alt="main" />
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 xl:pt-0 pb-4 xl:pb-0">
                    <SearchField />
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row lg:flex-row lg:mt-10 xl:items-center">
                    <Link
                      to=" /history"
                      className="text-3xl flex justify-end xl:hidden md:hidden"
                    >
                      <LuHistory className="hover:animate-spin" />
                    </Link>
                    <Calendar
                      value={value}
                      onChange={onChange}
                      className="flex-1"
                    />
                    <div className="flex flex-col flex-1 xl:space-y-24 md:space-y-24 space-y-0">
                      <Link
                        to=" /history"
                        className="text-3xl xl:flex md:flex justify-end hidden"
                      >
                        <LuHistory className="hover:animate-spin special:w-16 special:h-16 2xl:w-12 2xl:h-12" />
                      </Link>

                      <Link to="/live-raffle">
                        <div
                          className="flex-col rounded-3xl px-2 special:px-4 py-1 space-y-2 flex-1 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
                          style={{
                            background:
                              "linear-gradient(98.92deg, #E9BA0D 45%, #000000 83%)",
                          }}
                        >
                          <div className="flex flex-row justify-between items-center">
                            <img
                              src={Jeep}
                              alt=""
                              className="flex w-36 special:w-96 2xl:w-36"
                            />
                            <div>
                              <div className="justify-end flex">
                                <div className="flex-col flex">
                                  <img
                                    src={six}
                                    alt=""
                                    className="w-12 special:w-36 2xl:w-16"
                                  />

                                  <div className="flex-row flex justify-end gap-1">
                                    <p className="text-white text-xs uppercase 2xl:text-sm special:text-lg">
                                      live
                                    </p>
                                    {/* <img
                                      src={RedDot}
                                      alt=""
                                      className="w-1.5 h-1 flex flex-col justify-start items-start"
                                    /> */}
                                    <span className="relative flex h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 flex-col justify-start items-start">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 special:h-3.5 special:w-3.5 2xl:h-2.5 2xl:w-2.5 bg-red-600"></span>
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex text-end flex-col z-10">
                                <p className="text-white font-bold xl:text-xs text-xs special:text-2xl 2xl:text-sm">
                                  1991 Land Rover
                                  <br /> Defender 110
                                </p>
                                <p className="text-xs text-white special:text-xl 2xl:text-sm">
                                  2023-SEP-19 TUESDAY
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-3 px-5 items-center">
                            <div className="col-span-2 flex justify-end gap-2 z-10">
                              <p className="text-[#4FC8E8] font-bold">R</p>
                              <p className="text-white font-bold">14</p>
                              <p className="text-white font-bold">34</p>
                              <p className="text-white font-bold">38</p>
                              <p className="text-white font-bold">76</p>
                            </div>
                            <div className="col-span-1 justify-end flex">
                              <GoQuestion />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* <GucciCard /> */}
                </div>

                {/* right-side */}
                <div className="flex-col flex-1 space-y-4 hidden xl:flex">
                  <div className=" space-y-4">
                    <div className="bg-black rounded-b-[50px] py-4">
                      <TopNav textColor={"white"} />
                      <div className="pt-10">
                        <motion.img
                          initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                          animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                          transition={{ type: "tween", duration: 1, delay: 1 }}
                          className="w-full"
                          src={MainCar}
                          alt="main"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <RaffleDashboardComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RaffleDashbord;
