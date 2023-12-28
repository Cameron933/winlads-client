import React from 'react';
import ReactPlayer from 'react-player';
import Apple from '../../assets/images/welcomehome/apple.png';
import Google from '../../assets/images/welcomehome/google.png';
import { motion } from 'framer-motion';

const WelcomeHome2 = () => {



  return (
    <div className="w-full relative">
      {/* section 01 with ReactPlayer */}

      {/* <iframe
          className='w-screen h-full absolute top-0 left-0 opacity-50'
          src="https://www.youtube.com/embed/D_vOqkEgmY0?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /> */}
      <div className="mx-auto 2xl:max-w-[2400px] w-full px-3 lg:px-5 py-10 lg:py-16 z-10  relative">
        <ReactPlayer
          url='https://player.vimeo.com/video/898036697?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
          playing
          loop
          muted
          className="react-player mx-auto w-screen h-full absolute top-0 left-0 opacity-50"
        />
        <div className="flex items-center justify-center 2xl:gap-40 xl:gap-36 lg:gap-32 md:gap-8 sm:gap-6 gap-5 lg:flex-row flex-col">
          <div className="flex flex-col justify-center items-center  ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              200 <span className="text-white">+</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              Australian business partners
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              350 <span className="text-white">+</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              In savings through our mates rates <br /> discounts
            </motion.p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[#00F0FF] font-bold text-2xl lg:text3xl xl:text-4xl 2xl:text-6xl"
            >
              200 <span className="text-white">+</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: "-40%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white text-center text-sm md:text-base 2xl:text-lg"
            >
              stores you can redeem offers In <br /> person or online
            </motion.p>
          </div>
        </div>
        <div className="flex items-center justify-center xl:gap-8 md:gap-5 gap-3 mt-10">
          <div className="flex justify-center items-center">
            <img
              src={Apple}
              alt=""
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Google}
              alt=""
              className="cursor-pointer hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* section 02 */}

    </div>
  );
};

export default WelcomeHome2;
