import SideNav from "../../components/SideNav/SideNav";
import MainCar from "../../assets/images/MainCar.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import EarningCard from "../../components/EarningCard/EarningCard";
import GucciCard from "../../components/GucciCard/GucciCard";
import TopNav from "../../components/TopNav/TopNav";
import BusinessCardComponent from "../../components/BCard/BusinessCard";
import { IoIosOptions } from "react-icons/io";
function BusinessCard() {
  return (
    <div>
      <div className="flex relative min-h-screen">
        {/* side-nav */}

        <SideNav screen="full" />

        {/* home-content */}
        <div className="xl:flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-4 pb-5 space-y-4 xl:space-y-0">
          {/* left side */}
          <div className="flex flex-col space-y-4 flex-1">
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
            <form className="form-inline relative">
              <input
                className="form-control mr-sm-2 outline-none bg-gray-300 mb-0 w-full border-none rounded-lg p-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{
                  height: "50px",
                }}
              />
              <button className="absolute top-3 right-5">
                <IoIosOptions className="text-2xl" />
              </button>
            </form>
            <div className="">
              <BusinessCardComponent />
            </div>


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

export default BusinessCard;
