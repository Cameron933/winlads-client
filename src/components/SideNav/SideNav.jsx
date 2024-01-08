import "./SideNav.css";
import { useEffect, useState } from "react";
import Credit from "../../assets/images/side-bar/Credit.png";

import User from "../../assets/images/side-bar/User3.png";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from "react-router-dom";

import Logout from "../../assets/images/side-bar/icons/logout1.png";
import Transaction from "../../assets/images/side-bar/icons/transaction1.png";
import News from "../../assets/images/side-bar/icons/news1.png";
import Sub from "../../assets/images/side-bar/icons/subscription1.png";
import Messages from "../../assets/images/side-bar/icons/Messages1.png";
import Business from "../../assets/images/side-bar/icons/bcard.png";
import Affillicate from "../../assets/images/side-bar/icons/Affiliate1.png";
import Promo from "../../assets/images/side-bar/icons/promo.png";
import Form from "../../assets/images/side-bar/icons/forum.png";
import Setting from "../../assets/images/side-bar/icons/settings 1.png";
import Giveaway from "../../assets/images/side-bar/icons/giveaway.png";
import Home from "../../assets/images/side-bar/icons/home.png";
import Entry from "../../assets/images/side-bar/icons/entries.png";



import { validateCurrentUser } from "../../utils/validateuser";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.config";
import Cookies from "universal-cookie";
import ItemLoader from "../../components/Loader/ItemLoader";
import { useRefresh } from "../../utils/RefreshContext";

const SideNav = ({ screen }) => {
  const cookies = new Cookies(null, { path: "/" });

  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [userImage, setUserImage] = useState("");
  const [loading, setLoading] = useState(true);
  const { refreshCount, refresh } = useRefresh();

  const expandSidebar = () => {
    setExpanded((pre) => true);
  };

  const notExpandSidebar = () => {
    setExpanded((pre) => false);
  };

  useEffect(() => {
    currentUserValidation();
  }, [refreshCount]);

  const handleClick = () => {
    cookies.remove("wr_token");
    navigate("/login");
  };

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      setValUser(validator.user);
      if (validator.user.image == null) {
        setLoading(false);
      }
      getProfileImage(validator.user.image);
    } else {
      navigate("/login");
    }
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
      });
  }

  return (
    <OutsideClickHandler onOutsideClick={() => console.log("outside-clicked")}>
      <div
        className={`pt-10 relative min-h-screen h-full  space-y-4 side-nav-back    ${
          expanded ? "w-[50px] xl:w-[180px] " : "side-nav-half w-[50px]  "
        } `}
      >
        <div
          onClick={expandSidebar}
          className="flex flex-row items-center mb-10 w-full"
        >
          <div className="flex flex-col items-center gap-2 justify-center overflow-hidden relative w-full ">
            <Link to="/profile">
              <div className="flex justify-center items-center w-full">
                {loading ? (
                  <div className="flex justify-center">
                    <ItemLoader />
                  </div>
                ) : userImage ? (
                  <div className="w-[35px] xl:w-[100px] rounded-full overflow-hidden aspect-square">
                  <img
                    src={userImage}
                    className="w-full h-full object-cover"
                    alt="user"
                  />
                  </div>
                ) : (
                  <img
                    src={User}
                    className="w-[35px] xl:w-[100px] rounded-full "
                    alt="user"
                  />
                )}
              </div>
            </Link>
            <div className="side-nav-name text-white  items-center justify-center flex-col hidden xl:flex">
              <p className="text-sm font-bold uppercase">{valUser.firstname}</p>
              {/* <p className="text-[10px]">{valUser.uid}</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 w-full">
          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl " />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/dashboard">
              <button className="flex flex-row items-center  xl:justify-start justify-center xl:px-5  xl:gap-2 hover:bg-[#36383b] py-2  w-full  ">
                <img src={Home} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white ">
                    Home
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/giveaways">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Giveaway} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Giveaways
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Sub} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Subscriptions
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/myentries">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Entry} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    My Entries
                  </p>
                </span>
              </button>
            </Link>
          </div>


          <div onClick={expandSidebar}>
            <Link to="/transaction">
              <button className="flex flex-row items-center  xl:justify-start justify-center xl:px-5  xl:gap-2 hover:bg-[#36383b] py-2  w-full  ">
                <img src={Transaction} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white ">
                    Transactions
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/affiliate">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Affillicate} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white">
                    Affiliate
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/promo">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Promo} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white">
                    Promo Tools
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Business} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white">
                    Business card
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          <div onClick={expandSidebar}>
            <Link to="/newslist">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={News} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Messages} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Chatroom
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Form} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Forum
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <hr className="w-10/12 rounded-xl" />
          </div>

          {/* <div onClick={expandSidebar} title="This feature will be available soon">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Sub} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin hidden xl:flex text-white">
                    Subscription
                  </p>
                </span>
              </button>
          </div> */}

          <div onClick={expandSidebar}>
            <Link to="/profile">
              <button className="flex flex-row items-center xl:justify-start justify-center xl:px-5 xl:gap-2 hover:bg-[#36383b] py-2 px-2 w-full">
                <img src={Setting} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  hidden xl:flex text-white">
                    Settings
                  </p>
                </span>
              </button>
            </Link>
          </div>

          {/* <div onClick={expandSidebar}>
            <button
              onClick={handleClick}
              className="flex flex-row items-center xl:justify-start justify-center xl:gap-2 xl:px-5 hover:bg-[#36383b] py-2 px-2  w-full "
            >
              <img src={Logout} style={{ width: "16px" }} alt="protect" />
              <span className=" text-white hidden xl:flex">Sign out</span>
            </button>
          </div> */}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
