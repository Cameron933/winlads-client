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
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0 }}
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
      }}
    >
      <div className="p-5 h-auto lg:h-screen" style={{ position: "relative" }}>
        <motion.div
          variants={textAnimate}
          className="static lg:absolute "
          style={{
            width: "300px",
            // position: "absolute",
            left: "310px",
            top: "25px",
            zIndex: "10",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2">Homewares, Trades & Services</h3>
            <p className="pb-2">
              Homewares, Trades & Services We ve teamed up with the best in the
              business. Get great deals on Furniture, homeware & decor,
              electrical, plumbing and more!
            </p>
          </div>
        </motion.div>

        <motion.img
          variants={stickAnimate}
          className="hidden lg:block"
          src={Vector1}
          alt=""
          style={{
            width: "170px",
            position: "absolute",
            right: "620px",
            top: "35px",
            zIndex: "2",
          }}
        />
        <motion.img
          variants={stickAnimate}
          className="hidden lg:block"
          src={Vector2}
          alt=""
          style={{
            width: "170px",
            position: "absolute",
            right: "750px",
            top: "35px",
            zIndex: "2",
          }}
        />
        <motion.img
          variants={stickAnimate}
          className="hidden lg:block"
          src={Vector3}
          alt=""
          style={{
            width: "190px",
            position: "absolute",
            right: "780px",
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
          className="static lg:absolute"
          style={{
            width: "350px",
            //position: "absolute",
            right: "220px",
            zIndex: "2",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2">Automotive</h3>
            <p className="pb-2">
              Your one-stop-shop for exclusive offers from Australia's leading
              performance & tuning workshops, panel beaters, aftermarket part &
              accessories, and everything else automotive
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={textAnimate}
          className="static lg:absolute"
          style={{
            width: "350px",
            //position: "absolute",
            left: "300px",
            top: "320px",
            zIndex: "2",
          }}
        >
          <div className="transition duration-700 hover:scale-105">
            <h3 className="font-bold mb-2">Merchandise</h3>
            <p className="pb-2">
              Exclusive merchandise offers and designs from both LMCT+ and our
              Benefits. Great quality swag from your favourite brands. Including
              some exclusive designs from bags, T shirts and more.
            </p>
          </div>
        </motion.div>
        <div
          className="static lg:absolute"
          style={{
            //position: "absolute",
            right: "300px",
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
            // transition={{ duration: 0.5, delay: 0.25 }}
            style={{ width: "700px" }}
            src={jeep2}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Secondpage;
