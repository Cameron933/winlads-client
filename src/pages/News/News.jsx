import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import TopNav from "../../components/TopNav/TopNav";
import backgroundcar from "../../assets/images/background/Background-car.png";

import "./news.css";

function News() {
  return (
    <div className="flex relative">
      {/* side-nav */}

      <SideNav screen="screen" />
      {/* home-content */}
      <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 px-4 xl:gap-8 pb-5 space-y-4 xl:space-y-0">
        {/* left side */}
        <div className="flex-col flex-1 space-y-4">

          <div className="bg-black rounded-b-3xl py-4">
            <div className=" xl:hidden">
            <TopNav textColor={"white"}/>
            </div>
            <div className="pt-10">
            <img className="" src={MainCar} alt="main" />
          </div>
        </div>

        <div className="w-full py-4">
          <GoldCard />
        </div>


      </div>

      {/* right-side */}
      <div className="flex flex-col flex-1 space-y-4 py-4">
        <div className="invisible xl:visible">
          <TopNav />
        </div>
        <div
          className="mx-4"
          style={{
            backgroundImage: `url(${backgroundcar})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            zIndex: -10,
          }}
        >
          <div className="flex flex-col">
            <p className="font-bold text-4xl xl:text-5xl mt-8">Winland News</p>
            <p className="text-xs md:text-xl xl:text-lg 2xl:text-xl special:text-xl">
              14m ago <br /> Europe
            </p>
          </div>

          <p className="text-lg xl:text-5xl md:text-4xl mt-8">
            Weekly Market Highlights - TradFi adoption takes spotlight
          </p>

          <ul className="space-y-3 md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mt-4">
            <li>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </li>
            <li>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </li>
            <li>
              So what are the hallmarks of an Imperial news story? When a
              researcher comes to us ready to announce some fascinating new
              study,
            </li>
          </ul>
        </div>

      </div>
    </div>
    </div >

  );
}

export default News;
