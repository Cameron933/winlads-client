import React from "react";
import { motion } from "framer-motion";

const GetStart = () => {
  return (
    <div className="flex items-center justify-center bg-welcome2">
      <div className="mx-auto 2xl:max-w-[2400px]   w-full px-3 lg:px-5 py-10 lg:py-16 bg-welcome2">
        <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold uppercase xl:tracking-[18px] sm:tracking-[16px] tracking-[12px]"
        >
          {" "}
          Empowering Lives Through Winlads
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: "40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-5 sm:mt-6 lg:mt-8 text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
        >
          A Journey of Giving Back At Winlads, our pursuit extends beyond
          creating exceptional experiences; it encompasses a heartfelt
          dedication to transforming lives and fostering positive change within
          communities. We firmly believe in the profound impact of giving back
          and are driven by a vision to make a meaningful difference in the
          lives of individuals worldwide.
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-5 sm:mt-6 lg:mt-8 text-center w-10/12 mx-auto text-xs sm:text-sm md:text-base xl:text-base special:text-lg"
        >
          Picture this: you're kicking back, chilling, and earning easy
          cash—yeah, it's possible! We've got a stash of unreal deals waiting
          for ya. Plus, sling our program to your mates, and you'll be raking in
          dosh on the side. No worries, it's that easy!
        </motion.p> */}

        {/* <div className="mt-5 sm:mt-6 lg:mt-8 flex items-center justify-center">
            <motion.button
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="font-bold text-base xl:text-lg 2xl:text-xl special:text-3xl px-3 2xl:px-5 special:px-8 py-2 2xl:py-3 special:py-5 text-[#d4d4d4] bg-black rounded-lg hover:text-white hover:bg-black/75"
            >
              Get Started
            </motion.button>
          </div> */}
      </div>
    </div>
  );
};

export default GetStart;
