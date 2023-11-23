import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import SubscribeCard from "../../components/SubscribeCard/SubscribeCard";
import { motion } from "framer-motion";
import Loader from "../../components/Loader/Loader";

import "./subscription.css";
import { useEffect, useState } from "react";

function Subscription() {

  const [isLoading, setIsLoading] = useState(true);

     // set loading
     useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);


  return (
   <>
   {isLoading?(<Loader/>):(<div className="flex relative min-h-screen">
        <SideNav screen="screen" />

        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
          {/* left side */}
          <div className="flex flex-col space-y-4 flex-1">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                <div className="lg:w-2/3">
                  <GoldCard />
                </div>
                <div>
                  <EarningCard />
                </div>
              </div>
            </div>

            <SubscribeCard />
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
              <div className="lg:w-2/3">
                <GoldCard />
              </div>

              <div>
                <EarningCard />
              </div>
            </div>
          </div>
        </div>
      </div>)}
   </>
  );
}

export default Subscription;
