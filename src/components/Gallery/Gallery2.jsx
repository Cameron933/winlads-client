import dragon from "../../assets/images/dragon.png";
import cloud from "../../assets/images/cloud.png";
import pineapple from "../../assets/images/pineapple.png";
import watermelon from "../../assets/images/home/gallery.png";
import { motion } from "framer-motion";
import Img1 from "../../assets/images/gallery/img1.png";
import Img2 from "../../assets/images/gallery/img2.png";
import Img3 from "../../assets/images/gallery/img3.png";
import Img4 from "../../assets/images/gallery/img4.png";
import Img5 from "../../assets/images/gallery/img5.png";

const Gallery2 = () => {
  return (
    <div className="w-full bg-gallery">
      <div className="flex flex-col items-center w-full px-3 lg:px-5  py-10 lg:py-16 gap-3">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
        >
          {" "}
          @Winlads
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold "
        >
          Follow Us On Instagram
        </motion.p>

        <div className="flex flex-col xl:space-y-8 space-x-4 py-8">
          {/* <div className="flex justify-center"><img src={Img1} alt="" className="w-48 xl:w-72" /></div> */}
          <br />
          <div className="grid grid-cols-4 xl:px-20 md:px-10 px-5 gap-2">
            <div className="col-span-5 md:col-span-1 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <img src={Img1} alt="" className="w-full hover:scale-105" />
                <img src={Img2} alt="" className="w-full hover:scale-105" />
              </div>
            </div>
            <div className="col-span-5 md:col-span-2">
              <img src={Img3} alt="" className="w-full hover:scale-105" />
            </div>
            <div className="col-span-5 md:col-span-1">
              <div className="flex flex-col gap-2">
                <img src={Img4} alt="" className="w-full hover:scale-105" />
                <img src={Img5} alt="" className="w-full hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;
