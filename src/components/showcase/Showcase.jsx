import jeepImg from "../../assets/images/jeep.png";
import logo from "../../assets/images/logo/logo.png";
import win from "../../assets/images/logo/win.png";
import ellipse from "../../assets/images/ellipse.png";
import ham from "../../assets/images/ham.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import Xlgoogleplay from "../../assets/images/2Xlgoogleplay.png";
import Xlappstore from "../../assets/images/2Xlappstore.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const imageAnimate = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const logoAnimate = {
  offscreen: { y: -30, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

function Showcase() {
  // ----------------------------------------

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      className="grid grid-cols-1 gap-2 lg:grid-cols-2"
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div
        className="flex justify-center 2xl:text-4xl px-4 py-2 2xl:px-8 2xl:py-6 items-center text-white buttonBg"
        style={{
          //   display: "inline-block",
          borderRadius: "5px",
          position: "absolute",
          right: "45px",
          top: "80px",
          cursor: "pointer",
        }}
      >
        Contact Us
      </div>

      <div>
        <div>
          <img src={ellipse} className="h-auto lg:h-screen" />
        </div>
        <img
          className="hidden lg:inline"
          src={logo}
          alt="logo"
          style={{ position: "absolute", top: "0px" }}
        />
        <img
          className="hidden lg:block w-[400px] 2xl:w-[800px]"
          src={win}
          alt="logo"
          style={{
            position: "absolute",
            top: "230px",
            left: "340px",
          }}
        />
        <img
          className="block lg:hidden"
          src={ham}
          alt="logo"
          style={{
            position: "absolute",
            top: "85px",
            left: "40px",
            width: "30px",
          }}
        />
        <motion.img
          variants={logoAnimate}
          className="block lg:hidden"
          src={win}
          alt="logo"
          style={{
            position: "absolute",
            top: "220px",
            left: "40px",
            width: "200px",
          }}
        />
        <motion.img
          variants={imageAnimate}
          className="hidden lg:block lg:w-[800px] 2xl:w-[1600px]"
          src={jeepImg}
          style={{
            position: "absolute",
            top: "300px",
            left: "40px",
            // width: "800px",
            zIndex: "2",
          }}
        />
        <motion.img
          className="block lg:hidden"
          src={jeepImg}
          style={{
            position: "absolute",
            top: "250px",
            left: "0px",
            // width: "700px",
            zIndex: "2",
          }}
        />
      </div>
      <div className="h-auto lg:h-screen">
        <div className="hidden lg:block" style={{ height: "40%" }}></div>
        <div
          className="relative pt-6 pb-6 allcontent-group"
          style={{ height: "60%", zIndex: "4" }}
        >
          <div className="pt-4 dashcontent-group">
            <p
              className="font-semibold text-right uppercase text-sm 2xl:text-4xl"

            >
              With over 650+ businesses across 1000+ stores where you can
              accessexclusive discounts
            </p>
            <p
              className="font-semibold text-right uppercase text-md 2xl:text-4xl"

            >
              Australia Widefrom only $19.99 per month, opt-out anytime
            </p>
          </div>
          <div className="mt-4">
            <div className="flex mt-4 dashbtn-group">
              <Link to="/register">
              <div
                className="flex justify-center px-4 py-2 2xl:px-8 2xl:py-6 2xl:text-4xl text-md font-bold items-center text-white buttonBg frontbtns"
                style={{
                  //   display: "inline-block",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Continue to Dashboard
              </div>
              </Link>
            
            </div>
            <div className="flex mobile-btns mt-4">
              <img src={appstore} style={{ cursor: "pointer" }} className="2xl:hidden"  />
              <img src={googleplay} style={{ cursor: "pointer" }} className="2xl:hidden" />
              <img src={Xlappstore} style={{ cursor: "pointer" }} className="hidden 2xl:block"  />
              <img src={Xlgoogleplay} style={{ cursor: "pointer" }} className="hidden 2xl:block" />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Showcase;
