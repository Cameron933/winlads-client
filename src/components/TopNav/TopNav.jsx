import "./TopNav.css";
import { Link } from "react-router-dom";
import { GoBell } from "react-icons/go";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// import { messaging } from "../../firebase.config";
import { getMessaging, getToken } from "firebase/messaging";

// const messaging = getMessaging();
// // Add the public key generated from the console here.
// getToken(messaging, {vapidKey: import.meta.env.FIREBASE_NOTIFICATIONS});

const TopNav = ({ textColor }) => {
  const [notShow, setNotShow] = useState(false);

  const handleClick = () => {
    setNotShow(!notShow);
  };

  // notification?id=6570517d8ea78575c11be760

  return (
    <>
      <div
        className={`border-none text-${textColor} flex flex-row items-center justify-between cursor-pointer xl:mx-4 mx-5 font-semibold sm:font-bold text-sm xl:text-sm md:text-lg 2xl:text-xl special:text-2xl nav-list-top`}
      >
        <span className="navlinks">
          <Link to="/dashboard">Home</Link>
        </span>
        {/* <span className="navlinks">
        <Link to="/notice">Notice</Link>
      </span> */}
        {/* <span className="navlinks">
          <Link to="/giveaways">Giveaway</Link>
        </span> */}
        <span className="" title="This feature will be available soon">
          <Link>Giveaway</Link>
        </span>
        <span className="navlinks">
          <Link to="/faq">FAQ</Link>
        </span>
        <span className="navlinks">
          <Link to="/support">Support</Link>
        </span>
        <span className="navlinks">
          <GoBell onClick={handleClick} />
        </span>
      </div>
      {notShow ? (
        <div className="absolute right-8">
          <div className="bg-white flex flex-col mt-8 rounded-xl p-2 w-72 border border-solid border-black">
            {/* <div className="flex justify-end">
              <IoCloseSharp onClick={() => setNotShow(false)} size={20} className="hover:scale-110" />
            </div> */}
            <p className="text-center">No more notification</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TopNav;
