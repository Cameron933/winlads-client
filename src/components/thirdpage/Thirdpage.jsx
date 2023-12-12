import jeep3 from "../../assets/images/jeep3.png";
import partner1 from "../../assets/images/partners/partner1.png";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.png";
import partner5 from "../../assets/images/partners/partner5.png";
import partner6 from "../../assets/images/partners/partner6.png";
import carVideo from "../../assets/images/carAnim.mp4";
import tick from "../../assets/images/tick.png";

import { motion, useInView, useAnimation } from "framer-motion";

const imageAnimate = {
  offscreen: { x: -50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Thirdpage() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0 }}
      style={{
        paddingBottom: "50px",
        height: "auto",
        position: "relative",
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div className=" flex justify-center p-2 4xl:p-4 relative xl:mx-32 lg:mx-24 items-center">
    
          <video
            className="video"
            width="70%"
            height="250px"
            controls
          >
            <source src={carVideo} type="video/mp4" />
          </video>


      </div>
      <div className="lg:grid grid-cols-2 gap-2 md:pl-8 ">

        {/* <motion.div
          variants={imageAnimate}
          // variants={{
          //   hidden: { opacity: 0, x: 75 },
          //   visible: { opacity: 1, x: 0 },
          // }}
          // initial="hidden"
          // animate={"visible"}
          // transition={{ duration: 0.5, delay: 0.25 }}
          className="relative"
        >
          <img src={jeep3} alt="" style={{ width: "1700px" }} />
        </motion.div> */}
      </div>
      <div className="md:pr-0 2xl:pr-10 pt-10" style={{ background: "white" }}>
        <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-10" style={{ letterSpacing: '12px' }}>
          SOME OUR PARTNERS
        </p>
        {/* <p className="text-lg 4xl:text-8xl xl:text-6xl md:text-4xl font-bold uppercase tracking-widest p-4 text-center lg:text-4xl lg:text-right 4xl:text-right xl:text-right">
          Some our Partners
        </p> */}
        <div className="flex justify-center lg:justify-center ml-10 lg:ml-0">
          <div className="m-5">
            <img src={partner5} alt="" className="w-[180px] 2xl:w-[360px]" />
          </div>
          <div className="m-5">
            <img src={partner6} alt="" className="w-[180px] 2xl:w-[360px]" />
          </div>
          {/* <div className="m-5">
            <img src={partner3} alt="" style={{ width: "180px" }} />
          </div>
          <div className="m-5">
            <img src={partner4} alt="" style={{ width: "180px" }} />
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Thirdpage;
