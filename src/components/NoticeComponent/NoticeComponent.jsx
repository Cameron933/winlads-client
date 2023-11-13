import pro1 from "../../assets/images/notice/1pro.png";
import pro2 from "../../assets/images/notice/2pro.png";
import pro3 from "../../assets/images/notice/3pro.png";
import pro4 from "../../assets/images/notice/4pro.png";
import pro5 from "../../assets/images/notice/5pro.png";
import pro6 from "../../assets/images/notice/6pro.png";
import pro7 from "../../assets/images/notice/7pro.png";
import morenotice from "../../assets/images/notice/prolist.png";
import { Link } from "react-router-dom";

function NoticeComponent() {
  return (
    <div>
      <ul className="flex  flex-col sm:gap-2 gap-1  ">
        <Link to="/notice-inner">
          <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3  hover:scale-105 transition-all">
            <div className="flex items-center ">
              <img src={pro1} alt="" className="" />
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
              <img src={pro2} alt="" className="" />
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
            <img src={pro3} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Jerome Bell</p>
              <p className="">Jerome sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={pro4} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Albert Flores</p>
              <p className="">Albert sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={pro5} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Eleanor Pena</p>
              <p className="">Eleanor sent you $0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center">
            <img src={pro6} alt="" className="" />
            <div className="ml-1 sm:ml-5  text-sm sm:text-base ">
              <p className="">Courtney Henry</p>
              <p className="">Courtney sent you $ 0</p>
            </div>
          </div>
          <img src={morenotice} alt="" />
        </li>

        <li className="flex items-center cursor-pointer border-b justify-between w-full md:w-2/3 hover:scale-105 transition-all ">
          <div className="flex items-center  ">
            <img src={pro7} alt="" className="" />
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
