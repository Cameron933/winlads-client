import NoticeComponent from "../../components/NoticeComponent/NoticeComponent";
import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import HiddenCar from "../../assets/images/hiddenCar.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";

import FaQComponent from '../../components/FaQComponent/FaQComponent';
import SearchField from "../../components/SearchField/SearchField";
function FaQ() {
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex relative min-h-screen">
          <SideNav screen="screen" />

          {/* home-content */}
          <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
            {/* left side */}
            <div className="side-bg" style={{ height: "500px" }}></div>
            <div className="flex flex-col space-y-4 flex-1">
              <div className="visible xl:hidden space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <img className="" src={MainCar} alt="main" />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                  <div className="w-full">
                    <GoldCard />
                  </div>
                </div>
              </div>
              <SearchField/>
              <div className="mt-10">
              <FaQComponent />
              </div>

              {/* <GucciCard /> */}
            </div>

            {/* right-side */}
            <div className="flex-col flex-1 space-y-4 hidden xl:flex">
              <div className=" space-y-4">
                <div className="bg-black rounded-b-3xl py-4">
                  <TopNav textColor={"white"} />
                  <div className="pt-10">
                    <motion.img
                      initial={{ x: 80, opacity: 0 }} // Initial position and opacity (hidden)
                      animate={{ x: 0, opacity: 1 }} // Move and fade in when in view
                      transition={{ type: "tween", duration: 1, delay: 1 }}
                      className=""
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

export default FaQ;
