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
import { IoIosArrowDown } from "react-icons/io";
import Past from "../../assets/images/new/past.png";
import Ongoing from "../../assets/images/new/ongoing.png";
import Upcoming from "../../assets/images/new/upcoming.png";

import Giv from "../../assets/images/newIcons/giv.png"
import PromoIcon from "../../assets/images/newIcons/promo.png"
import Aff from "../../assets/images/newIcons/aff.png"
import NewsIcon from "../../assets/images/newIcons/news.png"
import BC from "../../assets/images/newIcons/bc.png"
import SubIcon from "../../assets/images/newIcons/sub.png"
import EntryIcon from "../../assets/images/newIcons/entry.png"
import Trans from "../../assets/images/newIcons/trans.png"


const SideNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const cookies = new Cookies(null, { path: "/" });

  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [userImage, setUserImage] = useState("");
  const [loading, setLoading] = useState(true);
  const { refreshCount, refresh, showMenu, handleMenu } = useRefresh();

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

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => handleMenu(true)}>
      {

        !showMenu && <div className="bg-black/50 fixed top-0 right-0 w-full h-full z-10" onClick={() => handleMenu(true)}>

        </div>
      }

      <div
        className={`${showMenu ? '-translate-x-full' : 'translate-x-0'} fixed xl:translate-x-0 xl:block xl:relative pt-10 z-20 min-h-screen h-full  space-y-4 side-nav-back transition-all  w-[180px] xl:w-[180px] overflow-y-scroll`}
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
                    className="w-[40px] xl:w-[100px] rounded-full "
                    alt="user"
                  />
                )}
              </div>
            </Link>

            <div className="side-nav-name text-white  items-center justify-center flex-col  xl:flex">
              <p className="xl:text-sm text-xs font-bold uppercase">{valUser.firstname}</p>
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
              <button className="flex flex-row items-center  xl:justify-start justify-start px-5  gap-2 hover:bg-[#36383b] py-2  w-full  ">
                <img src={Home} className="w-[18px]" alt="protect" />

                <span className="">
                  <p className="link-no-underlin flex text-white ">
                    Home
                  </p>
                </span>

              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <button className="flex gap-2 space-y-2 xl:space-y-0 items-center justify-start px-5 hover:bg-[#36383b] py-2 w-full">
              <img src={Giv} className="w-[18px]" alt="protect" />
              <div
                className=" flex  gap-2 items-center"
                onClick={handleDropdownClick}
              >
                <p className="link-no-underlin flex text-white">
                  Giveaways
                </p>

                <IoIosArrowDown className="text-white w-8" />
              </div>
            </button>
          </div>

          {showDropdown && (
            <div className="bg-black flex flex-col space-y-2 text-xs text-white text-start xl:ml-10 ml-4">
              <Link to="/ongoingGiveaways">
                <div className="flex flex-row space-x-2 items-center">
                  <img src={Ongoing} alt="" className="w-[18px]" />
                  <p className="cursor-pointer hover:bg-[#36383b] px-2 py-1">
                    Active
                  </p>
                </div>
              </Link>
              <Link to="/upcomingGiveaways">
                <div className="flex flex-row space-x-2 items-center">
                  <img src={Upcoming} alt="" className="w-[18px]" />
                  <p className="cursor-pointer hover:bg-[#36383b] px-2 py-1">
                    Upcoming
                  </p>
                </div>
              </Link>
              <Link to="/pastGiveaways">
                <div className="flex flex-row space-x-2 items-center">
                  <img src={Past} alt="" className="w-[18px]" />
                  <p className="cursor-pointer hover:bg-[#36383b] px-2 py-1">
                    Past
                  </p>
                </div>
              </Link>
            </div>
          )}

          <div onClick={expandSidebar}>
            <Link to="/subscription">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={SubIcon} className="w-[18px]" alt="protect" />
                <span className="">
                  <p className="link-no-underlin  flex text-white">
                    Subscriptions
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/myentries">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={EntryIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    My Entries
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/transaction">
              <button className="flex flex-row items-center  justify-start px-5  gap-2 hover:bg-[#36383b] py-2  w-full  ">
                <img src={Trans} className="w-[14px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white ">
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
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={Aff} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Affiliate
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/promo">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={PromoIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Promo Tools
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/business-card">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={BC} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
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
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={NewsIcon} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    News
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={Messages} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
                    Chatroom
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <Link to="/messages">
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={Form} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin  xl:flex text-white">
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
              <button className="flex flex-row items-center justify-start px-5 gap-2 hover:bg-[#36383b] py-2 w-full">
                <img src={Setting} className="w-[18px]" alt="protect" />
                <span className="mobile-hide">
                  <p className="link-no-underlin   xl:flex text-white">
                    Settings
                  </p>
                </span>
              </button>
            </Link>
          </div>

          <div onClick={expandSidebar}>
            <button
              onClick={handleClick}
              className="flex flex-row items-center justify-start gap-2 px-5 hover:bg-[#36383b] py-2  w-full "
            >
              <img src={Logout} className="w-[18px]" alt="protect" />
              <span className=" mobile-hide">
                <p className="text-white  xl:flex ">Sign out</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideNav;
