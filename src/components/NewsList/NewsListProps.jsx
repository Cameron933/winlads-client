import { Link } from "react-router-dom";
import newsimage1 from "../../assets/images/news/1.png";
import newsimage2 from "../../assets/images/news/2.png";
import newsimage3 from "../../assets/images/news/3.png";
import newsimage4 from "../../assets/images/news/4.png";
import Frame from "../../assets/images/Frame.png";
// import "./newsListProps.css"; // Import the external CSS file

function NewsListProps() {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-3xl flex flex-row justify-between px-4 py-2  items-center bg-[#FFECA8] lg:mt-5">
        <input
          className="bg-[#FFECA8] placeholder:text-gray-800 w-full py-3 border-none outline-none shadow-none "
          type="text"
          placeholder="Search"
        />
        <img src={Frame} alt="" className="w-[25px] lg:w-[30px]" />
      </div>

      <div className="flex flex-col gap-4 lg:gap-8 lg:px-4">
        <Link to="/news">
          <div className="flex flex-row gap-2  hover:scale-[1.01]">
            <img
              src={newsimage1}
              alt=""
              className="w-16 h-16 lg:w-20 lg:h-20  "
            />
            <div className="flex flex-col">
              <p className="text-md font-bold xl:text-2xl md:text-xl">
                winlads
              </p>

              <p className="text-xs sm:text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-2  hover:scale-[1.01]">
            <img
              src={newsimage2}
              alt=""
              className="w-16 h-16 lg:w-20 lg:h-20 "
            />
            <div className="flex flex-col">
              <p className="text-md font-bold xl:text-2xl md:text-xl">
                winlads
              </p>

              <p className="text-xs sm:text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-2  hover:scale-[1.01]">
            <img
              src={newsimage3}
              alt=""
              className="w-16 h-16 lg:w-20 lg:h-20 "
            />
            <div className="flex flex-col">
              <h3 className="text-md font-bold xl:text-2xl md:text-xl">
                winlads
              </h3>
              <p className="text-xs sm:text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-2  hover:scale-[1.01] ">
            <img
              src={newsimage4}
              alt=""
              className="w-16 h-16 lg:w-20 lg:h-20 "
            />
            <div className="flex flex-col">
              <h3 className="text-md font-bold xl:text-2xl md:text-xl">
                winlads
              </h3>
              <p className="text-xs sm:text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsListProps;
