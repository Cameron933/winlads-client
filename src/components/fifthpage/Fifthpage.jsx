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
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      className="relative"
      style={{
        paddingTop: "150px",
        paddingBottom: "90px",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <p
        className="text-lg text-center font-bold uppercase tracking-widest p-4 lg:text-4xl lg:text-right relative"
        style={{ zIndex: "2" }}
      >
        Choose a server plan
      </p>
      <div className="lg:grid grid-cols-3 gap-1">
        <div
          className="hidden lg:block"
          style={{ background: "", height: "50px" }}
        ></div>
        <div className="lg:col-span-2 h-auto" style={{ background: "" }}>
          <div>
            <div
              className="lg:grid grid-cols-2 gap-y-10 relative"
              style={{ zIndex: "2" }}
            >
              <div className="p-0 mb-2 lg:mb-0" style={{ background: "" }}>
                <div
                  className="flex flex-col justify-center items-center rounded-xl m-auto transition duration-700 hover:scale-105 lg:mr-0"
                  style={{
                    width: "80%",
                    background:
                      "linear-gradient(99deg, #43E3ED 19.06%, #01819D 80.34%)",
                    //margin: "auto",
                    //marginRight: "0px",
                  }}
                >
                  <p className="mt-4 border-2 p-2 border-black rounded-md">
                    Standard
                  </p>
                  <p className="my-1" style={{ fontSize: "50px" }}>
                    $10
                  </p>
                  <p>user/month</p>
                  <p className="my-1">2 Day database discount Access</p>
                  <p>Winlands+ Events Invites</p>
                  <p className="my-1">10% off LMTC+Merch</p>
                  <button
                    className="my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{ background: "black", marginBottom: "10px" }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="p-0 mb-2 lg:mb-0" style={{ background: "" }}>
                <div
                  className="flex flex-col justify-center items-center rounded-xl transition duration-700 hover:scale-105"
                  style={{
                    width: "80%",
                    background:
                      "linear-gradient(99deg, #ED4343 19.06%, #9D1D01 80.34%)",
                    margin: "auto",
                  }}
                >
                  <p className="mt-4 border-2 p-2 border-black rounded-md">
                    Bronz
                  </p>
                  <p className="my-1" style={{ fontSize: "50px" }}>
                    $30
                  </p>
                  <p>user/month</p>
                  <p className="my-1">1 Week database discount Access</p>
                  <p>Winlands+ Events Invites</p>
                  <p className="my-1">10% off LMTC+Merch</p>
                  <button
                    className="my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{ background: "black", marginBottom: "10px" }}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
              <div className="p-0 mb-2 lg:mb-0" style={{ background: "" }}>
                <div
                  className="flex flex-col justify-center items-center rounded-xl m-auto transition duration-700 hover:scale-105 lg:mr-0"
                  style={{
                    width: "80%",
                    background:
                      "linear-gradient(99deg, #46ED43 19.06%, #0D9D01 80.34%)",
                    //margin: "auto",
                    //marginRight: "0px",
                  }}
                >
                  <p className="mt-4 border-2 p-2 border-black rounded-md">
                    Silver
                  </p>
                  <p className="my-1" style={{ fontSize: "50px" }}>
                    $100
                  </p>
                  <p>user/month</p>
                  <p className="my-1">1 Month database discount Access</p>
                  <p>Winlands+ Events Invites</p>
                  <p className="my-1">10% off LMTC+Merch</p>
                  <button
                    className="my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    style={{ background: "black", marginBottom: "10px" }}
                  >
                    Choose Plan
                  </button>
                </div>
                {/* <Plancard
                  price="$100"
                  plan="Silver"
                  a="6 Month database discount Access"
                  b="Winlands+ Events Invites"
                  c="15% off LMTC+Merch"
                  bg="linear-gradient(99deg, #46ED43 19.06%, #0D9D01 80.34%)"
                /> */}
              </div>
              <div className="p-0 mb-2 lg:mb-0" style={{ background: "" }}>
                <Plancard
                  price="$250"
                  plan="Gold"
                  a="6 Month database discount Access"
                  b="Winlands+ Events Invites"
                  c="15% off LMTC+Merch"
                  bg="linear-gradient(99deg, #FFF400 19.06%, #CA9E03 80.34%)"
                />
                {/* lll */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.img
        //variants={imageAnimate}
        src={jeep}
        alt=""
        className="static lg:absolute"
        style={{ top: "48%", left: "0px", width: "750px", zIndex: "3" }}
      />
    </motion.div>
  );
}

export default Fifthpage;
