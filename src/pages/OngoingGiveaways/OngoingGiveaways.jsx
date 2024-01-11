import React, { useState, useEffect } from "react";
import BG from "../../assets/images/HomesideBg.png";
import TopNav from "../../components/TopNav/TopNav";
import MainCar from "../../assets/images/MainCar.png";
import SearchField from "../../components/SearchField/SearchField";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config.js";
import User from "../../assets/images/user4.png";
import { motion } from "framer-motion";
import NoLiveCard from "../../components/Live/NoLiveCard.jsx";
import LiveCard from "../../components/Live/LiveCard.jsx";
import axios from "axios";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import ItemLoader from "../../components/Loader/ItemLoader";
import Cookies from "universal-cookie";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";

const OngoingGiveaways = () => {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    aspectRatio: "16/9",
  };

  const [userImage, setUserImage] = useState("");
  const [valUser, setValUser] = useState({});
  const [liveLink, setLiveLink] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [giveaways, setGiveaways] = useState([]);
  const [selectGiveawayId, setSelectGiveawayId] = useState("");
  const [selectGiveawayName, setSelectGiveName] = useState("");
  const [selectPayment, setSelectPayment] = useState(false);
  const [price, setPrice] = useState("");
  const [sortedGiveaways, setSortedGiveaways] = useState([]);
  const cookies = new Cookies(null, { path: "/" });
  const [initialLength, setInitSize] = useState(8);

  useEffect(() => {
    const sortedArray = [...giveaways];
    sortedArray.sort(
      (a, b) => new Date(a.startingtime) - new Date(b.startingtime)
    );
    setSortedGiveaways(sortedArray);
    checkCoupen();
  }, [giveaways]);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getGiveaways(validator.user.uid);
      // getRaffleCount(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  const getGiveaways = async (valuid) => {
    await axios
      .get(
        `${import.meta.env.VITE_SERVER_API}/raffleRoundsOngoing`
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

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }

  const checkCoupen = () => {
    const checkCode = cookies.get("COUPEN");
    if (checkCode === "WINFREE") {
      // REMOVED THE COOKIE FOR AVOID STUCK IN ENTRIES PAGE,:)
      cookies.remove("COUPEN");
      navigate("/requestEntries");
    }
  };

  return (
    <>
      <div className="flex flex-col xl:px-6 px-4 special:px-12 special:space-y-24 space-y-8 overflow-hidden relative">
        <div className="xl:flex xl:flex-row flex-col xl:justify-between xl:gap-4 space-y-4 xl:space-y-0">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-10 w-72 xl:w-96 md:w-96 special:w-1/4 2xl:w-1/4 special:top-40 opacity-60"
          />
          <div className="flex flex-col flex-1">
            <div className="block xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>
            </div>
            <div className="flex flex-col 2xl:space-y-8 space-y-6 special:space-y-12">
              <div className="mt-4 xl:pt-0 pb-4 xl:pb-0">
                <SearchField />
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col space-y-2 special:space-y-8 flex-1">
                  <div className="flex flex-row items-center gap-2 special:gap-4">
                    {userImage ? (
                      <div className="w-12 h-12 special:w-36 special:h-36 rounded-full aspect-square">
                        <img
                          src={userImage}
                          className="w-full h-full object-cover"
                          alt="user"
                        />
                      </div>
                    ) : (
                      <img
                        src={User}
                        alt=""
                        className="w-12 h-12 special:w-36 special:h-36"
                      />
                    )}

                    <div className="flex flex-col space-y-1">
                      <p className="font-bold special:text-4xl">
                        Earning Balance
                      </p>
                      <p className="special:text-6xl">
                        $&nbsp;{valUser.balance || "0.00"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full">
                  <iframe
                    title="YouTube Video"
                    src="https://player.vimeo.com/video/899812267?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBorder="0"
                    className="w-full"
                    allow="autoplay; fullscreen; picture-in-picture;muted"
                    style={iframeStyle}
                  ></iframe>
                </div>
                {liveLink ? (
                  <Link to="/live">
                    <LiveCard />
                  </Link>
                ) : (
                  // <NoLive />
                  <NoLiveCard />
                )}
              </div>
            </div>
          </div>
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className="bg-black rounded-b-[50px] py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <motion.img
                  initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                  animate={{ x: 60, opacity: 1 }} // Move and fade in when in view
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-3/4"
                  src={MainCar}
                  alt="main"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 special:space-y-6 2xl:space-y-4">
          <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl special:text-4xl">
            Ongoing Giveaways
          </p>
          {loading ? (
            <div className="flex justify-center">
              <ItemLoader />
            </div>
          ) : sortedGiveaways.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {sortedGiveaways.slice(0, initialLength).map((giveaway, key) => (
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
                  eligeble={true}
                  oneOffPackage={giveaway.raffle?.name === "Vehicle" ? true : false}
                  onButton={() => {
                    handleButton({
                      id: giveaway?._id,
                      price: giveaway?.price,
                      name: giveaway?.name,
                    });
                  }}
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
            <div className="flex flex-col items-center space-y-2 pt-12">
              <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-12 2xl:h-12 special:w-24 special:h-24" />
              <p className="font-bold text-2xl 2xl:text-2xl special:text-6xl">
                No More Giveaways
              </p>
            </div>
          )}
          {selectPayment && (
            <SelectRafflePaymentMethod
              onClose={() => setSelectPayment(false)}
              userId={valUser.uid}
              giveawayId={selectGiveawayId}
              price={price}
              name={selectGiveawayName}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default OngoingGiveaways;
