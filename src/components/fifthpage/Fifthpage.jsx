import jeep from "../../assets/images/jeep.png";
import Plancard from "../plancard/Plancard";
import { motion } from "framer-motion";

const imageAnimate = {
  offscreen: { y: -20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Fifthpage() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative pt-[150px] 4xl:pt-[300px] pb-10"
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      {/* <p
        className="w-full lg:w-2/3 ml-auto text-center xl:mb-4 text-xl 4xl:text- font-bold uppercase tracking-widest p-4 4xl:pb-8 lg:text-4xl xl:text-right xl:pr-16 relative"
        style={{ zIndex: "2" }}
      >
        Choose a server plan
      </p> */}
      <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-10" style={{ letterSpacing: '12px', zIndex: "2" }}>
          CHOOSE A SERVER PLAN
        </p>
      <div className="lg:grid grid-cols-3">
        <div
          className="hidden lg:block"
          style={{ background: "", height: "50px" }}
        ></div>
        <div className="lg:col-span-2 h-auto">
          <div
            className="lg:grid grid-cols-2 gap-2 relative"
            style={{ zIndex: "2" }}
          >
            <div className="text-white mb-4 lg:mb-0">
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 allcolor-white  justify-center items-center rounded-xl m-auto transition duration-700  lg:mr-0"
                style={{
                  width: "80%",
                  background:
                    "linear-gradient(0deg, rgba(22,13,16,1) 0%, rgba(15,15,15,1) 33%)",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Standard
                </p>
                <p className="text-4xl 2xl:text-6xl">$10</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">2 Day database discount Access</p>
                  <p className="2xl:text-2xl">Winlands Events Invites</p>
                  <p className="2xl:text-2xl">10% off Winlads Merch</p>
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="p-0 mb-4 lg:mb-0" style={{ background: "" }}>
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl transition duration-700"
                style={{
                  width: "80%",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(237,237,237,1) 33%)",
                  margin: "auto",
                }}
              >
                <p className="mt-4 font-bold 2xl:text-xl p-2 border-black rounded-md">
                  Bronz
                </p>
                <p className="text-4xl 2xl:text-6xl">$30</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    1 Week database discount Access
                  </p>
                  <p className="2xl:text-2xl">Winlands Events Invites</p>
                  <p className="2xl:text-2xl">10% off Winlads Merch</p>
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="p-0 lg:mb-0 mb-4" style={{ background: "" }}>
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl m-auto transition duration-700 lg:mr-0"
                style={{
                  width: "80%",
                  background:
                    "linear-gradient(99deg, #FFF400 19.06%, #CA9E03 80.34%)",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Silver
                </p>
                <p className="text-4xl 2xl:text-6xl">$100</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    1 Month database discount Access
                  </p>
                  <p className="2xl:text-2xl">Winlands Events Invites</p>
                  <p className="2xl:text-2xl">10% off WinladsMerch</p>
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
            <div className="text-white mb-4 lg:mb-0">
              <div
                className="flex flex-col space-y-4 2xl:py-4 2xl:space-y-4 justify-center items-center rounded-xl m-auto transition duration-700"
                style={{
                  width: "80%",
                  background:
                    "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(37,32,32,1) 33%)",
                  //margin: "auto",
                  //marginRight: "0px",
                }}
              >
                <p className="mt-4 font-bold p-2 2xl:text-xl border-black rounded-md">
                  Gold
                </p>
                <p className="text-4xl 2xl:text-6xl">$250</p>
                <p className="2xl:text-2xl">User/Month</p>
                <div className="flex flex-col space-y-2 text-center">
                  <p className="2xl:text-2xl">
                    6 Month database discount Access
                  </p>
                  <p className="2xl:text-2xl">Winlands Events Invites</p>
                  <p className="2xl:text-2xl">15% off Winlads Merch</p>
                </div>

                <button
                  className="2xl:text-xl border-2 bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 2xl:py-4 2xl:px-6 rounded"
                  style={{ marginBottom: "10px" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <motion.img
        //variants={imageAnimate}
        src={jeep}
        alt=""
        className="static lg:absolute w-[750px] 4xl:w-[1500px] xl:w-[800px] lg:w-[800px]"
        style={{ top: "48%", left: "0px", zIndex: "3" }}
      />
    </motion.div>
  );
}

export default Fifthpage;
