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
import SmallGoldCard from "../../components/GoldCard/SmallGoldCard";
import SearchField from "../../components/SearchField/SearchField";

// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import {UserData} from "../../Data.js"
// import LineChart from '../../components/LineChat/LineChat'
const itemsPerPage = 4;
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const cookies = new Cookies(null, { path: "/" });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = 18; // Set the total number of items here
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

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
        <div className="flex relative mx-auto min-h-screen">
          {/* side-nav */}

          <SideNav screen="full" />

          {/* home-content */}
          <div className="flex flex-col xl:flex-col flex-1 mx-5 gap-5">
            {/* <div className="flex flex-row">

            </div>
            <div className="flex flex-row">
              
            </div> */}
            {/* left side */}
            <div className="flex flex-col flex-1 ">
              <div className="visible xl:hidden space-y-4">
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
                <div>
                  <p className="text-2xl font-semibold">Next Giveaways</p>
                  <div className="flex flex-col gap-1">
                    {Array.from({ length: totalItems }).slice(startIndex, endIndex).map((_, index) => (
                      <DashboardVehicleCard key={startIndex + index} />
                    ))}
                  </div>
                  <div className="pagination-container text-xl font-semibold">
                    <button className="pagination-button" onClick={handlePrevPage} disabled={currentPage === 1}>
                      {'<< Prev'}
                    </button>
                    <span className="pagination-display">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
                      {'Next >>'}
                    </button>
                  </div>
                </div>
                {/* <div className="flex xl:flex-row gap-1">
                    <DashboardVehicleCard />
                    <DashboardVehicleCard />
                  </div> */}
              </div>
              <div className="hidden xl:flex flex-col space-y-4 items-end">
                <div className="bg-black rounded-b-3xl space-y-4 relative w-web">
                  {/* <div className="flex flex-row items-center bg-[#333333] gap-4 mx-5 rounded-full px-4 mt-5">
                    <img src={Spicker} alt="" className="w-8 h-8" />
                    <span className="text-sm text-white">
                      Your golden card is about to expire in 30 days. Renew now!
                    </span>
                  </div> */}
                  <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="col-span-1">
                      <SearchField />
                    </div>
                    <div className="col-span-1">
                      <TopNav textColor={"white"} />
                    </div>
                  </div>

                  <div className="absolute left-4 top-20 space-y-8">
                    <div className="flex flex-col space-y-2">
                      <p className="text-[#22CCEE] text-2xl font-semibold">Earning Balance</p>
                      <p className="text-4xl text-white">$0</p>
                    </div>
                    <SmallGoldCard />

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
                <div className="flex flex-col space-y-2 w-full xl:w-web">
                  <p className="text-xl font-semibold">Next Giveaways</p>
                  <div className="flex flex-col xl:flex-row items-center gap-1">
                    {Array.from({ length: totalItems }).slice(startIndex, endIndex).map((_, index) => (
                      <DashboardVehicleCard key={startIndex + index} />
                    ))}
                  </div>
                  <div className="pagination-container text-xl font-semibold">
                    <button className="pagination-button" onClick={handlePrevPage} disabled={currentPage === 1}>
                      {'<< Prev'}
                    </button>
                    <span className="pagination-display">{`Page ${currentPage} of ${totalPages}`}</span>
                    <button className="pagination-button" onClick={handleNextPage} disabled={currentPage === totalPages}>
                      {'Next >>'}
                    </button>
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
              {/* <div className="hidden xl:flex invisible lg:visible pt-5">
                <TopNav />
              </div> */}

              <div className="side-bg"></div>
              <div className="graph-section ">
                {/* <CustomChart height={300} /> */}
                <div className="xl:pt-16 invisible xl:flex margin-10 gap-1 special:pt-16 visible lg:pt-16">
                  <DashboardVehicleCard />
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
