import "./GoldCard.css";

const GoldCard = () => {
  return (
    <div className="cardBg rounded-3xl pl-4 flex flex-row justify-between pt-4 pb-12 cursor-pointer">
      {/* <div className="gold-card-inner-sec1"> */}
      <div className="flex flex-col xl:space-y-2 space-y-1 px-2">
        <span className="xl:text-4xl font-bold text-3xl">Gold</span>
        <span className="text-xs xl:text-md">Expires on 2023.00.00</span>
      </div>
      <div className="flex flex-row xl:gap-2 gap-1 items-center xl:mr-4 px-2">
        <p className="font-bold text-xs xl:text-sm">Auto Renewal</p>
        <input
          type="checkbox"
          id="hs-basic-usage"
          className="relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 border-transparent ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white

before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]"
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
