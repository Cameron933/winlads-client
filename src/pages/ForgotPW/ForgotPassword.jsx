import "./ForgotPassword.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { useFormik } from "formik";
import axios from "axios";
import Cookies from "universal-cookie";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { validateCurrentUser } from "../../utils/validateuser.js";
import LoginImg from "../../assets/images/MainCar.png";
import "react-phone-input-2/lib/style.css";
import { FcFeedback, FcDiploma1 } from "react-icons/fc";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Login");

  const [email, setEmail] = useState("");
  const cookies = new Cookies(null, { path: "/" });

  const [password, setPassword] = useState("");

  const [loginDisable, setLoginDisable] = useState(true);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  async function onSignup(e) {
    setIsLoading(true);
    setButtonText("Login...");

    try {

      // console.log(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}, "ccc"`)
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/checkEmail?email=${email}`
      );
      if (!response.data.exists) {
        // alert("Mobile number is not registered. Please register first.");
        toast.error("Email is not registered. Please register first.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        try {
          const data = {
            email: email,
          };

          const response = await axios.post(
            `${import.meta.env.VITE_SERVER_API}/forgetPassword`,
            data
          );
          if (response.data.status == 200) {
            cookies.set("wr_token", response.data.data._id);
            navigate("/dashboard");
            setIsLoading(false);
          } else {
            setIsLoading(false);
            toast.error("Invalid email or password", {
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
        } catch (error) {
          console.log(error);
          setIsLoading(false);
          toast.error("Something went wrong, Please try again!", {
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
    } catch (error) {
      setIsLoading(false);
      console.error("Error checking mobile:", error);
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

  // Set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: ""
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
          <div className="h-screen flex justify-center bg-image">
            <div className="flex items-center md:flex-row flex-col xl:justify-between gap-12 max-w-[1440px] px-10 xl:px-20">
              <div className="hidden md:block transform scale-x-[-1] flex-1">
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
              <div className="flex flex-col">
                <span className="text-2xl md:text-2xl xl:text-5xl font-bold special:text-4xl">
                  Forgot Password
                </span>

                <form onSubmit={handleSubmit} autoComplete="off" className="">
                  <div className="flex flex-col justify-center gap-5 mt-10">
                    <div
                      className={
                        errors.email && touched.email
                          ? "input-div input-error"
                          : "input-div"
                      }
                    >
                      <FcFeedback size={20} />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={values.email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        className="placeholder:text-[16px]"
                      />
                      <small className="text-error">
                        {errors.email && touched.email && errors.email}
                      </small>
                    </div>
                    <button
                      className={`px-12 w-full py-2 flex justify-center flex-row items-center rounded-lg bg-${
                        loginDisable ? "black" : "gray-500"
                      } hover:bg-${loginDisable ? "black/75" : ""}`}
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
                        <Link to="/login" className="react-link text-[#157D98]">
                          login
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

export default ForgotPassword;
