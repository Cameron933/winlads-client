import "./SideNav.css";
import Credit from "../../assets/images/side-bar/Credit.png";
import Logout from "../../assets/images/side-bar/Logout.png";
// import News from "../../assets/images/side-bar/News.png";
import Paywall from "../../assets/images/side-bar/PayWall.png";
import Protect from "../../assets/images/side-bar/Protect.png";
// import Transaction from "../../assets/images/side-bar/Transactions.png";
import User from "../../assets/images/side-bar/User2.png";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Auth from "../../assets/images/dashboard-icon/1.png";
import Transaction from "../../assets/images/side-bar/Transactions2.png";
import News from "../../assets/images/side-bar/News2.png";
import Sub from "../../assets/images/side-bar/PayWall2.png";
import Messages from "../../assets/images/side-bar/Messages2.png";
import Business from "../../assets/images/side-bar/Credit2.png";

const SideNav = ({ screen }) => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  const expandSidebar = () => {
    setExpanded((pre) => true);
  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  return (
    <OutsideClickHandler onOutsideClick={notExpandSidebar}>
      <div
        className={ `pt-10 relative min-h-screen h-full   rounded-r-xl space-y-4 side-nav-back  ${
          expanded ? "w-[50px] sm:w-[200px]" : "side-nav-half w-[50px]"
        }     `}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10 w-full"
        >
          <Link to="/profile" className="flex flex-col items-center gap-2 justify-center overflow-hidden relative w-full ">
            <div className="flex justify-center items-center w-full ">
              <img src={User} className="w-[30px] md:w-[35px] xl:w-[40px]" alt="user" />
            </div>
            <div className="side-nav-name text-white  items-center justify-center flex-col hidden sm:flex">
              <p className="text-sm">Windy Sahel1</p>
              <p className="text-xm">@windy_sahel</p>
            </div>
          </Link>

          
        </div>

        <div className="flex flex-col space-y-4 w-full ">
          <div onClick={expandSidebar} >
            <Link to="/transaction">
              <button className="side-nav-contain">
                <img src={Transaction} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden sm:flex text-white w-4">
                    Transaction
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist">
              <button className="side-nav-contain">
                <img src={News} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden sm:flex text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="side-nav-contain">
                <img src={Messages} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden sm:flex text-white">
                    Messages
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="side-nav-contain">
                <img src={Sub} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden sm:flex text-white">
                    Subscription
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button  className="side-nav-contain">
                <img src={Business} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden sm:flex text-white">
                    Business card
                  </p>
                </span>
              </button>
            </Link>
          </div>

          
        </div>

        <button
          onClick={()=>navigate('/login')}
          className="side-nav-contain side-nav-logout absolute top-3/4 w-full left-0"
        >
          <img src={Logout} style={{ width:'16px' }} alt="protect" />
          <span className=" text-white hidden sm:flex">Sign out</span>
        </button>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
