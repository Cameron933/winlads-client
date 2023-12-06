import  { useState } from "react";

function FaQComponent() {
  const [activeAccordion, setActiveAccordion] = useState(1);

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(accordionId === activeAccordion ? null : accordionId);
  };

  const isAccordionActive = (accordionId) => {
    return accordionId === activeAccordion || (activeAccordion === 1 && accordionId === 1);
  };
  
  return (
    <div id="accordion-collapse" data-accordion="collapse" className="my-5 special:flex special:flex-col special:gap-10 special:pt-10">
      <div>
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 mb-2 font-medium text-left text-black-500 rounded-3xl focus:bg-white dark:text-black-400 bg-white border border-orange-500 special:border-4 2xl:border-2 special:rounded-[40px]`}
            onClick={() => toggleAccordion(1)}
            aria-expanded={isAccordionActive(1)}
            aria-controls="accordion-collapse-body-1"
          >
            <span className="font-bold special:text-3xl 2xl:text-2xl special:py-5">What is Winlads?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 special:w-6 special:h-6 rotate-180 shrink-0 ${
                isAccordionActive(1) ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 10 6"
            >
              <path d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`p-5 my-5  bg-gray-200 rounded-3xl mb-2 ${
            isAccordionActive(1) ? "" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-1"
        > 
          <p className="mb-2 text-black special:text-2xl 2xl:text-xl special:py-3 special:rounded-[40px]">
            The Biggest, and Best Rewards Club in Australia is LMCT. To offer
            our clients special discounts and great prizes, we have partnered
            with hundreds of (and rising) Australian companies. Since we began
            in 2022, we ve given away over $ 20 million in prizes, had more than
            two hundred winners, and are still in the early stages. Prizes have
            included cars, bikes, boats, and houses. The Biggest, and Best
            Rewards Club in Australia is LMCT. To offer our clients special
            discounts and great prizes, we have partnered with hundreds of(and
            rising) Australian companies. Since we began in 2022, we ve given
            away over $ 20 million in prizes,
          </p>
        </div>
      </div>
      <div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 mb-2 font-medium text-left text-black-500  rounded-3xl focus:bg-white dark:text-black-400 bg-white border border-orange-500 special:border-4 2xl:border-2 special:rounded-[40px]`}
            onClick={() => toggleAccordion(2)}
            aria-expanded={isAccordionActive(2)}
            aria-controls="accordion-collapse-body-2"
          >
            <span className="font-bold special:text-3xl 2xl:text-2xl special:py-5">
              What is the Winlads+ Loyalty Membership?
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 special:w-6 special:h-6 rotate-180 shrink-0 ${
                isAccordionActive(2) ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 10 6"
            >
              <path d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`p-5 my-5 rounded-3xl bg-gray-200 mb-2  ${
            isAccordionActive(2) ? "" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <p className="mb-2 text-black special:text-2xl 2xl:text-xl special:py-3 special:rounded-[40px]">
            The Biggest, and Best Rewards Club in Australia is LMCT. To offer
            our clients special discounts and great prizes, we have partnered
            with hundreds of (and rising) Australian companies. Since we began
            in 2022, we ve given away over $ 20 million in prizes, had more than
            two hundred winners, and are still in the early stages. Prizes have
            included cars, bikes, boats, and houses. The Biggest, and Best
            Rewards Club in Australia is LMCT. To offer our clients special
            discounts and great prizes, we have partnered with hundreds of(and
            rising) Australian companies. Since we began in 2022, we ve given
            away over $ 20 million in prizes,
          </p>
        </div>
      </div>
      <div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 mb-2 font-medium text-left text-black-500  rounded-3xl focus:bg-white dark:text-black-400 bg-white border border-orange-500 special:border-4 2xl:border-2 special:rounded-[40px]`}
            onClick={() => toggleAccordion(3)}
            aria-expanded={isAccordionActive(3)}
            aria-controls="accordion-collapse-body-3"
          >
            <span className="font-bold special:text-3xl 2xl:text-2xl special:py-5">
              Do I have to be a Winlads+ member to enter and win?
            </span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 special:w-6 special:h-6 rotate-180 shrink-0 ${
                isAccordionActive(3) ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 10 6"
            >
              <path d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`p-5 my-5 rounded-3xl bg-gray-200  ${
            isAccordionActive(3) ? "" : "hidden"
          }`}
          aria-labelledby="accordion-collapse-heading-3"
        > 
          <p className="mb-2  text-black special:text-2xl 2xl:text-xl special:py-3 special:rounded-[40px]">
            The Biggest, and Best Rewards Club in Australia is LMCT. To offer
            our clients special discounts and great prizes, we have partnered
            with hundreds of (and rising) Australian companies. Since we began
            in 2022, we ve given away over $ 20 million in prizes, had more than
            two hundred winners, and are still in the early stages. Prizes have
            included cars, bikes, boats, and houses. The Biggest, and Best
            Rewards Club in Australia is LMCT. To offer our clients special
            discounts and great prizes, we have partnered with hundreds of(and
            rising) Australian companies. Since we began in 2022, we ve given
            away over $ 20 million in prizes,
          </p>
        </div>
      </div>
{/* 
      <button
        type="button"
        className=" bg-black text-white  text-lg  font-semibold	w-full  py-3  rounded-xl mt-2 mb-2"
      >
        Submit Your Question
      </button> */}
    </div>
  );
}

export default FaQComponent;
