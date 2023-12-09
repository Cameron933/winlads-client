import "./GoldCard.css";

const GoldCard = () => {
  return (
    <div className="cardBg rounded-3xl px-4 special:px-8 2xl:px-6 flex flex-row justify-between py-4 special:py-8 2xl:py-4 cursor-pointer">
      {/* <div className="gold-card-inner-sec1"> */}
      <div className="flex flex-col xl:space-y-2 space-y-1 px-2">
        <span className="xl:text-4xl font-bold text-3xl 2xl:test-5xl special:text-7xl main-t">
          Gold
        </span>
        <span className="text-xs font-bold xl:text-xl 2xl:text-2xl special:text-3xl">
          Expires on 2023.00.00
        </span>
      </div>
      <div className="flex flex-row xl:gap-2 gap-1 special:gap-4 items-center">
        <p className="font-bold text-xs xl:text-xl special:text-4xl 2xl:text-3xl">
          Auto Renewal
        </p>
        <input
          type="checkbox"
          id="hs-basic-usage"
          className="relative w-[3.25rem] h-7 special:h-14 special:w-[6rem] 2xl:h-10 2xl:w-[4.5rem] bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white

before:inline-block before:w-6 before:h-6 special:before:h-12 before:special:w-12 2xl:before:h-9 2xl:before:w-9 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
        />
        <label htmlFor="hs-basic-usage text-black" className="sr-only">
          switch
        </label>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GoldCard;
