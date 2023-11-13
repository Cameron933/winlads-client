import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import backgroundcar from "../../assets/images/background/Background-car.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { carAnimation } from "../../animation/animation";
import HiddenCar from "../../assets/images/hiddenCar.png";
import { useNavigate } from "react-router-dom";

// import "./news.css";

function News() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>{isLoading?(<Loader />):(<div className="flex relative max-w-[2048px] mx-auto">
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
            
            <div className="flex flex-row items-center bottom-0  relative h-[450px]">
              <img src={HiddenCar} alt="hidden-car" className="w-84 h-48" />

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

        <div className="flex flex-col gap-8 w-full h-[550px] sm:h-[500px] md:h-[460px]   bg-notice-inner ">
          <div className="flex flex-col">
            <p className="font-bold text-3xl xl:text-4xl ">Winland News</p>
            <p className="text-xs sm:text-sm md:text-lg font-semibold">
              14m ago <br /> Europe
            </p>
          </div>

          <p className="text-lg xl:text-5xl md:text-4xl">
            Weekly Market Highlights - TradFi adoption takes spotlight
          </p>

          <div className="lg:ml-5">
            <p>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </p>
            <p>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </p>
            <p>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </p>
          </div>
        </div>
        <GucciCard />
      </div>
    </div>
  </div>)}</>
      
   
  );
}

export default News;
