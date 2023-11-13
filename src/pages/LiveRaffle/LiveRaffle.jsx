import SideNav from "../../components/SideNav/SideNav";
import liveBackground from "../../assets/images/rafflesImages/LiveBackground.png";
import cutIcon from "../../assets/images/rafflesImages/cutIcon.png";
import displayicon from "../../assets/images/rafflesImages/displayicon.png";
import soundicon from "../../assets/images/rafflesImages/soundIcon.png";
import ChartDark from "../../assets/images/rafflesImages/ChartDark.png";
import EarningCard from "../../components/EarningCard/EarningCard";
import max from "../../assets/images/rafflesImages/max.png";
import Live from "../../assets/images/live.png";
import CustomChart2 from "../../components/chart/CustomChart2";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";

function LiveRaffle() {
  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleString();

  const [isLoading, setIsLoading] = useState(true);

  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);


  return (
    <>{isLoading?(<Loader/>):( <div
      className="flex relative h-screen"
      style={{
        backgroundImage: `url(${liveBackground})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SideNav screen="screen" />

      <div className="flex flex-col xl:mx-10 md:mx-5 w-full  relative ">
        <div>
          <img src={Live} alt="" className="absolute right-[2%] top-[2%] w-[60px] sm:w-[65px] lg:w-[70px] xl:w-[75px]" />
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-[30%] sm-[20%] md:mt-[10%] cursor-pointer">
          <img src={max} alt="" className="w-20 sm:w-24" />
          <div className="text-white text-3xl font-extrabold">Lotto MAX</div>
        </div>

        <div className="absolute bottom-[15%] lg:bottom-[5%] right-0 flex 2xl:flex-row flex-col items-center justify-center lg:justify-between w-full lg:px-25 2xl:px-36 ">
          <div className=" hidden 2xl:flex mt-[-40px] ">
            <EarningCard />
          </div>

          <div className="flex flex-col items-center gap-3 justify-center ">
            <div className="flex flex-row justify-between items-center gap-4 xl:gap-6">
              <img
                src={soundicon}
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-105"
              />
              <img
                src={displayicon}
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-105"
              />
              <img
                src={cutIcon}
                alt=""
                className="w-8 h-8 sm:w-10 sm:h-10 cursor-pointer hover:scale-105"
              />
            </div>
            <div
              className="rounded-full px-6 pb-1 pt-3 cursor-pointer"
              style={{
                background:
                  "linear-gradient(98.92deg, #37DBFF 45%, #00529D 83%)",
              }}
            >
              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
                <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
                  <div className="text-white font-bold rounded-full bg-[#157D98] xl:h-11 xl:w-11 sm:h-9 sm:w-9 h-6 w-6 text-sm sm:text-base items-center flex justify-center">
                    R
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 sm:h-9 sm:w-9 h-6 w-6 text-sm sm:text-base  rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    14
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 sm:h-9 sm:w-9 h-6 w-6 text-sm sm:text-base rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    34
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 sm:h-9 sm:w-9 h-6 w-6 text-sm sm:text-base rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    ?
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 sm:h-9 sm:w-9 h-6 w-6 text-sm sm:text-base rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    ?
                  </div>
                </div>
                <p className="lg:text-sm text-xs text-center font-semibold sm:font-bold text-black">
                  Brisko - 2042 | 2023-SEP-17 TUESDAY
                </p>
              </div>
            </div>
          </div>

          <div className="hidden 2xl:flex mt-[-40px]">
            <CustomChart2 height={300} />
          </div>
        </div>
      </div>
    </div>)}</>
   
  );
}

export default LiveRaffle;

/* <div className="	">
          <div className="bg-gradient-to-br from-[#37DBFF] to-[#00529D] p-4 rounded-2xl">
            <div className="">
              <div className="flex justify-center items-center gap-4 px-3 py-3 ">
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#157D98] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
                  value=" R "
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
                  value="14"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
                  value="34"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="38"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="78"
                  disabled
                  readOnly
                />
              </div>
              <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
                {formattedDate}
              </p>
            </div>
          </div>
        </div> */
