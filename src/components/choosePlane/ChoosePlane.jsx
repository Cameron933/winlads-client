import { useNavigate } from "react-router-dom";
// import Icon from "../../assets/images/chooseplane/Icons.png";
// import Car from "../../assets/images/chooseplane/cjip.png";
import { motion } from "framer-motion";
import Card from "../../components/SubCard/SubCard"

const ChoosePlane = () => {

  const navigate = useNavigate();
  return (
    <>
         <motion.p
          initial={{ opacity: 0, y: "-40%" }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5, delay: 0 }}
          className="my-3 text-center text-base sm:text-lg 2xl:text-xl special:text-3xl font-bold xl:tracking-[18px] sm:tracking-[16px] tracking-[12px] uppercase"
        >
          {" "}
          Choose a Subscription plan
        </motion.p>
    <div className="w-full bg-chose-plan">
      <div className="flex flex-col items-center w-full px-3 lg:px-5  py-10 lg:py-16 gap-10">
   

        {/* <div className="flex flex-col gap-3">

          <div className="grid xl:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-4 px-3 xs:px-32 md:px-0">
            <div className="rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black" style={{ background: 'linear-gradient(rgb(0, 148, 255) 0%, rgb(0, 52, 124) 100%)' }}>
              <p className="text-black text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-8">Starter Tier</p>
              <div className="flex flex-col justify-between items-center mb-10">
                <p className="font-bold text-lg 2xl:text-xl" style={{ color: 'black' }}><span className="text-6xl lg:text-7xl">01</span>
                  <span className="text-xs">FREE ENTRIES</span></p>
              </div>
              <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-10">
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">$9.99 per month</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Partner Store Discounts: 10% discount for 1
                    month upon sign-up</p>
                </div>
              </div>
              <div className="rounded-md border-2 border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto" style={{ backgroundColor: 'rgb(0, 130, 225)' }}><button className="flex flex-row items-center gap-2">
                <p className="text-white text-xs 2xl:text-lg">SIGNED UP FOR FREE</p>
              </button></div>
            </div>
            <div className="rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black" style={{ background: 'linear-gradient(rgb(255, 71, 0) 0%, rgb(97, 28, 0) 100%)' }}>
              <p className="text-black text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-8">Boomer Tier</p>
              <div className="flex flex-col justify-between items-center mb-10">
                <p className="font-bold text-lg 2xl:text-xl" style={{ color: 'black' }}><span className="text-6xl lg:text-7xl">03</span>
                  <span className="text-xs">FREE ENTRIES</span></p>
              </div>
              <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-10">
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">$19.99 per month</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Access to partner store database at a 10%
                    discount for 3 months</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6"> Partner Store Discounts: 10% discount for 3
                    months</p>
                </div>
              </div>
              <div className="rounded-md border-2 border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto" style={{ backgroundColor: 'rgb(207, 58, 0)' }}><button className="flex flex-row items-center gap-2">
                <p className="text-white text-xs 2xl:text-lg">SIGNED UP FOR FREE</p>
              </button></div>
            </div>
            <div className="rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black" style={{ background: 'linear-gradient(rgb(0, 236, 255) 0%, rgb(0, 97, 104) 100%)' }}>
              <p className="text-black text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-8">Platinum Tier</p>
              <div className="flex flex-col justify-between items-center mb-10">
                <p className="font-bold text-lg 2xl:text-xl" style={{ color: 'black' }}><span className="text-6xl lg:text-7xl">10</span>
                  <span className="text-xs">FREE ENTRIES</span></p>
              </div>
              <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-10">
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">$49.99 per month</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Partner Store Database Access</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Access to partner store database at a 10%-15%
                    discount for 3 months</p>
                </div>
                <div className>
                  <p className="capitalize flex justify-end text-xs cursor-pointer" style={{ color: 'rgb(0, 125, 135)' }}>view more
                  </p>
                </div>
              </div>
              <div className="rounded-md border-2 border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto" style={{ backgroundColor: 'rgb(0, 125, 135)' }}><button className="flex flex-row items-center gap-2">
                <p className="text-white text-xs 2xl:text-lg">SIGNED UP FOR FREE</p>
              </button></div>
            </div>
            <div className="rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black" style={{ background: 'linear-gradient(rgb(255, 190, 0) 0%, rgb(118, 96, 0) 100%)' }}>
              <div className="flex items-center justify-center gap-2 text-center absolute rounded-t-xl top-0 left-0 w-full py-2 bg-black font-semibold" style={{ color: 'rgb(255, 190, 0)' }}><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                </path>
              </svg> Most Popular</div>
              <p className="text-black text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-8">Gold Tier</p>
              <div className="flex flex-col justify-between items-center mb-10">
                <p className="font-bold text-lg 2xl:text-xl" style={{ color: 'black' }}><span className="text-6xl lg:text-7xl">25</span>
                  <span className="text-xs">FREE ENTRIES</span></p>
              </div>
              <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-10">
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">$100 per month</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Partner Store Database Access</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Access to partner store database at a 15%
                    discount for 12 months</p>
                </div>
                <div className>
                  <p className="capitalize flex justify-end text-xs cursor-pointer" style={{ color: 'rgb(0, 0, 0)' }}>view more</p>
                </div>
              </div>
              <div className="rounded-md border-2 border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto" style={{ backgroundColor: 'rgb(0, 0, 0)' }}><button className="flex flex-row items-center gap-2">
                <p className="text-white text-xs 2xl:text-lg">SIGNED UP FOR FREE</p>
              </button></div>
            </div>
            <div className="rounded-2xl px-2 pt-12 pb-4 shadow-lg shadow-gray-400 relative flex flex-col border-2 border-black" style={{ background: 'linear-gradient(rgb(35, 40, 46) 0%, rgb(0, 0, 0) 100%)' }}>
              <p className="text-white text-center uppercase text-lg lg:text-xl 2xl:text-2xl font-bold pb-8">Black Tier</p>
              <div className="flex flex-col justify-between items-center mb-10">
                <p className="font-bold text-lg 2xl:text-xl" style={{ color: 'rgb(255, 255, 255)' }}><span className="text-6xl lg:text-7xl">150</span> <span className="text-xs">FREE ENTRIES</span></p>
              </div>
              <div className="flex flex-col space-y-2  border-2 border-black bg-white px-2 py-4 rounded-xl mb-10">
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">$500 per month</p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">Partner Store Discounts rates ranging upto 20%
                  </p>
                </div>
                <div className="flex flex-row items-start gap-2"><img src="/src/assets/greenCorrect.png" alt="" />
                  <p className="text-black text-xs 2xl:text-[16px] leading-6">12 months access to premium merchant discounts
                    upto 20%.</p>
                </div>
                <div className>
                  <p className="capitalize flex justify-end text-xs cursor-pointer" style={{ color: 'rgb(71, 90, 121)' }}>view more
                  </p>
                </div>
              </div>
              <div className="rounded-md border-2 border-white flex flex-row justify-center py-2 hover:scale-105 hover:transition-transform ease-out duration-300 mt-auto" style={{ backgroundColor: 'rgb(71, 90, 121)' }}><button className="flex flex-row items-center gap-2">
                <p className="text-white text-xs 2xl:text-lg">SIGNED UP FOR FREE</p>
              </button></div>
            </div>
          </div>
          <div className="flex w-full 2xl:max-w-[2400px]  gap-3 lg:flex-row flex-col" style={{ display: 'none' }}>


     
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: "30%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#0094FF] border-2 border-black text-white rounded-lg shadow h-fit"
            >
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Starter Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                01 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$9.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Partner Store Discounts: 10% discount for 1 month upon
                    sign-up{" "}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    $9.99 per month <br />
                    <br />
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button onClick={() => navigate('/register')} className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: "-30%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#366B71] text-white rounded-lg shadow h-fit"
            >
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Boomer Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                03 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$19.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 10% discount for 3
                    months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Discounts: 10% discount for 3 months</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button onClick={() => navigate('/register')} className="w-full hover:bg-white py-2 rounded-lg text-[#fff] hover:text-[#01819D] bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: "30%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#fff] text-[#01819D] rounded-lg shadow h-fit"
            >
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Platinum Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                10 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$49.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Database Access</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$9.99 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 10% - 15% discount for
                    3 months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Partner Store Discounts: 10% - 15% discount for 6 months
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button onClick={() => navigate('/register')} className="w-full hover:bg-[#808080] py-2 rounded-lg text-[#fff] hover:text-[#fff] bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </motion.div>
          </div>

          <div className="flex w-full 2xl:max-w-[2400px]  gap-3 lg:flex-row flex-col lg:relative " style={{ display: 'none' }}>
            <motion.img
              initial={{ opacity: 0, x: "-40%" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.8 }}
              src={Car}
              alt=""
              viewport={{ once: true }}
              className="absolute lg:w-[600px] 2xl:w-[700px] special:w-[780px] left-0 bottom-0 hidden lg:block"
            />

  
            <div className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 flex items-center  justify-center lg:order-1 order-1">
              <motion.img
                initial={{ opacity: 0, y: "-40%" }}
                whileInView={{ opacity: 1, y: "0" }}
                transition={{ duration: 0.8 }}
                src={Car}
                alt=""
                className="w-full block lg:hidden "
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: "-30%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-gradient-to-r from-[#FFF401] to-[#CA9E03] text-black rounded-lg shadow h-fit lg:order-2 lg:mt-[-106px] xl:mt-[-136px] 2xl:mt-[-131px] special:mt-[-170px]"
            >
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Gold Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                25 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$100 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Database Access</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Access to partner store database at a 15% discount for 12
                    months
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Urgency Program</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button onClick={() => navigate('/register')} className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: "30%" }}
              whileInView={{ opacity: 1, y: "0" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="max-w-sm w-full 2xl:max-w-lg special:max-w-2xl p-6 xl:py-8 special:py-10 bg-[#1F1F1F] text-white rounded-lg shadow h-fit lg:order-3 "
            >
              <p className="text-lg xl:text-xl special:text-2xl mb-3 lg:mb-5 special:mb-6">
                Black Tier
              </p>

              <p className="text-xl xl:text-2xl special:text-3xl font-bold text-center mb-3 lg:mb-5 special:mb-6">
                150 FREE ENTRIES
              </p>

              <div className="w-full flex flex-col gap-3 xl:gap-5 special:gap-6">
                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>$500 per month</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Partner Store Discounts rates ranging upto 20%</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    12 months access to premium merchant discounts upto 20%{" "}
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>
                    Exclusive perks and privileges tailored for Black Tier
                    members
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Winlads OG member Eligibility after 6 months</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads Urgency Program</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={Icon} alt="" className="w-[20px]" />
                  <p>Access to Winlads limited and Public Events</p>
                </div>
              </div>

              <div className="flex items-center justify-center mt-3 lg:mt-5 special:mt-6">
                <button onClick={() => navigate('/register')} className="w-full bg-white py-2 rounded-lg text-[#01819D] hover:text-white hover:bg-[#01819D] xl:text-lg special:text-xl special:py-3">
                  SIGNED UP FOR FREE
                </button>
              </div>
            </motion.div>
          </div>
        </div> */}
         <div className="grid xl:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-4 px-3 xs:px-32 md:px-0">
          <Card
            title="Starter Tier"
            // titleColor="white"
            title2="01 FREE ENTRY"
            titleColor2="black"
            // price="$9.99"
            desc1="$9.99 per month"
            // desc2="Referral Commission: 2.5%"
            desc2="Partner Store Discounts: 10% discount for 1 month upon sign-up"
            desc3="Virtual access to Winlads Club Day"
            // descColor="white"
            buttonColor="#0082E1"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP FOR FREE"
            bgColorFrom="#0094FF"
            bgColorTo="#00347C"
            // point1={Correct}
            // point2={Correct}
            // point3={Correct}
            titleColor="black"
            // btnword="Get started now"
          />
          <Card
            bgColorFrom="#FF4700"
            bgColorTo="#611C00"
            title="Boomer Tier"
            titleColor="black"
            // titleColor="white"
            title2="03 FREE ENTRIES"
            titleColor2="black"
            // price="$19.99"
            desc1="$19.99 per month"
            // desc2="Referral Commission: 5%"
            desc2="Access to partner store database at a 10% discount for 3 months"
            desc3=" Partner Store Discounts: 10% discount for 3 months"
            // descColor="white"
            buttonColor="#CF3A00"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP FOR FREE"
            // point1={Correct}
            // point2={Correct}
            // point3={Correct}
            // point4={Correct}
          />
          <Card
            bgColorFrom="#00ECFF"
            bgColorTo="#006168"
            title="Platinum Tier"
            titleColor="black"
            // titleColor="[#01819D]"
            title2="10 FREE ENTRIES"
            titleColor2="black"
            // price="$49.99"
            desc1="$49.99 per month"
            desc2="Partner Store Database Access"
            desc3="Partner Store Discounts: 10%-15% discount for 6 months"
            desc4="Access to Winlads Public Events"
            desc5="Access to partner store database at a 10%-15% discount for 3 months"
            // descColor="[#01819D]"
            buttonColor="#007D87"
            arrowColor="white"
            buttonTextColor="white"
            btnword="SIGN UP FOR FREE"
            // point1={Correct}
            // point2={Correct}
            // point3={Correct}
            // point4={Correct}
            // point5={Correct}
          />
          <Card
            bgColorFrom="#FFBE00"
            bgColorTo="#766000"
            mostPopular={true}
            title="Gold Tier"
            titleColor="black"
            // titleColor="white"
            title2="25 FREE ENTRIES"
            titleColor2="black"
            // price="$100"
            desc1="$100 per month"
            // desc2="Premium Tier"
            desc2="Partner Store Database Access"
            desc3="Access to Winlads Urgency Program"
            desc4="Access to partner store database at a 15% discount for 12 months"
            desc5="Access to Winlads Public Events"
            // descColor="white"
            buttonColor="#000000"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP FOR FREE"
            // point1={Correct}
            // point2={Correct}
            // point3={Correct}
            // point4={Correct}
            // point5={Correct}
            // point6={Correct}
          />
          <Card
            bgColorFrom="#23282E"
            bgColorTo="#000"
            title="Black Tier"
            titleColor="white"
            // titleColor="white"
            title2="150 FREE ENTRIES"
            titleColor2="#FFF"
            // price="$500"
            desc1="$500 per month"
            desc2="Partner Store Discounts rates ranging upto 20%"
            desc3="Access to Winlads Urgency Program"
            desc4="Exclusive perks and privileges tailored for Black Tier members"
            desc5="Winlads OG member Eligibility after 6 months"
            desc6="12 months access to premium merchant discounts upto 20%."
            desc7="Access to Winlads limited and Public Events"
            // descColor="white"
            buttonColor="#475A79"
            arrowColor="[#01819D]"
            buttonTextColor={"white"}
            btnword="SIGN UP FOR FREE"
            classNames={'col-span-2 md:col-span-1'}
            // point1={Correct}
            // point2={Correct}
            // point3={Correct}
            // point4={Correct}
            // point5={Correct}
            // point6={Correct}
            // point7={Correct}
          />
          {/* <Card />
        <Card />
        <Card /> */}
        </div>
      </div>

    </div>
    </>
  );
};

export default ChoosePlane;
