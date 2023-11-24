import SideNav from "../../components/SideNav/SideNav";
import "./Dashboard.css";
import Spicker from "../../assets/images/spicker.png";
import HiddenCar from "../../assets/images/hiddenCar.png";
import MainCar from "../../assets/images/MainCar.png";
import Chart from "../../assets/images/Chart01.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import Cookies from "universal-cookie";
import { validateCurrentUser } from "../../utils/validateuser";
import CustomChart from "../../components/chart/CustomChart";
import { motion } from "framer-motion";
import { carAnimation } from "../../animation/animation";
import DashboardVehicleCard from "../../components/DashboardVehicleCard/DashboardVehicle";

// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import {UserData} from "../../Data.js"
// import LineChart from '../../components/LineChat/LineChat'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });
  // const currentUserValidation = async () => {
  //   const validator = await validateCurrentUser();
  //   if (validator.validatorBl) {
  //     console.log("Session OK", validator.user.balance);
  //     setValUser(validator.user);
  //   } else {
  //     navigate("/login");
  //   }
  // };
  // useEffect(() => {
  //   currentUserValidation();
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative  max-w-[2048px] mx-auto min-h-screen">
          {/* side-nav */}

          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex flex-col xl:flex-row flex-1 mx-5 gap-5">
            {/* <div className="flex flex-row">

            </div>
            <div className="flex flex-row">
              
            </div> */}
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

                {/* <div className="lg:w-2/3 md:w-1/2">
                  <GoldCard />
                </div>

                <EarningCard /> */}
                 <DashboardVehicleCard />
                  <DashboardVehicleCard />
              </div>
              <div className="hidden lg:flex flex-col space-y-4 items-end">
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
                <div className="flex flex-col space-y-1">
                  <p className="text-xl font-semibold">Next Giveaways</p>
                  <div className="flex flex-col xl:flex-row items-center gap-2">
                  <DashboardVehicleCard />
                  <DashboardVehicleCard />
                </div>
                </div>
               

                {/* <div className="lg:w-2/3 md:w-1/2">
                  <GoldCard />
                </div>
                <div className="hidden lg:block w-full">
                  <EarningCard balance={valUser.balance} />
                </div> */}
              </div>
            </div>

            {/* right-side */}
            <div className="flex flex-col flex-1">
              <div className="invisible lg:visible pt-5">
                <TopNav />
              </div>

              <div className="side-bg"></div>
              <div className="graph-section ">
                {/* <CustomChart height={300} /> */}
                <div className="xl:pt-16">
                  <DashboardVehicleCard />
                </div>
              </div>
              {/* <div className="lg:w-full md:w-1/2">
                <GucciCard />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
