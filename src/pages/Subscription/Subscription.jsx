import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import { FiLoader } from "react-icons/fi";

import "./subscription.css";
import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import ChoosePlane from "../../components/SubscribeCard/ChoosePlane";

function Subscription() {
  const [isLoading, setIsLoading] = useState(true);
  const [planes, setPlanes] = useState([]);
  const [isYearly, setYearly] = useState(false);
  const [choosePlane, setChoosePlane] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleButton = () => {
    setChoosePlane(true);
  };

  const handleYear = (val = false) => {
    setYearly(val);
  };

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // currentUserValidation();
    getPlanes();
  }, []);

  const getPlanes = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getSubscriptionPlans`)
      .then((response) => {
        console.log(response.data.data);
        setPlanes(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative min-h-screen">
          <SideNav screen="screen" />

          {/* home-content */}
          <div className="xl:flex xl:flex-row flex-col xl:justify-between px-4 special:px-12 2xl:px-8 flex-1 xl:gap-4 special:gap-8 2xl:gap-6 space-y-4 xl:space-y-0">
            {/* left side */}
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
              <SearchField />
              <p className="font-bold text-3xl special:text-6xl 2xl:text-4xl">
                Choose Your Plan
              </p>
              {loading ? (
                <div className="flex flex-row justify-center gap-2 items-center">
                  <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                    Loading Subscriptions Planes
                  </p>
                  <FiLoader className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24 animate-spin" />
                </div>
              ) : planes.length > 0 ? (
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row justify-between bg-black items-center rounded-full px-1 py-1 special:py-3 2xl:py-2">
                    <button
                      type="button"
                      onClick={() => handleYear(false)}
                      className={`${
                        isYearly ? "bg-black text-white" : "bg-white text-black"
                      } text-xs text-semibold xl:text-sm md:text-sm text-center special:text-2xl 2xl:text-xl rounded-full py-4 flex-1`}
                    >
                      Monthly
                    </button>

                    <button
                      type="button"
                      onClick={() => handleYear(true)}
                      className={`${
                        isYearly ? "bg-white text-black" : "bg-black text-white"
                      } text-xs text-semibold xl:text-sm md:text-sm text-center special:text-2xl 2xl:text-xl rounded-full py-4 flex-1`}
                    >
                      Yearly (Save2.5%)
                    </button>
                  </div>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 special:gap-6 2xl:gap-4 ${
                      choosePlane == "true ? bg-white/50"
                    }`}
                  >
                    {planes.map((plane, key) => (
                      <SubscribeCard
                        key={key}
                        name={plane.name}
                        price={isYearly ? plane.annualy : plane.monthly}
                        desc1={plane.desc1}
                        desc2={plane.desc2}
                        desc3={plane.desc3}
                        bgColor={
                          plane.name == "Standard"
                            ? "black"
                            : "black" | (plane.name == "Bronz")
                            ? "gradient-to-br"
                            : "black" | (plane.name == "Silver")
                            ? "gradient-to-br"
                            : "black" | (plane.name == "Gold")
                            ? "gradient-to-br"
                            : "black"
                        }
                        gradientFrom={
                          plane.name == "Bronz"
                            ? "from-red-400"
                            : "black" | (plane.name == "Silver")
                            ? "from-gray-200"
                            : "black" | (plane.name == "Gold")
                            ? "from-[#FFDF37]"
                            : "from-[#FFDF37]"
                        }
                        gradientTo={
                          plane.name == "Bronz"
                            ? "to-white"
                            : "black" | (plane.name == "Silver")
                            ? "to-white"
                            : "black" | (plane.name == "Gold")
                            ? "to-[#9D7C00]"
                            : "to-[#9D7C00]"
                        }
                        textColor={
                          plane.name == "Standard"
                            ? "white"
                            : "white" | (plane.name == "Bronz")
                            ? "black"
                            : "black"
                        }
                        borderColor={
                          plane.name == "Standard"
                            ? "white"
                            : "white" | (plane.name == "Bronz")
                            ? "black"
                            : "black"
                        }
                        buttonColor={
                          plane.name == "Standard" ? "white" : "black"
                        }
                        buttonText={
                          plane.name == "Standard" ? "black" : "white"
                        }
                        buttonHover={
                          plane.name == "Standard" ? "black" : "white"
                        }
                        buttonHoverText={
                          plane.name == "Standard" ? "white" : "black"
                        }
                        hoverButtonBorder={
                          plane.name == "Standard" ? "white" : "black"
                        }
                        raffleCount={
                          isYearly
                            ? plane.raffle_count_annual
                            : plane.raffle_count
                        }
                        onButtonClick={handleButton}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center space-y-2">
                  <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
                  <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                    No More Subscriptions Planes
                  </p>
                </div>
              )}

              {choosePlane && (
                <div className="absolute left-60 right-0 top-60 bottom-0 flex">
                  {" "}
                  <ChoosePlane onClose={() => setChoosePlane(false)} />
                </div>
              )}
            </div>

            {/* right-side */}
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
          </div>
        </div>
      )}
    </>
  );
}

export default Subscription;
