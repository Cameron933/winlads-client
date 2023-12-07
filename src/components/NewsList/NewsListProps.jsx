import { Link } from "react-router-dom";
import "./newsListProps.css";

function NewsListProps({ img, maintitle, newstitle, createdat }) {
  return (
    <div>
      <Link to="/news">
        <div className="flex flex-col space-y-1 hover:bg-gray-200 py-2 rounded-xl hover:shadow-xl">
          <div className="flex flex-row items-center gap-2 2xl:gap-4">
            <img
              src={img}
              alt=""
              className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
            />
            <div className="flex flex-col overflow-x-hidden">
              <p className="text-md xl:text-2xl md:text-xl special:text-4xl">
                {maintitle}
              </p>

              <p className="text-sm xl:text-lg">{newstitle}</p>
              <p className="text-xs text-right mt-3">{createdat}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewsListProps;
