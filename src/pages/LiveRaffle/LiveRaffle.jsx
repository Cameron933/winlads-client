import SideNav from "../../components/SideNav/SideNav";
import liveBackground from "../../assets/images/rafflesImages/LiveBackground.png";
import cutIcon from "../../assets/images/rafflesImages/cutIcon.png";
import displayicon from "../../assets/images/rafflesImages/displayicon.png";
import soundicon from "../../assets/images/rafflesImages/soundIcon.png";
import ChartDark from "../../assets/images/rafflesImages/ChartDark.png";
import EarningCard from "../../components/EarningCard/EarningCard";
import max from "../../assets/images/rafflesImages/max.png";
import liveraffflecard from "../../assets/images/rafflesImages/liveraffflecard.png";
import "./liveRaffle.css";

function LiveRaffle() {
  // const currentDate = new Date();
  // const formattedDate = currentDate.toLocaleString();
  return (
    <div
      className="flex relative h-screen"
      style={{
        backgroundImage: `url(${liveBackground})`,
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SideNav screen="screen" />

      <div className="flex flex-col xl:mx-10 md:mx-5">
        <div className="flex items-center justify-center flex-col">
          <img src={max} alt="" className="w-24" />
          <div className="text-white text-3xl font-extrabold">Lotto MAX</div>
        </div>

        <div className="grid xl:grid-cols-3 bottom-0 absolute xl:justify-between grid-cols-1">
          <div className="col-span-1 hidden xl:flex ">
            <EarningCard />
          </div>

          <div className="flex flex-col items-center xl:justify-between col-span-1 space-y-4 xl:space-y-0 md:ml-60 ml-3 xl:ml-0">
            <div className="flex flex-row justify-between items-center gap-4 xl:gap-6">
              <img src={soundicon} alt="" className="w-10 h-10" />
              <img src={displayicon} alt="" className="w-10 h-10" />
              <img src={cutIcon} alt="" className="w-10 h-10" />
            </div>
            <div
              className="rounded-full px-6 pb-1 pt-3"
              style={{
                background:
                  "linear-gradient(98.92deg, #37DBFF 45%, #00529D 83%)",
              }}
            >
              <div className="flex flex-col space-y-1">
                <div className="flex flex-row items-center gap-5">
                  <div className="text-white font-bold rounded-full bg-[#157D98] xl:h-11 xl:w-11 h-9 w-9 items-center flex justify-center">
                    R
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 h-9 w-9 rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    14
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 h-9 w-9 rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    34
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 h-9 w-9 rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    ?
                  </div>
                  <div className="text-black font-bold xl:h-11 xl:w-11 h-9 w-9 rounded-full bg-[#D6F6FF] items-center flex justify-center">
                    ?
                  </div>
                </div>
                <p className="xl:text-sm text-xs text-center font-bold text-black">
                  Brisko - 2042 | 2023-SEP-17 TUESDAY
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src={ChartDark}
              alt="chart"
              className="col-span-1 hidden xl:flex"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveRaffle;

/* <div className="	">
          <div className="bg-gradient-to-br from-[#37DBFF] to-[#00529D] p-4 rounded-2xl">
            <div className="">
              <div className="flex justify-center items-center gap-4 px-3 py-3 ">
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#157D98] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
                  value=" R "
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
                  value="14"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
                  value="34"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="38"
                  disabled
                  readOnly
                />
                <input
                  type="text"
                  id="disabled-input-2"
                  aria-label="disabled input 2"
                  className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
                  value="78"
                  disabled
                  readOnly
                />
              </div>
              <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
                {formattedDate}
              </p>
            </div>
          </div>
        </div> */
