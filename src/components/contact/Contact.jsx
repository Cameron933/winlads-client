import React, { useState } from "react";
import WindlandText from "../../assets/images/showacase/windland.png";

// const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    // fetch(FORM_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Form response was not ok');
    //     }

    //     setSubmitted(true);
    //   })
    //   .catch((err) => {
    //     // Submit the form manually
    //     e.target.submit();
    //   });
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="bg-chose-plan py-4" id="contactUs">
    <form
    //   action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="px-5 xl:px-10 2xl:px-10 special:px-40 flex flex-col justify-center bg-white w-3/4 mx-auto py-10 shadow-sm rounded-lg mb-5"
    >
      {/* <div className="w-52 mx-auto p-5">
        <img src={WindlandText} alt="winlad-logo" className="w-full h-full object-contain" />
      </div> */}
      <p className="text-center text-base md:text-lg 2xl:text-xl special:text-3xl font-extrabold xl:tracking-[18px] sm:tracking-[8px] tracking-[12px] uppercase py-4">Contact Us</p>

      <div className="pt-0 mb-8">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-8">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-8">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-500  border-b-2 rounded outline-none"
          required
        />
      </div>
      <div className="pt-0 justify-center flex">
        <button
          className="bg-black hover:shadow-lg focus:outline-none px-6 py-3  mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none hover:bg-black/75"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;