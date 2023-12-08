import { useEffect, useState } from "react";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import { GoQuestion } from "react-icons/go";
import { MdOutlineDoNotDisturbOff } from "react-icons/md";
import SelectRafflePaymentMethod from "./SelectRafflePaymentMethod";
import BuyRaffle from "./BuyRaffle";
import axios from "axios";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";

const FutureRaffles = ({ color, raffleId, future=[] }) => {
  const [selectPayment, setSelectPayment] = useState(false);
  const [buyRaffle, setBuyRaffle] = useState(false);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [futureGiveaways, setFutureGiveaways] = useState([])

  const handleClick = () => {
    setSelectPayment(true)
    // setBuyRaffle(true);
  };

  useEffect(() => {
    currentUserValidation();
    console.log(valUser, "usrId")
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user.balance);
      setValUser(validator.user);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      {future.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 special:gap-4 flex-1">
          {future.map((round, key) => (
            <div
              key={key}
              className={`bg-gradient-to-br from-[#1A8BC0] to-[#000000] flex cursor-pointer flex-col rounded-3xl px-2 py-2 special:px-4 2xl:px-4 space-y-2 hover:border-black border border-2`}
              onClick={handleClick}
            >
              <div className="flex flex-row justify-between items-center">
                <img
                  src={Jeep}
                  alt=""
                  className="flex w-36 special:w-96 2xl:w-64"
                />
                <div className="flex flex-col space-y-4 z-10">
                  <p className="text-white text-center font-bold xl:text-xs text-xs special:text-2xl 2xl:text-md">
                    {round.name}
                  </p>
                  <p className="text-[10px] text-center text-white special:text-xl 2xl:text-xs">
                    {round.date}
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-5 items-center">
                <div className="w-11/12 overflow-clip whitespace-nowrap flex gap-2 z-10">
                  <p className="text-white">{round.desc}</p>
                </div>

                <div className="">
                  <GoQuestion />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center space-y-2">
          <MdOutlineDoNotDisturbOff className="w-12 h-12 2xl:w-16 2xl:h-16 special:w-24 special:h-24" />
          <p className="font-bold text-2xl 2xl:text-4xl special:text-6xl">
            No More Giveaways
          </p>
        </div>
      )}
      {selectPayment && (
        <SelectRafflePaymentMethod onClose={() => setSelectPayment(false)} />
      )}

      {buyRaffle && <BuyRaffle onClose={() => setBuyRaffle(false)} />}
    </>
  );
};

export default FutureRaffles;
