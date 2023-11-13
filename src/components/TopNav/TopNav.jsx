import "./TopNav.css";
import { Link, useNavigate } from "react-router-dom";

const TopNav = ({ textColor }) => {

  const navigate = useNavigate();

  return (
    <div
      className={`border-none text-${textColor} flex flex-row items-center justify-between cursor-pointer xl:mx-10 mx-5 font-semibold sm:font-bold text-xs sm:text-sm xl:text-lg md:text-xl  nav-list-top`}
    >
      <span className="navlinks">
        <Link to="/dashboard" className={window.location.pathname === '/dashboard' ? 'active-top' : ''} >Home</Link>
      </span>
      <span className="navlinks">
        <Link to="/notice" className={window.location.pathname === '/notice' ? 'active-top' : ''}>Notice</Link>
      </span>
      <span className="navlinks">
        <Link to="/raffles" className={window.location.pathname === '/raffles' ? 'active-top' : ''}>Raffles</Link>
      </span>
      <span className="navlinks">
        <Link to="/faq" className={window.location.pathname === '/faq' ? 'active-top' : ''}>FAQ</Link>
      </span>
      <span className="navlinks">Support</span>
    </div>
  );
};

export default TopNav;
