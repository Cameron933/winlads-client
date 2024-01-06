import "./GoldCard.css";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cross from "../../assets/images/subcription/cross.png";
import SubBG from "../../assets/images/subBg.png";

const SmallGoldCard = () => {
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      setLoading(false);
    } else {
      navigate("/login");
      setLoading(false);
    }
  };

  const startDateObject = new Date(valUser.transaction?.startfrom);
  const endDateObject = new Date(valUser.transaction?.endfrom);

  const options = { year: "numeric", month: "numeric", day: "numeric" };

  const endDate = endDateObject.toLocaleString("en-US", options);
  const startDate = startDateObject.toLocaleString("en-US", options);

  return (
    <>
      {!loading && (
        <div
          className={`relative border border-solid ${
            valUser.subscripton?.name == "Black"
              ? "border-white"
              : "border-black"
          } overflow-hidden rounded-3xl flex flex-row justify-between border-2 cursor-default gap-16 items-center`}
          style={{
            background: `linear-gradient(90deg, ${
              valUser._id ? valUser.subscripton?.color : "white"
            } 0%, ${
              valUser._id ? valUser.subscripton?.colorFrom : "white"
            } 100%)`,
          }}
        >
          <div className="flex flex-col pl-2 py-2">
            {/* <span className="font-bold text-4xl main-t tt"> */}
            {valUser.subscripton?._id ? (
              <p
                className={`text-xs special:text-lg font-semibold ${
                  valUser.subscripton?.name == "Black"
                    ? "text-white"
                    : "border-black"
                }`}
              >
                <span>Member Since</span>&nbsp;{startDate}
              </p>
            ) : (
              ""
            )}
            {valUser.subscripton?._id ? (
              <p
                className={`font-bold text-4xl ${
                  valUser.subscripton?.name == "Black"
                    ? "text-white"
                    : "border-black"
                }`}
              >
                {valUser.subscripton?.name}
              </p>
            ) : (
              <div className="flex flex-row items-center gap-4">
                <img src={Cross} alt="" className="w-12" />
                <p className="2xl:text-xl text-xl text-black">
                  Your subscription is currently inactive
                </p>
              </div>
            )}
            {/* </span> */}
            {valUser.subscripton?._id ? (
              <p
                className={`text-sm special:text-lg font-semibold ${
                  valUser.subscripton?.name == "Black"
                    ? "text-white"
                    : "border-black"
                }`}
              >
                <span>Expires on</span>&nbsp;{endDate}
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <img src={SubBG} alt="" />
          </div>
          {/* {valUser.subscripton?._id ? (
            <div className="flex flex-row xl:gap-2 gap-1 items-center">
              <p className="font-semibold text-sm text-black">
                Auto Renewal
              </p>
              <input
                type="checkbox"
                id="hs-basic-usage"
                className={`relative w-[3.25rem] h-7 bg-[#fff] checked:bg-[#fff] items-center flex rounded-full cursor-pointer transition-colors ease-in-out duration-200 boarder-solid border border-black ring-1 ring-transparent ring-offset-white focus:outline-none appearance-none dark:bg-white dark:checked:bg-white dark:focus:ring-offset-white
                before:inline-block before:w-6 before:h-6 before:bg-[#9D7C00] checked:before:bg-[#9D7C00] before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-[#9D7C00] dark:checked:before:bg-[#9D7C00]`}
              />
              <label htmlFor="hs-basic-usage text-black" className="sr-only">
                switch
              </label>
            </div>
          ) : (
            ""
          )} */}
        </div>
      )}
    </>
  );
};

export default SmallGoldCard;
