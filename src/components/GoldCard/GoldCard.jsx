import "./GoldCard.css";
import { useEffect, useState } from "react";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import Cross from "../../assets/images/subcription/cross.png";
import SubBG from "../../assets/images/subBg.png";

const GoldCard = () => {
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
      {!loading &&
        (valUser.subscripton?._id ? (
          <div
            className={`relative border border-solid ${
              valUser.subscripton?.name == "Black"
                ? "border-white"
                : "border-black"
            } overflow-hidden rounded-3xl flex flex-row w-full justify-between cursor-default`}
            // style={{ backgroundColor: valUser ? valUser.subscripton?.color : "" }}
            style={{
              background: `linear-gradient(90deg, ${
                valUser._id ? valUser.subscripton?.color : "white"
              } 0%, ${
                valUser._id ? valUser.subscripton?.colorFrom : "white"
              } 100%)`,
            }}
          >
            {/* <div className="gold-card-inner-sec1"> */}
            <div className="flex flex-col pl-4 py-4">
              <span className="xl:text-4xl font-bold text-3xl 2xl:test-5xl special:text-7xl main-t">
                <p
                  className={`text-xs special:text-lg font-semibold ${
                    valUser.subscripton?.name == "Black"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  <span>Member Since</span>&nbsp;{startDate}
                </p>

                <p
                  className={`${
                    valUser.subscripton?.name == "Black"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  {valUser.subscripton?.name}
                </p>
                <span className="text-xs font-bold xl:text-xl 2xl:text-2xl special:text-3xl">
                  <p
                    className={`text-sm special:text-lg font-semibold ${
                      valUser.subscripton?.name == "Black"
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    <span>Expires on</span>&nbsp;{endDate}
                  </p>
                </span>
              </span>
            </div>
            <div>
              {valUser.subscripton?._id ? <img src={SubBG} alt="" /> : ""}
            </div>
          </div>
        ) : (
          <div className="flex flex-row gap-4 items-center justify-between rounded-lg w-full border-2 border-black py-2 px-4">
            <img src={Cross} alt="" className="w-12" />
            <p className="text-black 2xl:text-xl text-lg">
              Your subscription is currently inactive
            </p>
          </div>
        ))}
    </>
  );
};

export default GoldCard;
