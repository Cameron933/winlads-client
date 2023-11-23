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
import "./modal.css";

function BusinessCard() {
  const [showForm, setShowForm] = useState(false);
  const [isOrderNow, setOrderNow] = useState(false);

  const handleShareClick = () => {
    setShowForm(!showForm);
    setOrderNow(!isOrderNow); // Toggle the state
  };

  return (
    <div>
      <div className="xl:mb-8 md:mb-10 mb-10 flex flex-col">
        <p className="text-md font-bold xl:text-4xl md:text-4xl mb-4">
          Get My NFC
        </p>
        <p className="text-black text-lg">
          {isOrderNow ? "Let’s Get Your Card !!" : ""}
        </p>
      </div>

      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundcar})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      >
        <div className="gap-4 text-left xl:w-fit w-full">

          {
            isOrderNow ? <ShareForm /> : <><img src={BS1} alt="" className="w-56 md:w-72 mx-auto xl:mx-0" />
              <img src={BS2} alt="" className="w-56 md:w-72 mt-3  mx-auto xl:mx-0" /></>
          }

          <div className="flex row flex-col mx-auto w-fit">
            <div className="flex gap-3 mt-3">
              <div className="flex flex-col items-center">
                <button className="text-2xl p-3 rounded-lg bg-gray-400"><IoMdShare /></button>
                <label className="text-sm"> Share</label>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-2xl p-3 rounded-lg bg-gray-400"><IoMdSave /></button>
                <label className="text-sm">Save</label>
              </div>
              <div className="flex flex-col items-center">
                {isOrderNow ? (
                  // Display "orderNow" image when isOrderNow is true

                  <button className="text-2xl p-3 rounded-lg bg-gray-400" onClick={handleShareClick}><MdOutlineAddShoppingCart /></button>
                ) : (
                  // Display "add" image when isOrderNow is false
                  <button className="text-2xl p-3 rounded-lg bg-gray-400" onClick={handleShareClick}><MdPersonAddAlt1 /></button>
                )}
                <label className="text-sm">
                  {isOrderNow ? "Order Now" : "Request"}
                </label>
              </div>
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
        <form className="form-contain-reg space-y-7 w-full mb-3">
          <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="bg-gray-300 placeholder:text-gray-500 outline-none"
            />
            <img src={userBUS} alt="user" className="w-8" />
          </div>

          <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
            <input
              type="text"
              placeholder="Passport"
              id="passport"
              className="bg-gray-300 placeholder:text-gray-500 outline-none"
            />
            <img src={basketballBUS} alt="passport" className="w-8" />
          </div>
          <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
            <input
              type="text"
              placeholder="Phone Number"
              id="mobile"
              className="bg-gray-300 placeholder:text-gray-500 outline-none"
            />
            <img src={smartphoneBUS} alt="phone" className="w-8" />
          </div>
          <div className="bg-gray-300 flex flex-row-reverse items-center py-3 px-4 gap-3 rounded-2xl justify-end">
            <input
              type="text"
              placeholder="Postal Address"
              id="address"
              className="bg-gray-300 placeholder:text-gray-500 outline-none"
            />
            <img src={mailBUS} alt="mail" className="w-8" />
          </div>
        </form>


  );
}

export default BusinessCard;
