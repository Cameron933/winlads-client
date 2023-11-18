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
        className="flex justify-center items-center text-white buttonBg"
        style={{
          //   display: "inline-block",
          borderRadius: "5px",
          position: "absolute",
          right: "45px",
          top: "80px",
          width: "131px",
          height: "49px",
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
          className="relative pt-6 pb-6 allcontent-group"
          style={{ height: "60%", zIndex: "4" }}
        >
          <div className="pt-4 dashcontent-group">
            <p
              className="font-light text-right uppercase text-sm"

            >
              With over 650+ businesses across 1000+ stores where you can
              accessexclusive discounts
            </p>
            <p
              className="font-light text-right uppercase text-md"

            >
              Australia Widefrom only $19.99 per month, opt-out anytime
            </p>
          </div>
          <div className="mt-4">
            <div className="flex mt-4 dashbtn-group">
              <div
                className="flex justify-center text-md font-bold items-center text-white buttonBg frontbtns"
                style={{
                  //   display: "inline-block",
                  borderRadius: "5px",
               
                  padding: 10,
                  height: "49px",
                  marginBottom: 10,
                  cursor: "pointer",
                }}
              >
                Continue to Dashboard
              </div>
            </div>
            <div className="flex mobile-btns">
              <img src={appstore} style={{ cursor: "pointer" }} />
              <img src={googleplay} style={{ cursor: "pointer" }} />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Showcase;
