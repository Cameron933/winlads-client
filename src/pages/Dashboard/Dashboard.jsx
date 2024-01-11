import "./Dashboard.css";
import MainCar from "../../assets/images/MainCar.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "../../components/TopNav/TopNav";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { motion } from "framer-motion";
import { carAnimation } from "../../animation/animation";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import SmallGoldCard from "../../components/GoldCard/SmallGoldCard";
import SearchField from "../../components/SearchField/SearchField";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import NewVeh from "../../assets/images/newVeh.png";

import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import BG from "../../assets/images/HomesideBg.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import Cookies from "universal-cookie";
import FreeEntries from "../../assets/images/freeEntries.png";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [giveaways, setGiveaways] = useState([]);
  const [raffleCount, setRaffleCount] = useState([]);
  const [selectGiveawayId, setSelectGiveawayId] = useState("");
  const [selectGiveawayName, setSelectGiveName] = useState("");
  const [price, setPrice] = useState("");
  const [selectPayment, setSelectPayment] = useState(false);
  const [initialLength, setInitSize] = useState(8);
  const cookies = new Cookies(null, { path: "/" });

  const [sortedGiveaways, setSortedGiveaways] = useState([]);

  useEffect(() => {
    const sortedArray = [...giveaways];
    sortedArray.sort(
      (a, b) => new Date(a.startingtime) - new Date(b.startingtime)
    );
    setSortedGiveaways(sortedArray);
    checkCoupen()
  }, [giveaways]);

  useEffect(() => {
    currentUserValidation();
    // if (cookies.get("selected-package-id")) {
    //   navigate("/subscription");
    // }
  }, [raffleCount]);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getGiveaways(validator.user.uid);
      getRaffleCount(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async (valuid) => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/raffleRoundsFuture?uid=${valuid}`
      )
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setGiveaways(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getRaffleCount = async (valuid) => {
    await axios
      .get(
        ` ${import.meta.env.VITE_SERVER_API}/getUserRafflesCount?uid=${valuid}`
      )
      .then((response) => {
        console.log(response.data, "countData");
        setRaffleCount(response?.data);
        setLoading(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setIsLoading(false);
      });
  };

  const handleButton = ({ id, price, name }) => {
    setSelectGiveawayId(id);
    setPrice(price);
    setSelectGiveName(name);
    setSelectPayment(true);
  };

  const handleSeeMore = (show) => {
    if (show) {
      setInitSize(giveaways.length);
    } else {
      setInitSize(8);
    }
  };

  const checkCoupen = () => {
    const checkCode = cookies.get("COUPEN")
    if(checkCode === "WINFREE") {
      // REMOVED THE COOKIE FOR AVOID STUCK IN ENTRIES PAGE,:)
      cookies.remove("COUPEN")
      navigate("/requestEntries")
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative mx-auto w-full overflow-hidden">
          {/* <SideNav screen="full" name={valUser.name} userId={valUser.uid} /> */}
          <div></div>
          {/* home-content */}
          <div className="flex flex-col xl:flex-col flex-1 px-4 gap-5">
            {/* left side */}
            <div className="flex flex-col flex-1 pb-2">
              <div className="block xl:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    {/* <motion.img
                      initial={carAnimation.initialMobile}
                      animate={{ x: 0, opacity: 1 }}
                      transition={carAnimation.transition}
                      className="w-4/5"
                      src={MainCar}
                      alt="main"
                    /> */}
                    <div className="flex justify-center px-2">
                    <div className="flex flex-col space-y-2">
                      <img src={FreeEntries} alt="" className="w-[600px]" />
                      <div className="pb-2">
                        <Link to="/requestEntries">
                          <button className="bg-[#F7B928] text-black rounded-lg py-1 w-64 hover:bg-[#F7B928]/75">
                            Request
                          </button>
                        </Link>
                      </div>
                    </div>
                    </div>
                     
                  </div>
                </div>
                <div className="left-4 top-20 space-y-4">
                  <div className="flex flex-col space-y-2">
                    <p className="text-[#22CCEE] text-lg font-semibold">
                      Earning Balance
                    </p>
                    <p className="text-3xl text-black">
                      <span className="text-base">$</span>&nbsp;
                      {typeof valUser.balance === "number"
                        ? valUser.balance.toFixed(2)
                        : "0.00"}
                    </p>
                  </div>
                  <SmallGoldCard />
                </div>
                <div>
                  <p className="text-xl font-semibold">Next Giveaways</p>
                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : sortedGiveaways.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                      {sortedGiveaways
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardVehicleCard
                            isSubscribed={valUser.subscripton}
                            key={key}
                            id={giveaway._id}
                            type={giveaway.raffle.type}
                            name={giveaway.name}
                            date={giveaway?.startingtime}
                            fromColor={giveaway.raffle?.color}
                            color={giveaway?.raffle?.color}
                            icon={giveaway.raffle?.image}
                            raffleimage={giveaway.raffle?.raffleimage}
                            onButton={() => {
                              handleButton({
                                id: giveaway?._id,
                                price: giveaway?.price,
                                name: giveaway?.raffle?.name,
                              });
                            }}
                            bgColor={giveaway.raffle?.color}
                          />
                        ))}
                      {giveaways.length > 8 &&
                        (initialLength == 8 ? (
                          <button
                            onClick={() => handleSeeMore(true)}
                            className="mt-10 flex items-center justify-center mx-auto gap-2 "
                          >
                            See More <FaAngleDoubleDown />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleSeeMore(false)}
                            className="mt-10 flex items-center justify-center mx-auto gap-2"
                          >
                            See Less <FaAngleDoubleUp />
                          </button>
                        ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2">
                      <MdOutlineDoNotDisturbOff className="w-8 h-8 2xl:w-12 2xl:h-12 special:w-16 special:h-16" />
                      <p className="font-bold text-xl 2xl:text-3xl special:text-4xl">
                        No More Giveaways
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden xl:flex flex-col space-y-4 items-end">
                <div className="bg-black rounded-b-3xl space-y-4 relative w-web">
                  <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="col-span-1 ">
                      <SearchField />
                    </div>
                    <div className="col-span-1  flex flex-col justify-center ">
                      <TopNav textColor={"white"} />
                    </div>
                  </div>
                  <div className="absolute left-4 top-20 space-y-8">
                    <div className="flex flex-col space-y-2">
                      <p className="text-[#22CCEE] text-lg font-semibold">
                        Earning Balance
                      </p>
                      <p className="text-3xl text-white">
                        <span className="text-base">$</span>&nbsp;
                        {typeof valUser.balance === "number"
                          ? valUser.balance.toFixed(2)
                          : "0.00"}
                      </p>
                    </div>
                    <SmallGoldCard />
                  </div>

                  <div className="flex justify-end">
                    <div className="flex flex-col space-y-2">
                      <img src={FreeEntries} alt="" className="w-[600px]" />
                      <div className="pb-2">
                        <Link to="/requestEntries">
                          <button className="bg-[#F7B928] text-black rounded-lg py-1 w-64 hover:bg-[#F7B928]/75">
                            Request
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* <motion.img
                    initial={carAnimation.initial}
                    animate={carAnimation.animate}
                    transition={carAnimation.transition}
                    src={MainCar}
                    alt="main"
                    className="w-[480px]"
                  /> */}
                </div>

                <div className="flex flex-col space-y-2 w-full xl:w-web pt-4">
                  <p className="text-2xl 2xl:text-2xl special:text-5xl font-semibold mb-2">
                    Ongoing Giveaways
                  </p>
                  {loading ? (
                    <div className="flex justify-center">
                      <ItemLoader />
                    </div>
                  ) : sortedGiveaways.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                      {sortedGiveaways
                        .slice(0, initialLength)
                        .map((giveaway, key) => (
                          <DashboardVehicleCard
                            isSubscribed={valUser.subscripton}
                            key={key}
                            type={giveaway.raffle.type}
                            id={giveaway._id}
                            name={giveaway.name}
                            date={giveaway?.endtime}
                            color={giveaway?.raffle?.color}
                            fromColor={giveaway.raffle?.color}
                            icon={giveaway.raffle?.image}
                            price={giveaway?.price}
                            raffleimage={giveaway.raffle?.raffleimage}
                            onButton={() => {
                              handleButton({
                                id: giveaway?._id,
                                price: giveaway?.price,
                                name: giveaway?.name,
                              });
                            }}
                          />
                        ))}
                      {/* {
                        giveaways.length > 7 && (initialLength == 7 ?
                          <button onClick={() => handleSeeMore(true)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                            See More
                          </button> :
                          <button onClick={() => handleSeeMore(false)}
                            className="flex flex-row justify-center items-center rounded-3xl 2xl:rounded-[30px] special:rounded-[40px] w-full py-2 shadow-lg hover:transition hover:duration-300 hover:ease-in-out hover:brightness-75 cursor-pointer bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                            See Less
                          </button>)
                      } */}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2 pt-12">
                      <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
                      <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                        No More Giveaways
                      </p>
                    </div>
                  )}
                  <div className="w-full text-center">
                    {giveaways.length > 8 &&
                      (initialLength == 8 ? (
                        <button
                          onClick={() => handleSeeMore(true)}
                          className="mt-10 flex items-center justify-center mx-auto gap-2"
                        >
                          See More <FaAngleDoubleDown />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSeeMore(false)}
                          className="mt-10 flex items-center justify-center mx-auto gap-2"
                        >
                          See Less <FaAngleDoubleUp />
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* right-side */}
            {/* <div className="flex flex-col flex-1"> */}
            <img
              src={BG}
              alt=""
              className="absolute right-0 -z-10 md:top-80 top-20 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-20 opacity-60 2xl:top-40 xl:top-40"
            />
            {/* <div className="graph-section "></div> */}
            {/* </div> */}
          </div>
        </div>
      )}
      {selectPayment && (
        <SelectRafflePaymentMethod
          onClose={() => setSelectPayment(false)}
          userId={valUser.uid}
          subPlane={valUser.subscripton}
          giveawayId={selectGiveawayId}
          price={price}
          name={selectGiveawayName}
        />
      )}
    </>
  );
};

export default Dashboard;
