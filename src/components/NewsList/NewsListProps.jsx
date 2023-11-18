import { Link } from "react-router-dom";
import newsimage1 from "../../assets/images/news/1.png";
import newsimage2 from "../../assets/images/news/2.png";
import newsimage3 from "../../assets/images/news/3.png";
import newsimage4 from "../../assets/images/news/4.png";
import "./newsListProps.css"; // Import the external CSS file

function NewsListProps() {
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{
            background: "#FFF7D9",
            border: "none",
            marginBottom: "40px",
            width: "100%",
            height: "50px",
            borderRadius: "10px",
            padding: "10px",
          }}
        />
      </form>

      <div className="flex flex-col space-y-4">
        <Link to="/news">
          <div className="flex flex-row gap-2 xl:mb-5">
            <img
              src={newsimage1}
              alt=""
              className="w-16 h-16 xl:w-20 xl:h-20"
            />
            <div className="flex flex-col">
              <p className="text-md font-bold xl:text-2xl md:text-xl">
                winlads
              </p>

              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>
        {/* 
        <Link to="/news">
          <div className="flex flex-row gap-2 xl:mb-5">
            <img
              src={newsimage2}
              alt=""
              className="w-16 h-16 xl:w-20 xl:h-20"
            />
            <div className="flex flex-col">
              <p className="text-md font-bold xl:text-2xl md:text-xl">winlads</p>

              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-2 xl:mb-5">
            <img
              src={newsimage3}
              alt=""
              className="w-16 h-16 xl:w-20 xl:h-20"
            />
            <div className="flex flex-col">
              <h3 className="text-md font-bold xl:text-2xl md:text-xl">winlads</h3>
              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link>

        <Link to="/news">
          <div className="flex flex-row gap-2 xl:mb-5">
            <img src={newsimage4} alt="" className="w-16 h-16 xl:w-20 xl:h-20" />
            <div className="flex flex-col">
              <h3 className="text-md font-bold xl:text-2xl md:text-xl">winlads</h3>
              <p className="text-sm xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <p className="text-xs">0m ago</p>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default NewsListProps;
