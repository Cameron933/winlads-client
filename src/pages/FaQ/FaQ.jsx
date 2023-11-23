import FaQComponent from "../../components/FaQComponent/FaQComponent";
import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import HiddenCar from "../../assets/images/hiddenCar.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import Chart from "../../assets/images/Chart01.png";
import CustomChart from "../../components/chart/CustomChart";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";

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
        <div className="flex relative max-w-[2048px] mx-auto min-h-screen">
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
                  <div className="flex flex-row items-center bottom-0  relative h-[500px]">
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

            {/* right-side */}
            <div className="flex flex-col flex-1 gap-5">
              <div className="invisible lg:visible pt-5">
                <TopNav />
              </div>

              <div className="side-bg " style={{ height: "500px" }}></div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <CustomChart height={250} />
                </div>
                <div className="flex-1">
                  <GucciCard />
                </div>
              </div>

              <FaQComponent />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FaQ;
