import React from "react";
import TopNav from "../../components/TopNav/TopNav";
import { IoIosArrowBack } from "react-icons/io";
import BG from "../../assets/images/HomesideBg.png";
import winlad_car from '../../assets/images/Won/winlad_car.png'
import { useNavigate} from "react-router-dom";


const Won = () => {
    let navigate = useNavigate();
  return (
    <div className="flex items-stretch w-full py-4">
      <div className="w-full">
        <div className="flex flex-col xl:px-6 px-4 special:px-12 special:space-y-24 overflow-hidden">
          {/* left side */}
          <div className="flex flex-col flex-1 ">
            <div className="block xl:hidden space-y-4">
              <div className=" rounded-b-3xl py-4">
                <TopNav />
              </div>
            </div>
          </div>
          <div className="hidden xl:flex flex-col space-y-4 items-end">
            <div className=" rounded-b-3xl space-y-4 relative w-web">
              <div className="grid grid-cols-2 gap-4 m-2">
                <div className="col-span-1 cursor-pointer" onClick={() => navigate(-1)}>
                  <IoIosArrowBack className="text-black bg-gray-200 rounded-full p-1 w-8 h-8" />
                </div>
                <div className="col-span-1">
                  <TopNav textColor={"black"} />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="w-full flex max-xl:flex-col">
            <div className="w-3/5 max-xl:w-full flex flex-col gap-5">
              <div className="text-4xl font-bold special:text-8xl max-sm:text-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing
              </div>
              <div className="text-3xl font-normal special:text-7xl max-sm:text-xl">sed do eiusmod tempo</div>
              <div className="text-lg font-normal w-3/4 max-xl:w-full special:text-4xl max-sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                tellus cras adipiscing enim eu turpis. Dictum fusce ut placerat
                orci nulla. Tincidunt arcu non sodales neque sodales. Cras
                tincidunt lobortis feugiat vivamus. Sem integer vitae justo                
                eget. Odio ut sem nulla pharetra diam sit amet nisl. Porttitor
                massa id neque aliquam vestibulum morbi. Nisl rhoncus mattis
                rhoncus urna. Morbi tristique senectus et netus et malesuada.
                Malesuada bibendum arcu vitae elementum curabitur. Amet massa
                vitae tortor condimentum. Turpis in eu mi bibendum. Sit amet
                risus nullam eget felis eget nunc lobortis.
              </div>
              <div className="text-3xl font-normal special:text-7xl max-sm:text-xl">sed do eiusmod tempo</div>
              <div className="text-lg font-normal w-3/4 max-xl:w-full special:text-4xl max-sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
                tellus cras adipiscing enim eu turpis. Dictum fusce ut placerat
                orci nulla. Tincidunt arcu non sodales neque sodales. Cras
                tincidunt lobortis feugiat vivamus. Sem integer vitae justo
                eget. Odio ut sem nulla pharetra diam sit amet nisl. Porttitor
                massa id neque aliquam vestibulum morbi. Nisl rhoncus mattis
                rhoncus urna. Morbi tristique senectus et netus et malesuada.
                Malesuada bibendum arcu vitae elementum curabitur. Amet massa
                vitae tortor condimentum. Turpis in eu mi bibendum. Sit amet
                risus nullam eget felis eget nunc lobortis.
              </div>
            </div>
            <div className="w-2/5 max-xl:w-full"><img src={winlad_car} alt="winlad_car" className="absolute right-0 -z-10 bottom-0 w-1/2 max-xl:w-full special:bottom-0 max-xl:relative"/></div>
          </div>
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-20 bottom-0 w-52 xl:w-96 md:w-96 special:w-1/6 2xl:w-1/5 opacity-60 max-xl:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Won;