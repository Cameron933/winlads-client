import jeep2 from "../../assets/images/jeep2.png";
import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";

import { motion, useInView, useAnimation } from "framer-motion";

const imageAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const stickAnimate = {
  offscreen: { y: 0, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { duration: 0.4 },
  },
};

const textAnimate = {
  offscreen: { y: -20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const textAnimate2 = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Secondpage() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0 }}
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div className="p-5 md:pl-16 pl-8 h-auto lg:h-screen lg:px-40 2xl:px-80" style={{ position: "relative" }}>
        <motion.div
          variants={textAnimate}
          className="static lg:absolute xl:w-[300px] 2xl:w-[600px]"
          style={{
            // position: "absolute",
            top: "25px",
            zIndex: "10",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2 text-md 2xl:text-4xl">Homewares, Trades & Services</h3>
            <p className="pb-2 text-md 2xl:text-4xl">
              Homewares, Trades & Services We ve teamed up with the best in the
              business. Get great deals on Furniture, homeware & decor,
              electrical, plumbing and more!
            </p>
          </div>
        </motion.div>

        <motion.img
          variants={stickAnimate}
          className="hidden lg:block lg:w-[170px] 2xl:w-[340px] lg:right-[620px] 2xl:right-[1200px]"
          src={Vector1}
          alt=""
          style={{
            position: "absolute",
            top: "35px",
            zIndex: "2",
          }}
        />
        <motion.img
          variants={stickAnimate}
          className="hidden lg:block lg:w-[170px] 2xl:w-[340px] lg:right-[750px] 2xl:right-[2000px]"
          src={Vector2}
          alt=""
          style={{
            position: "absolute",
            top: "35px",
            zIndex: "2",
          }}
        />
        <motion.img
          variants={stickAnimate}
          className="hidden lg:block lg:w-[190px] 2xl:w-[380px] lg:right-[750px] 2xl:right-[2000px]"
          src={Vector3}
          alt=""
          style={{
            position: "absolute",
            top: "280px",
            zIndex: "2",
          }}
        />
        <img
          src={Ellipse2}
          alt=""
          style={{
            position: "absolute",
            right: "0px",
            top: "-500px",
            zIndex: "1",
          }}
        />
        <motion.div
          variants={textAnimate2}
          className="static lg:absolute xl:w-[350px] 2xl:w-[700px]"
          style={{
            //position: "absolute",
            right: "240px",
            zIndex: "2",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2 2xl:text-4xl">Automotive</h3>
            <p className="pb-2 2xl:text-4xl">
              Your one-stop-shop for exclusive offers from Australia's leading
              performance & tuning workshops, panel beaters, aftermarket part &
              accessories, and everything else automotive
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={textAnimate}
          className="static lg:absolute xl:w-[350px] 2xl:w-[700px]"
          style={{
            //position: "absolute",
            top: "320px",
            zIndex: "2",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2 2xl:text-4xl">Merchandise</h3>
            <p className="pb-2 2xl:text-4xl">
              Exclusive merchandise offers and designs from both Winlads and our
              Benefits. Great quality swag from your favourite brands. Including
              some exclusive designs from bags, T shirts and more.
            </p>
          </div>
        </motion.div>
        <div
          className="static lg:absolute lg:w-[700px] 2xl:w-[1500px] lg:right-[300px] 2xl:right-[800px]"
          style={{
            //position: "absolute",
            top: "130px",
            zIndex: "2",
          }}
        >
          <motion.img
            variants={imageAnimate}
            // variants={{
            //   hidden: { opacity: 0, y: -75 },
            //   visible: { opacity: 1, y: 0 },
            // }}
            // initial="hidden"
            // animate="visible"
            // transition={{ duration: 0.5, delay: 0.25 }
            src={jeep2}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Secondpage;
