import { Link } from "react-router-dom";
import "./newsListProps.css"; // Import the external CSS file


function NewsListProps({img, maintitle, newstitle, createdat}) {
  return (
    <div>
        <Link to="/news">
          <div className="flex flex-row gap-8 xl:mb-5 items-center">
            <img
              src={img}
              alt=""
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
            />
            <div className="flex flex-col overflow-x-hidden">
              <p className="text-md xl:text-3xl md:text-xl">
                {maintitle}
              </p>

              <p className="text-sm xl:text-xl">
                {newstitle}
              </p>
              <p className="text-xs text-right mt-3">{createdat}</p>
            </div>
          </div>
        </Link>
      </div>
  );
}

export default NewsListProps;
