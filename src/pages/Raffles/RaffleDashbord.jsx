import RaffleDashboardComponent from "../../components/RaffleComponent/RaffleDashboardComponent";
import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import HiddenCar from "../../assets/images/hiddenCar.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import EarningCard from "../../components/EarningCard/EarningCard";
import Chart from "../../assets/images/rafflesImages/Chart.png";
import { Link } from "react-router-dom";
import BgBorder from "../../assets/images/HomesideBg.png";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomChart from "../../components/chart/CustomChart";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";

function RaffleDashbord() {
  const [raffles, setRaffles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const navigate = useNavigate();
  const currentUserValidation = async () => {
    if (await validateCurrentUser()) {
      console.log("Session OK");
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    //currentUserValidation();
    // getRaffles();
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
        <div className="flex relative  max-w-[2048px] mx-auto min-h-screen">
          {/* side-nav */}

          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
            {/* left side */}
            <div className="flex flex-col flex-1 ">
              <div className="visible lg:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
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
                  <div className="flex flex-row items-center bg-[#333333] gap-4 mx-5 rounded-full px-4 mt-5">
                    <img src={Spicker} alt="" className="w-8 h-8" />
                    <span className="text-sm text-white">
                      Your golden card is about to expire in 30 days. Renew now!
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-10 bottom-0">
                    <img
                      src={HiddenCar}
                      alt="hidden-car"
                      className="w-84 h-48"
                    />

                    <motion.img
                      initial={carAnimation.initial}
                      animate={carAnimation.animate}
                      transition={carAnimation.transition}
                      src={MainCar}
                      alt="main"
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

            {/* right-side */}
            <div className="flex flex-col flex-1">
              <div className="invisible lg:visible pt-5">
                <TopNav />
              </div>

              <div className="side-bg"></div>

              <RaffleDashboardComponent />

              <div className="flex flex-col gap-4 lg:flex-row items-center">
                <div className="flex-1 w-full">
                  <CustomChart height={300} />
                </div>
                <div className="w-full lg:w-1/2">
                  <GucciCard />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RaffleDashbord;
