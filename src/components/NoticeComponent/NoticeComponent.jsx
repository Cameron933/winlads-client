import pro1 from "../../assets/images/notice/1pro.png";
import Female from "../../assets/images/notice/Female.png";
import Male from "../../assets/images/notice/Male.png";

import morenotice from "../../assets/images/notice/prolist.png";
import { Link } from "react-router-dom";

function NoticeComponent() {
  return (
    <div>
      <ul className="flex  flex-col sm:gap-2 gap-1  ">
        <Link to="/notice-inner">
          <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3  hover:scale-105 transition-all">
            <div className="flex items-center ">
              <img src={Male} alt="" className="" />
              <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
                <p className="">Kathryn Murphy</p>
                <p className="">Kathryn sent you $0</p>
              </div>
            </div>
            <img src={morenotice} alt="" />
          </li>
        </Link>

        <Link to="/notice-inner">
          <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
            <div className="flex items-center">
              <img src={Male} alt="" className="" />
              <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
                <p className="">Annette Black</p>
                <p className="">Annette sent you $0</p>
              </div>
            </div>
            <img src={morenotice} alt="" />
          </li>
        </Link>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={Male} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Jerome Bell</p>
              <p className="">Jerome sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={Female} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Albert Flores</p>
              <p className="">Albert sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={Male} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Eleanor Pena</p>
              <p className="">Eleanor sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={Male} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Courtney Henry</p>
              <p className="">Courtney sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center  ">
            <img src={Female} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base flex-1">
              <p className="">Cody Fisher</p>
              <p className="">Cody sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default NoticeComponent;
