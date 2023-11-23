import SideNav from "../../components/SideNav/SideNav";
import Spicker from "../../assets/images/spicker.png";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import backgroundcar from "../../assets/images/background/Background-car.png";

import "./news.css";

function News() {
  return (
    <div>
      <div className="flex relative">
        {/* side-nav */}

        <SideNav screen="full" />
        {/* home-content */}
        <div className="flex xl:flex-row flex-col xl:justify-between mx-5 xl:gap-8 py-5">
          {/* left side */}
          <div className="flex flex-col flex-1 space-y-4">
            <div className="visible xl:hidden space-y-4">
              <div className="bg-black rounded-b-3xl py-4">
                <TopNav textColor={"white"} />
                <div className="pt-10">
                  <img className="" src={MainCar} alt="main" />
                </div>
              </div>

              <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 gap-2">
                <div className="lg:w-2/3">
                  <GoldCard />
                </div>
                <div>
                  <EarningCard />
                </div>
              </div>
            </div>

            <div className="top-img-inner-subscription">
              <img className="" src={MainCar} alt="main" />
            </div>
            <div className="hidden xl:block space-y-4">
              <div className="gold-card">
                <GoldCard />
              </div>
              <div className="purchase-card">
                <EarningCard />
              </div>
            </div>
          </div>

          {/* right-side */}
          <div className="flex flex-col flex-1 space-y-4">
            <div className="invisible xl:visible">
              <TopNav />
            </div>
            <div
              className="mx-4 space-y-4"
              style={{
                backgroundImage: `url(${backgroundcar})`,
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                zIndex: -10,
              }}
            >
              <div className="flex flex-col">
                <p className="font-bold text-3xl xl:text-4xl">Winland News</p>
                <p className="text-xs">
                  14m ago <br /> Europe
                </p>
              </div>

              <p className="text-lg xl:text-5xl md:text-4xl">
                Weekly Market Highlights - TradFi adoption takes spotlight
              </p>

              <div className="xl:ml-5">
                <p>
                  So what are the hallmarks of an Imperial news story? When a
                  researcher comes to us ready to announce some fascinating new
                  study,
                </p>
                <p>
                  So what are the hallmarks of an Imperial news story? When a
                  researcher comes to us ready to announce some fascinating new
                  study,
                </p>
                <p>
                  So what are the hallmarks of an Imperial news story? When a
                  researcher comes to us ready to announce some fascinating new
                  study,
                </p>
              </div>
            </div>
            <GucciCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
