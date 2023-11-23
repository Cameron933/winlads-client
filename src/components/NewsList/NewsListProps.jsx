import { Link } from "react-router-dom";
import newsimage1 from "../../assets/images/news/1.png";
import newsimage2 from "../../assets/images/news/2.png";
import newsimage3 from "../../assets/images/news/3.png";
import newsimage4 from "../../assets/images/news/4.png";
import "./newsListProps.css"; // Import the external CSS file
import { IoIosOptions } from "react-icons/io";
function NewsListProps() {
  return (
    <div>
      <form className="form-inline relative">
        <input
          className="form-control mr-sm-2 outline-none bg-gray-300"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            border: "none",
            marginBottom: "40px",
            width: "100%",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
          }}
        />
        <button className="absolute top-3 right-5">
          <IoIosOptions className="text-2xl"/>
        </button>
      </form>

      <div className="flex flex-col space-y-4">
        <Link to="/news">
          <div className="flex flex-row gap-8 xl:mb-5 items-center">
            <img
              src={newsimage1}
              alt=""
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
            />
            <div className="flex flex-col overflow-x-hidden">
              <p className="text-md xl:text-3xl md:text-xl">
                winlads
              </p>

              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs text-right mt-3">0m ago</p>
            </div>
          </div>
        </Link>
       
        <Link to="/news">
          <div className="flex flex-row gap-8 xl:mb-5 items-center">
            <img
              src={newsimage2}
              alt=""
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-md xl:text-3xl md:text-xl">winlads</p>

              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs text-right mt-3">0m ago</p>
            </div>
          </div>
        </Link>
        <Link to="/news">
          <div className="flex flex-row gap-8 xl:mb-5 items-center">
            <img
              src={newsimage3}
              alt=""
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
            />
            <div className="flex flex-col">
              <h3 className="text-md xl:text-3xl md:text-xl">winlads</h3>
              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs text-right mt-3">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-8 xl:mb-5 items-center">
            <img src={newsimage4} alt="" className="w-16 h-16 xl:w-16 xl:h-16 rounded-full" />
            <div className="flex flex-col">
              <h3 className="text-md xl:text-3xl md:text-xl">winlads</h3>
              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs text-right mt-3">0m ago</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsListProps;
