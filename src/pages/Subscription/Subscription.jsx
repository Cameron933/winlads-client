import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import { motion } from "framer-motion";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";

import "./subscription.css";
import { useEffect, useState } from "react";
import SearchField from "../../components/SearchField/SearchField";
import ChoosePlane from "../../components/SubscribeCard/ChoosePlane";
import BG from "../../assets/images/HomesideBg.png";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import PlanBuyCard from "../../components/plancard/PlanBuyCard";
import FreeEntryCard from "../../components/FreeEntry/FreeEntryCard";
import FreeEntryCardDashboard from "../../components/FreeEntry/FreeEntryCardDashboard";

function Subscription() {
  const [planes, setPlanes] = useState([]);
  const [isYearly, setIsYearly] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isQuartly, setIsQuartly] = useState(false);
  const [choosePlane, setChoosePlane] = useState(false);
  const [loading, setLoading] = useState(true);

  const [selectedPlaneId, setSelectedPlaceId] = useState("");
  const [selectedPlanPrice, setSelectedPlanePrice] = useState("");

  const [selectedPlanName, setSelectedPlaneName] = useState("");
  const navigate = useNavigate();

  const [valUser, setValUser] = useState({});

  const handleButton = (id, price, name) => {
    setChoosePlane(true);
    setSelectedPlaceId(id);
    setSelectedPlanePrice(price);
    setSelectedPlaneName(name);
  };

  const handleYear = (val = false) => {
    setIsYearly(val);
  };

  const handleMonthly = () => {
    setIsMonthly(true);
    setIsQuartly(false);
    setIsYearly(false);
  };

  const handleQuatly = () => {
    setIsQuartly(true);
    setIsMonthly(false);
    setIsYearly(false);
  };

  const handleYearly = () => {
    setIsYearly(true);
    setIsMonthly(false);
    setIsQuartly(false);
  };

  useEffect(() => {
    currentUserValidation();
    getPlanes();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };

  const getPlanes = async () => {
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
      <div className="flex relative min-h-screen w-full">
        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between px-4 special:px-12 2xl:px-8 flex-1 xl:gap-4 special:gap-8 2xl:gap-6 space-y-4 xl:space-y-0">
          {/* left side */}
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-40 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-60 opacity-60 2xl:top-40"
          />
          <div className="flex flex-col space-y-4 flex-1 special:space-y-8 2xl:space-y-6 relative">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="w-full" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2 relative">
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>
            {/* <SearchField /> */}
            <p className="font-bold text-xl special:text-4xl 2xl:text-2xl">
              Choose Your Plan
            </p>
            {loading ? (
              <div className="flex justify-center">
                <ItemLoader />
              </div>
            ) : planes.length > 0 ? (
              <div className="flex flex-col space-y-4 ">
                <div className="flex flex-row justify-between bg-black items-center rounded-full px-1 py-1 special:py-2 special:px-2">
                  <button
                    type="button"
                    onClick={handleMonthly}
                    className={`${
                      isMonthly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Monthly
                  </button>

                  <button
                    type="button"
                    onClick={handleQuatly}
                    className={`${
                      isQuartly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Quartly (Save10%)
                  </button>

                  <button
                    type="button"
                    onClick={handleYearly}
                    className={`${
                      isYearly ? "bg-white text-black" : "bg-black text-white"
                    } text-[10px] text-semibold xl:text-sm md:text-sm text-center special:py-4 special:text-xl 2xl:text-lg rounded-full py-2 flex-1`}
                  >
                    Yearly (Save20%)
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
                      id={plane._id}
                      name={plane.name}
                      year={isYearly}
                      quartly={isQuartly}
                      month={isMonthly}
                      isPopular={plane.name == "Platinum" ? true : false}
                      price={
                        isYearly
                          ? plane.annualy
                          : "" | isQuartly
                          ? plane.price_id_semiannual
                          : "" | isMonthly
                          ? plane.price_id
                          : ""
                      }
                      // descList={Array.isArray(plane.desc) ? plane.desc : []}
                      descList={Array.isArray(plane.desc) ? plane.desc : []}
                      descL={
                        isYearly
                          ? Array.isArray(plane.desc)
                            ? plane.desc[2]
                            : []
                          : "" | isQuartly
                          ? Array.isArray(plane.desc)
                            ? plane.desc[1]
                            : []
                          : "" | isMonthly
                          ? Array.isArray(plane.desc)
                            ? plane.desc[0]
                            : []
                          : ""
                      }
                      desc1={plane.desc1}
                      desc2={plane.desc2}
                      desc3={plane.desc3}
                      color={plane.color}
                      colorFrom={plane.colorFrom}
                      bgColor={
                        plane.name == "Starter"
                          ? "[#808080]"
                          : "black" | (plane.name == "Boomer")
                          ? "[#366B71]"
                          : "black" | (plane.name == "Platinum")
                          ? "white"
                          : "black" | (plane.name == "Black")
                          ? "black"
                          : ""
                      }
                      gradientFrom={
                        plane.name == "Bronz"
                          ? "from-red-400"
                          : "black" | (plane.name == "Silver")
                          ? "from-gray-200"
                          : "black" | (plane.name == "Gold")
                          ? "from-[#FFDF37]"
                          : ""
                      }
                      gradientTo={
                        plane.name == "Bronz"
                          ? "to-white"
                          : "black" | (plane.name == "Silver")
                          ? "to-white"
                          : "black" | (plane.name == "Gold")
                          ? "to-[#9D7C00]"
                          : ""
                      }
                      textColor={plane.name == "Black" ? "white" : "black"}
                      cardBorderColor={
                        plane.name == "Black" ? "white" : "black"
                      }
                      borderColor={plane.name == "Black" ? "white" : "black"}
                      buttonColor={
                        plane.name == "Starter"
                          ? "black"
                          : "" | (plane.name == "Boomer")
                          ? "black"
                          : "" | (plane.name == "Platinum")
                          ? "black"
                          : "" | (plane.name == "Gold")
                          ? "black"
                          : "" | (plane.name == "Black")
                          ? "white"
                          : ""
                      }
                      buttonText={
                        plane.name == "Starter"
                          ? "white"
                          : "" | (plane.name == "Boomer")
                          ? "white"
                          : "" | (plane.name == "Platinum")
                          ? "white"
                          : "" | (plane.name == "Gold")
                          ? "white"
                          : "" | (plane.name == "Black")
                          ? "black"
                          : ""
                      }
                      buttonHover={
                        plane.name == "Black"
                          ? "black"
                          : plane.name == "Starter"
                          ? "white"
                          : plane.name == "Gold"
                          ? "white"
                          : plane.name == "Black"
                          ? "black"
                          : plane.name == "Boomer"
                          ? "white"
                          : "white"
                      }
                      buttonHoverText={
                        plane.name == "Black" ? "white" : "black"
                      }
                      hoverButtonBorder={
                        plane.name == "Black" ? "black" : "black"
                      }
                      raffleCount={
                        isYearly
                          ? plane.raffle_count_annual
                          : "" | isQuartly
                          ? plane.raffle_count_semiannual
                          : "" | isMonthly
                          ? plane.raffle_count
                          : ""
                      }
                      mPlanId={plane.subid}
                      qPlanId={plane.subidsemiannual}
                      yPlanId={plane.subidannual}
                      onButtonClick={() =>
                        handleButton(
                          isMonthly
                            ? plane.subid
                            : isQuartly
                            ? plane.subidsemiannual
                            : isYearly
                            ? plane.subidannual
                            : "",
                          // plane.desc[0].slice(0, 1),
                          isMonthly
                          ? plane.monthly
                          : isQuartly
                          ? plane.semiannualy
                          : isYearly
                          ? plane.annualy
                          : "",
                          plane.name,
                       
                        )
                      }
                      planeId={valUser.sub_id}
                    />
                  ))}
                  <div className=" flex justify-center items-center ">
                    <FreeEntryCardDashboard />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
                <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                  No More Subscriptions Plans
                </p>
              </div>
            )}

            {/* absolute xl:left-60 left-0 right-0 top-60 bottom-0 flex */}

            {choosePlane && (
              <PlanBuyCard
                onClose={() => setChoosePlane(false)}
                userId={valUser.uid}
                giveawayId={selectedPlaneId}
                price={selectedPlanPrice}
                name={selectedPlanName}
                planeId={selectedPlaneId}
              />
              // <div className="absolute bottom-0 top-0 left-0 right-0 z-10 bg-white/50">
              //   <div className="flex justify-center items-center 2xl:pt-80 xl:pt-60">
              //     <ChoosePlane
              //       onClose={() => setChoosePlane(false)}
              //       planeId={selectedPlaneId}
              //       userId={valUser.uid}
              //     />
              //   </div>
              // </div>
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
                    animate={{ x: 80, opacity: 1 }}
                    transition={{ type: "tween", duration: 1, delay: 1 }}
                    className="w-3/4"
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
    </>
  );
}

export default Subscription;
