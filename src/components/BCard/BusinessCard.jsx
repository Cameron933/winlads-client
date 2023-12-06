import { useState } from "react";
import BS1 from "../../assets/images/BusinessCard/BS-1.png";
import BS2 from "../../assets/images/BusinessCard/BS-2.png";
import share from "../../assets/images/BusinessCard/share.png";
import add from "../../assets/images/BusinessCard/add.jpeg";
import save from "../../assets/images/BusinessCard/save.png";
import backgroundcar from "../../assets/images/background/Background-car.png";
import userBUS from "../../assets/images/BusinessCard/userBUS.png";
import smartphoneBUS from "../../assets/images/BusinessCard/smartphoneBUS.png";
import basketballBUS from "../../assets/images/BusinessCard/basketballBUS.png";
import mailBUS from "../../assets/images/BusinessCard/mailBUS.png";
import orderNow from "../../assets/images/BusinessCard/OrderNow.png";
import { IoMdShare } from "react-icons/io";
import { IoMdSave } from "react-icons/io";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import BCard from "../CardBusiness/CardBusiness";
import "./modal.css";
import BCardQR from "../CardBusiness/CardQR";

function BusinessCard() {

  const [isOrderNow, setOrderNow] = useState(false);

  const handleShareClick = () => {

    setOrderNow(!isOrderNow);
  };

  return (
    <div className="flex flex-col space-y-4 special:space-y-16">
      <div className="flex flex-col special:space-y-5">
        <p className="text-xl font-bold xl:text-4xl md:text-4xl special:text-6xl">
          Get My NFC
        </p>
        <p className="text-black text-lg special:pt-5 special:text-2xl">
          {isOrderNow ? "Let’s Get Your Card !!" : ""}
        </p>
      </div>
      {/* <div className="flex flex-col items-center">
        <BCard></BCard>
      </div>

      <div className="flex flex-col items-center">
        <BCardQR></BCardQR>
      </div> */}

      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundcar})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      >
        <div className="text-left flex flex-col items-center space-y-0 special:space-y-16" >

          {
            isOrderNow ? <ShareForm /> : <div className="xl:w-1/2 w-full special:w-2/5 flex flex-col gap-5 py-4"><BCard/>
              <BCardQR/></div>
          }


          <div className="w-full xl:w-1/2 special:w-2/5 flex gap-16 justify-center py-5">
            <div className="flex flex-col items-center">
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3]"><IoMdShare /></button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl"> Share</label>
            </div>
            <div className="flex flex-col items-center">
              <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3]"><IoMdSave /></button>
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">Save</label>
            </div>
            <div className="flex flex-col items-center">
              {isOrderNow ? (
                // Display "orderNow" image when isOrderNow is true

                <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3]" onClick={handleShareClick}><MdOutlineAddShoppingCart /></button>
              ) : (
                // Display "add" image when isOrderNow is false
                <button className="text-2xl md:text-4xl pro:text-5xl xl:text-2xl special:text-5xl p-3 rounded-[20px] bg-[#CCBAB3]" onClick={handleShareClick}><MdPersonAddAlt1 /></button>
              )}
              <label className="text-sm md:text-lg pro:text-xl xl:text-sm special:text-2xl">
                {isOrderNow ? "Order Now" : "Request"}
              </label>
            </div>
          </div>


        </div>
      </div>


    </div>
  );
}

function ShareForm({ onClose }) {
  // Implement your share form here
  // You can use a modal or any custom form component
  // Make sure to call `onClose` when the form is closed to update the state

  return (
    <form className="form-contain-reg space-y-7 w-full xl:w-3/5 special:w-2/5 special:space-y-16">
      <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Full Name"
          id="name"
          className="bg-gray-300 placeholder:text-gray-500 outline-none special:placeholder:text-2xl"
        />
        <img src={userBUS} alt="user" className="w-8 special:w-14" />
      </div>

      <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Passport"
          id="passport"
          className="bg-gray-300 placeholder:text-gray-500 outline-none special:placeholder:text-2xl"
        />
        <img src={basketballBUS} alt="passport" className="w-8 special:w-14" />
      </div>
      <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Phone Number"
          id="mobile"
          className="bg-gray-300 placeholder:text-gray-500 outline-none special:placeholder:text-2xl"
        />
        <img src={smartphoneBUS} alt="phone" className="w-8 special:w-14" />
      </div>
      <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
        <input
          type="text"
          placeholder="Postal Address"
          id="address"
          className="bg-gray-300 placeholder:text-gray-500 outline-none special:placeholder:text-2xl"
        />
        <img src={mailBUS} alt="mail" className="w-8 special:w-14" />
      </div>
    </form>


  );
}

export default BusinessCard;
