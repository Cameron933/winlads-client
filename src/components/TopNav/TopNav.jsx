import "./TopNav.css";
import { Link } from "react-router-dom";

const TopNav = ({ textColor }) => {
  return (
    <div
      className={`border-none text-${textColor} flex flex-row items-center justify-between cursor-pointer xl:mx-10 mx-5 font-semibold sm:font-bold text-xs sm:text-sm xl:text-lg md:text-xl nav-list-top`}
    >
      <span className="navlinks">
        <Link to="/dashboard">Home</Link>
      </span>
      <span className="navlinks">
        <Link to="/notice">Notice</Link>
      </span>
      <span className="navlinks">
        <Link to="/raffles">Giveaway</Link>
      </span>
      <span className="navlinks">
        <Link to="/faq">FAQ</Link>
      </span>
      <span className="navlinks">Support</span>
    </div>
  );
};

export default TopNav;
