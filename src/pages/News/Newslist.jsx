import { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import NewsListProps from "../../components/NewsList/NewsListProps";
import axios from "axios";
import SearchField from "../../components/SearchField/SearchField";
import { FiLoader } from "react-icons/fi";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import BG from "../../assets/images/HomesideBg.png";

function Newslist() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // currentUserValidation();
    getNews();
  }, []);

  const getNews = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getNews`)
      .then((response) => {
        console.log(response.data.data);
        setNewsList(response?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="flex relative min-h-screen">
        {/* side-nav */}

        <SideNav screen="full" />

        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
          <img
            src={BG}
            alt=""
            className="absolute right-0 -z-10 top-60 w-72 xl:w-96 md:w-96 special:w-1/3 2xl:w-1/4 special:top-80 opacity-60 xl:top-60 2xl:top-80"
          />
          {/* left side */}
          <div className="left-side flex flex-col space-y-4 flex-1">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                <div className="w-full">
                  <GoldCard />
                </div>
              </div>
            </div>
            <SearchField />

            {loading ? (
              <div className="flex flex-row justify-center gap-2 items-center">
                <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                  Loading News
                </p>
                <FiLoader className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24 animate-spin" />
              </div>
            ) : newsList.length > 0 ? (
              <div className="flex flex-col space-y-4 special:pt-24 2xl:pt-16 xl:pt-12 pt-8 2xl:space-y-6">
                {newsList.map((news, key) => (
                  <NewsListProps
                    key={key}
                    img={news.image}
                    maintitle={news.maintitle}
                    newstitle={news.newstitle}
                    createdat={news.createdat}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
                <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
                  No More News
                </p>
              </div>
            )}
          </div>

          {/* right-side */}
          <div className="flex-col flex-1 space-y-4 hidden xl:flex">
            <div className=" space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>
              <div className="w-full">
                <GoldCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newslist;
