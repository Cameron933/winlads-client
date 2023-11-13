import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import NewsListProps from "../../components/NewsList/NewsListProps";
import EarningCard from "../../components/EarningCard/EarningCard";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Newslist() {

  const [isLoading, setIsLoading] = useState(true);
 

   // set loading
   useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>{isLoading ? ( <Loader />):(<div className="flex relative max-w-[2048px] mx-auto">
    {/* side-nav */}

    <SideNav screen="full" />

    {/* home-content */}
    <div className="flex flex-col lg:flex-row  flex-1 mx-5 gap-5">
      {/* left side */}
      <div className="flex flex-col flex-1 gap-5 order-2 lg:order-1">
        <NewsListProps />
        <GucciCard />
      </div>

      {/* right-side */}
      <div className="flex flex-col flex-1 order-1 lg:order-2">
          <div className="visible lg:hidden space-y-4">
            <div className="bg-black rounded-b-3xl py-4">
              <div className="pt-5">
                <TopNav textColor={"white"} />
              </div>
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
              <div className="pt-5">
                <TopNav textColor={"white"} />
              </div>
              <div className="flex flex-row items-center bottom-0  relative h-[450px]">
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
    </div>
  </div>)}</>
      
  );
}

export default Newslist;
