import jeepImg from "../../assets/images/jeep.png";
import logo from "../../assets/images/logo/logo.png";
import win from "../../assets/images/logo/win.png";
import ellipse from "../../assets/images/ellipse.png";
import ham from "../../assets/images/ham.png";
import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";

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
      className="grid grid-cols-1 gap-2 lg:grid-cols-2 gap-0"
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{
          //   display: "inline-block",
          borderRadius: "5px",
          position: "absolute",
          right: "45px",
          top: "80px",
          width: "131px",
          height: "49px",
          background: "linear-gradient(93deg, #43E3ED 1.1%, #01819D 97.54%)",
          cursor: "pointer",
        }}
      >
        Sign Up
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
          className="hidden lg:block"
          src={win}
          alt="logo"
          style={{
            position: "absolute",
            top: "230px",
            left: "340px",
            width: "400px",
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
          className="hidden lg:block"
          src={jeepImg}
          style={{
            position: "absolute",
            top: "300px",
            left: "40px",
            width: "800px",
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
            width: "700px",
            zIndex: "2",
          }}
        />
      </div>
      <div className="h-auto lg:h-screen">
        <div className="hidden lg:block" style={{ height: "40%" }}></div>
        <div
          className="pr-10 relative pt-6 pb-6"
          style={{ height: "60%", zIndex: "4" }}
        >
          <div className="pt-4">
            <p
              className="font-light text-right uppercase"
              style={{ fontSize: "12.3px" }}
            >
              With over 650+ businesses across 1000+ stores where you can
              accessexclusive discounts
            </p>
            <p
              className="font-light text-right uppercase"
              style={{ fontSize: "12.3px" }}
            >
              Australia Widefrom only $19.99 per month, opt-out anytime
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-end">
              <img src={appstore} style={{ cursor: "pointer" }} />
            </div>
            <div className="flex justify-end mt-4">
              <img src={googleplay} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Showcase;
