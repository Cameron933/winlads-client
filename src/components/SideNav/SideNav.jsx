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
  const [expanded, setExpanded] = useState(false);
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
        className={ `pt-20 relative min-h-${screen} h-full pr-2 rounded-r-xl space-y-4 side-nav-back ${
          expanded ? "" : "side-nav-half"
        } w-12 xl:w-full    `}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10"
        >
          <Link to="/profile" className="flex items-center overflow-hidden relative w-full">
            <div>
              <img src={User} style={{ width: '50px', margin:' 0px 10px 0px 10px' }} alt="user" />
            </div>
            <div className="mobile-hide side-nav-name text-white">
              <h6>Windy Sahel1</h6>
              <p>@windy_sahel</p>
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
          <div onClick={expandSidebar} >
            <Link to="/transaction">
              <button className="side-nav-contain">
                <img src={Transaction} style={{ width:'14px' }} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  invisible xl:visible text-white w-4">
                    Transaction
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist">
              <button className="side-nav-contain">
                <img src={News} style={{ width:'18px' }} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin invisible xl:visible text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="side-nav-contain">
                <img src={Messages} style={{ width:'18px' }} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin invisible xl:visible text-white">
                    Messages
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="side-nav-contain">
                <img src={Sub} style={{ width:'20px' }} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  invisible xl:visible text-white">
                    Subscription
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button  className="side-nav-contain">
                <img src={Business} style={{ width:'18px' }} alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  invisible xl:visible text-white">
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
          <span className="mobile-hidden text-white">Sign out</span>
        </button>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
