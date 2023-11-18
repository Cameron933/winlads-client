import "./SideNav.css";
import Credit from "../../assets/images/side-bar/Credit.png";
import Logout from "../../assets/images/side-bar/Logout.png";
// import News from "../../assets/images/side-bar/News.png";
import Paywall from "../../assets/images/side-bar/PayWall.png";
import Protect from "../../assets/images/side-bar/Protect.png";
// import Transaction from "../../assets/images/side-bar/Transactions.png";
import User from "../../assets/images/side-bar/User.png";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Auth from "../../assets/images/dashboard-icon/1.png";
import Transaction from "../../assets/images/dashboard-icon/2.png";
import News from "../../assets/images/dashboard-icon/3.png";
import Sub from "../../assets/images/dashboard-icon/4.png";
import Business from "../../assets/images/dashboard-icon/5.png";

const SideNav = ({ screen }) => {
  const [expanded, setExpanded] = useState(false);

  const expandSidebar = () => {
    setExpanded((pre) => true);
  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  return (
    <OutsideClickHandler onOutsideClick={notExpandSidebar}>
      <div
        className={ `pt-20  min-h-${screen} h-full pr-2 rounded-r-xl space-y-4 bg-black ${
          expanded ? "" : "side-nav-half"
        } w-12 xl:w-full    `}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10"
        >
          <Link to="/profile">
            <div>
              <img src={User} alt="user" />
            </div>
          </Link>

          {/* <div className={` ${
            expanded ? "" : "invisible"
          }flex flex-col`}>
            <span>unknown user</span>
            <span>user@gmail.com</span>
          </div> */}
        </div>

        <div className="flex flex-col space-y-4">
          <div onClick={expandSidebar}>
            <Link to="/transaction">
              <button className="side-nav-contain">
                <img src={Transaction} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-white">
                    Transaction
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist">
              <button className="side-nav-contain">
                <img src={News} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="side-nav-contain">
                <img src={Sub} alt="protect" />

                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-white">
                    Subscription
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button  className="side-nav-contain">
                <img src={Business} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin font-bold invisible xl:visible text-white">
                    Business card
                  </p>
                </span>
              </button>
            </Link>
          </div>

          
        </div>

        {/* <button
          onClick={expandSidebar}
          className="side-nav-contain side-nav-logout"
        >
          <img src={Logout} alt="protect" />
          <span className="mobile-hidden">Sign out</span>
        </button> */}
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
