import jeep2 from "../../assets/images/jeep2.png";
import Car from "../../assets/images/car.jpeg";
import carVideo from "../../assets/images/carAnim.mp4";
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

function ChechSecondPage() {
    return (
        <motion.div
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0 }}
            style={{
                background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)",
            }}
            className="pt-24 overflow-hidden"
        >
          
            <p className="font-bold text-center text-lg md:text-xl xl:text-lg 2xl:text-2xl special:text-3xl mb-10" style={{ letterSpacing: '12px' }}>
                WINLADS SERVICES
            </p>

            <div className="p-5 md:pl-16 pl-8 h-auto lg:h-screen  lg:px-40 xl:px-32 4xl:px-80 relative" >
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-2/5 w-full xl:max-w-[680px]"
                    >

                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Homewares, Trades & Services</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Homewares, Trades & Services We ve teamed up with the best in the
                                business. Get great deals on Furniture, homeware & decor,
                                electrical, plumbing and more!
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={textAnimate2}
                        className="xl:w-1/3 w-full"
                        style={{
                            //position: "absolute",
                            right: "240px",
                            zIndex: "2",
                        }}
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Automotive</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl">
                                Your one-stop-shop for exclusive offers from Australia's leading
                                performance & tuning workshops, panel beaters, aftermarket part &
                                accessories, and everything else automotive
                            </p>
                        </div>
                    </motion.div>
                </div>

                <img
                    src={Ellipse2}
                    alt=""
                    className="-z-10 xl:z-[1] hidden"
                    style={{
                        position: "absolute",
                        right: "0px",
                        top: "-500px",
                    }}
                />
                <div className="flex flex-col xl:flex-row xl:justify-between items-center mt-0 md:mt-10">
                    <motion.div
                        variants={textAnimate}
                        className="xl:w-3/5 w-full xl:max-w-[680px]"
                    >
                        <div className="transition duration-700 hover:scale-105">
                            <h3 className="font-bold mb-2 text-md xl:text-2xl 4xl:text-4xl">Merchandise</h3>
                            <p className="pb-2 text-md xl:text-xl 4xl:text-4xl pr-4">
                                Exclusive merchandise offers and designs from both Winlads and our
                                Benefits. Great quality swag from your favourite brands. Including
                                some exclusive designs from bags, T shirts and more.
                            </p>
                        </div>
                    </motion.div>
                    <div
                        className="xl:scale-150 xl:ml-28"
                    >
                        <motion.img
                            variants={imageAnimate}
                            src={jeep2}
                            className="xl:w-1/2 w-full"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}


export default ChechSecondPage

