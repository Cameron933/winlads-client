import jeep2 from "../../assets/images/jeep2.png";
import Ellipse3 from "../../assets/images/Ellipse3.png";

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
const textAnimate = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

function Fourthpage() {
  return (
    <>
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className="lg:hidden"
        style={{
          background:
            "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
        }}
      >
        <p className="text-lg  font-bold text-center uppercase tracking-widest p-4">
          Explore Exclusive MemberBenefit
        </p>
        <motion.div variants={textAnimate}>
          <div className="my-4 px-3">
            <h3 className="text-right" style={{ color: "#01819D" }}>
              Community of Enthusiast
            </h3>
            <p className="text-xs text-right" style={{ color: "#01819D" }}>
              Join a community of classic car enthusiasts. Share the excitement,
              the anticipation, and the joy of winning!
            </p>
          </div>
          <div className="my-4 px-3 ">
            <h3>Thrill of the draw</h3>
            <p className="text-xs">
              Experience the rush of our exciting class-leading promotions.
              Could you be the next lucky winner?
            </p>
          </div>
          <div className="my-4 px-3">
            <h3 className="text-right" style={{ color: "#01819D" }}>
              Frequent draws
            </h3>
            <p className="text-xs text-right" style={{ color: "#01819D" }}>
              We conduct our membership draws frequently, increasing your
              chances of changing your life forever.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3>Expert support</h3>
            <p className="text-xs">
              Got questions or need assistance? Our professional support team is
              always ready to help you navigate your journey with us.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3 className="text-right" style={{ color: "#01819D" }}>
              Trusted Benefitship
            </h3>
            <p className="text-xs text-right" style={{ color: "#01819D" }}>
              We ve partnered with reputable businesses nationwide to ensure our
              members receive only the best deals and offers.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3>Exclusive discounts</h3>
            <p className="text-xs">
              Unlock access to substantial discounts at businesses across
              Australia, all for a low monthly membership fee.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3 className="text-right" style={{ color: "#01819D" }}>
              Expertise at Your Service
            </h3>
            <p className="text-xs text-right" style={{ color: "#01819D" }}>
              Our specialized teams ensure smooth operations, while diverse
              faces represent our brand, ensuring a personalized and
              professional touch.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3>Australia-Wide Rewards</h3>
            <p className="text-xs">
              Enjoy exclusive discounts and benefits across Australia, from
              Sydney to Perth, making your membership truly worthwhile, no
              matter where you are.
            </p>
          </div>
          <div className="my-4 px-3">
            <h3 className="text-right" style={{ color: "#01819D" }}>
              Winlads Lux
            </h3>
            <p className="text-xs text-right" style={{ color: "#01819D" }}>
              Elevate your journey with Winlads Lux and get access to luxury
              savings, exclusive benefits, and the chance to win many luxury
              prizes.
            </p>
          </div>
        </motion.div>
        <div>
          <img src={jeep2} alt="" style={{ width: "750px" }} />
        </div>
      </motion.div>
      {/* --------------------------------------------------------------- */}
      <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className="relative hidden lg:block"
        style={{
          background:
            "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
        }}
      >
        <p
          className="text-4xl 2xl:text-8xl font-bold text-right uppercase tracking-widest p-4 relative"
          style={{ zIndex: "2" }}
        >
          Explore Exclusive MemberBenefit
        </p>

        <div
          className="grid grid-cols-2 gap-1 relative"
          style={{ zIndex: "2" }}
        >
          <div
            className="h-auto p-3 flex justify-center items-center"
            style={{}}
          >
            <motion.div
              // variants={{
              //   hidden: { opacity: 0, y: -75 },
              //   visible: { opacity: 1, y: 0 },
              // }}
              // initial="hidden"
              // animate={"visible"}
              // transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center items-center"
            >
              <div className="flex flex-col space-y-4 2xl:space-y-6">
                <motion.div variants={textAnimate}>
                  <div className="p-5 2xl:p-10 rounded-xl flex flex-col space-y-2 2xl:space-y-3 transition duration-700 hover:scale-105 bg-white">
                    <h3 className="2xl:text-4xl">Thrill of the draw</h3>
                    <p className="text-xs 2xl:text-2xl">
                      Experience the rush of our exciting class-leading
                      promotions. Could you be <br /> the next lucky winner?
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={textAnimate}>
                  <div className="p-5 2xl:p-10 rounded-xl flex flex-col space-y-2 2xl:space-y-3 transition duration-700 hover:scale-105 bg-white">
                    <h3 className="2xl:text-4xl">Expert support</h3>
                    <p className="text-xs 2xl:text-2xl">
                      Got questions or need assistance? Our professional support
                      team is always
                      <br /> ready to help you navigate your journey with us.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={textAnimate}>
                  <div className="p-5 2xl:p-10 rounded-xl flex flex-col space-y-2 2xl:space-y-3 transition duration-700 hover:scale-105 bg-white">
                    <h3 className="2xl:text-4xl">Exclusive discounts</h3>
                    <p className="text-xs 2xl:text-2xl">
                      Unlock access to substantial discounts at businesses
                      across Australia, all for a <br />
                      low monthly membership fee.
                    </p>
                  </div>
                </motion.div>
                <motion.div variants={textAnimate}>
                  <div className="p-5 2xl:p-10 rounded-xl flex flex-col space-y-2 2xl:space-y-3 transition duration-700 hover:scale-105 bg-white">
                    <h3 className="2xl:text-4xl">Australia-Wide Rewards</h3>
                    <p className="text-xs 2xl:text-2xl">
                      Enjoy exclusive discounts and benefits across Australia,
                      from Sydney to Perth,
                      <br /> making your membership truly worthwhile, no matter
                      where you are.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <div className="h-auto p-3 z-50" style={{}}>
            <motion.div
              // variants={{
              //   hidden: { opacity: 0, y: -75 },
              //   visible: { opacity: 1, y: 0 },
              // }}
              // initial="hidden"
              // animate={"visible"}
              // transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-end"
            >
              <div className="flex flex-col space-y-4 2xl:space-y-6">
                <div className="transition duration-700 hover:scale-105 bg-white rounded-xl">
                  <motion.div
                    variants={textAnimate}
                    className="p-5 2xl:p-10 flex flex-col space-y-2 2xl:space-y-3 rounded-xl"
                    style={{ borderColor: "#01819D" }}
                  >
                    <h3 className="text-right 2xl:text-4xl" style={{ color: "#01819D" }}>
                      Community of Enthusiast
                    </h3>
                    <p
                      className="text-xs text-right 2xl:text-2xl"
                      style={{ color: "#01819D" }}
                    >
                      Join a community of classic car enthusiasts. Share the
                      excitement, the anticipation,
                      <br /> and the joy of winning!
                    </p>
                  </motion.div>
                </div>
                <div className="transition duration-700 hover:scale-105 bg-white rounded-xl">
                  <motion.div
                    variants={textAnimate}
                    className="p-5 2xl:p-10 flex flex-col space-y-2 2xl:space-y-3 rounded-xl"
                    style={{ borderColor: "#01819D" }}
                  >
                    <h3 className="text-right 2xl:text-4xl" style={{ color: "#01819D" }}>
                      Frequent draws
                    </h3>
                    <p
                      className="text-xs text-right 2xl:text-2xl"
                      style={{ color: "#01819D" }}
                    >
                      We conduct our membership draws frequently, increasing
                      your chances of <br /> changing your life forever.
                    </p>
                  </motion.div>
                </div>
                <div className="transition duration-700 hover:scale-105 bg-white rounded-xl">
                  <motion.div
                    variants={textAnimate}
                    className="p-5 2xl:p-10 flex flex-col space-y-2 2xl:space-y-3 rounded-xl"
                    style={{ borderColor: "#01819D" }}
                  >
                    <h3 className="text-right 2xl:text-4xl" style={{ color: "#01819D" }}>
                      Trusted Benefitship
                    </h3>
                    <p
                      className="text-xs text-right 2xl:text-2xl"
                      style={{ color: "#01819D" }}
                    >
                      We ve partnered with reputable businesses nationwide to
                      ensure our
                      <br />
                      members receive only the best deals and offers.
                    </p>
                  </motion.div>
                </div>
                <div className="transition duration-700 hover:scale-105 bg-white rounded-xl">
                  <motion.div
                    variants={textAnimate}
                    className="p-5 2xl:p-10 flex flex-col space-y-2 2xl:space-y-3 rounded-xl"
                    style={{ borderColor: "#01819D" }}
                  >
                    <h3 className="text-right 2xl:text-4xl" style={{ color: "#01819D" }}>
                      Expertise at Your Service
                    </h3>
                    <p
                      className="text-xs text-right 2xl:text-2xl"
                      style={{ color: "#01819D" }}
                    >
                      Our specialized teams ensure smooth operations, while
                      diverse faces <br /> represent our brand, ensuring a
                      personalized and professional touch.
                    </p>
                  </motion.div>
                </div>
                <div className="transition duration-700 hover:scale-105 bg-white rounded-xl">
                  <motion.div
                    variants={textAnimate}
                    className="p-5 2xl:p-10 flex flex-col space-y-2 2xl:space-y-3 rounded-xl"
                    style={{ borderColor: "#01819D" }}
                  >
                    <h3 className="text-right 2xl:text-4xl" style={{ color: "#01819D" }}>
                      Winlads Lux
                    </h3>
                    <p
                      className="text-xs text-right 2xl:text-2xl"
                      style={{ color: "#01819D" }}
                    >
                      Elevate your journey with Winlads Lux and get access to
                      luxury savings,
                      <br /> exclusive benefits, and the chance to win many
                      luxury prizes.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.img
          variants={imageAnimate}
          // variants={{
          //   hidden: { opacity: 0, y: 75 },
          //   visible: { opacity: 1, y: 0 },
          // }}
          // initial="hidden"
          // animate={"visible"}
          // transition={{ duration: 0.5, delay: 0.25 }}
          src={jeep2}
          alt=""
          className="absolute w-[750px] 2xl:w-[1500px] left-[30%]"
          style={{ top: "40%", zIndex: "2" }}
        />
        <img
          src={Ellipse3}
          alt=""
          className="absolute"
          style={{ top: "-50px", right: "0px", zIndex: "1", width: "63%" }}
        />
      </motion.div>
    </>
  );
}

export default Fourthpage;
