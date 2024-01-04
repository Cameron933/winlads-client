import "./Login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { useFormik } from "formik";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/MainCar.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [final, setfinal] = useState("");
  const [show, setshow] = useState(false);
  const [showOTPBox, setShowOTPBox] = useState(false);
  const [buttonText, setButtonText] = useState("Get OTP");
  const cookies = new Cookies(null, { path: "/" });

  const [loginDisable, setLoginDisable] = useState(false)

  const onSubmit = async (values, actions) => {
    // console.log(value, actions)
    // setTimeout(() => {
    //   navigate("/authentication");
    // }, 1500);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const onPhoneNumberChange = (value, country, e, formattedValue) => {
    setPh(value);
    setLoginDisable(value.length > 0);
  };

  async function onSignup(e) {
    if (buttonText === "Login") {
      ValidateOtp();
    } else {
      setButtonText("Sending...");

      try {
        console.log("signup called");
        // console.log(ph, "phone");
        // let verify = new auth.RecaptchaVerifier("recaptcha-container");
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {}
        );
        let verify = window.recaptchaVerifier;
        // console.log(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}, "ccc"`)
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`
        );
        if (!response.data.exists) {
          // alert("Mobile number is not registered. Please register first.");
          toast.error(
            "Mobile number is not registered. Please register first.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else {
          try {
            const result = await signInWithPhoneNumber(auth, "+" + ph, verify);
            setfinal(result);
            // console.log(final, "code sent final");
            setshow(true);
            setShowOTPBox(true);
            setButtonText("Login");
          } catch (error) {
            console.log(error, "fir error");
          }
        }
      } catch (error) {
        console.error("Error checking mobile:", error);
        setButtonText("Get OTP");
        // alert("An error occurred while checking the mobile number.");
        toast.error("An error occurred while checking the mobile number.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  }

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      navigate("/dashboard");
    } else {
      console.log("");
    }
  };

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        const uid = result.user.uid;

        axios
          .get(`${import.meta.env.VITE_SERVER_API}/login?uid=${uid}`)
          .then((response) => {
            if (response.data.exists) {
              console.log("success");
              cookies.set("wr_token", response.data.data._id);
              navigate("/dashboard");
            }
            if (response.data.status !== 200) {
              toast.error("Login failed", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          })
          .catch((error) => {
            toast.error("Error checking mobile number. Please try again", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          });
      })
      .catch((err) => {
        toast.error("Invalid OTP Code", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  // Set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        mobile: "",
        remind: "",
      },
      // validationSchema: basicSchemasLogin,
      onSubmit,
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="h-screen flex items-center  bg-image">
            <div className="flex items-center md:flex-row flex-col justify-between gap-12 max-w-[1440px] px-10 xl:px-20">
              {/* <div className="img-container scale-150 mb-9 md:mb-0 prevent"> */}
              {/* Dekstop VIew Jeep */}

              <div className="hidden md:block transform scale-x-[-1]">
                <motion.img
                  initial={{ opacity: 0, x: "40%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 0.8 }}
                  src={LoginImg}
                  className="xl:w-full h-full md:w-96"
                  alt="main-img"
                />
              </div>
              {/* Mobile View Jeep */}
              <div className="block md:hidden w-full transform scale-x-[-1]">
                <motion.img
                  initial={{ opacity: 0, x: "40%" }}
                  whileInView={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 0.8 }}
                  src={LoginImg}
                  className="w-full h-full"
                  alt="main-img"
                />
              </div>

              {/* </div> */}
              <div className="flex flex-col ">
                <span className="text-2xl md:text-2xl xl:text-5xl font-bold special:text-4xl">
                  Sign in to access your account
                </span>

                <form onSubmit={handleSubmit} autoComplete="off" className="">
                  <div className="flex flex-col justify-center gap-5 mt-10">
                    <div
                      // id="recaptcha-container"
                      className={
                        errors.otp && touched.opt ? "input-div input-error" : ""
                      }
                    >
                      <PhoneInput
                        country={"au"}
                        value={ph}
                        onChange={onPhoneNumberChange}
                        onBlur={handleBlur}
                        id="mobile"
                        className={`placeholder:text-[16px] border borer-solid border-black ${showOTPBox && 'blur-sm'}`}
                      />
                      <small className="text-error">
                        {errors.mobile && touched.mobile && errors.mobile}
                      </small>
                    </div>

                    {showOTPBox && (
                      <div
                        className={
                          errors.otp && touched.opt
                            ? "input-div input-error"
                            : "input-div"
                        }
                      >
                        <input
                          type="text"
                          placeholder="OTP Code"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="w-full"
                        />
                        <small className="text-error">
                          {errors.otp && touched.opt && errors.otp}
                        </small>
                      </div>
                    )}

                    {!final && <div id="recaptcha-container"></div>}

                    <button
                      className={`px-12 w-full py-2 flex justify-center flex-row items-center rounded-lg bg-${loginDisable ? "black" : "gray-500"} hover:bg-${loginDisable ? "black/75" : ""}`}
                      onClick={(e) => onSignup(e)}
                      type="submit"
                      disabled={!loginDisable}
                    >
                      <span className="xl:text-2xl text-sm text-white font-bold">
                        {buttonText}
                      </span>
                      <MdOutlineNavigateNext
                        color={"#fff"}
                        className="inline-block mt-0 text-2xl"
                      />
                    </button>
                    <div className="font-semibold text-lg text-center">
                      <span>New Member? </span>
                      <span>
                        <Link
                          to="/register"
                          className="react-link text-[#157D98]"
                        >
                          Register now
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
