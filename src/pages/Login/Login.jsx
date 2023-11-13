import "./Login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import Phone from "../../assets/images/smartphone.png";
import { MdOutlineNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader/Loader";
import { useFormik } from "formik";
import { basicSchemasLogin } from "../../schemas/index.js";
import { auth, firebase } from "../../firebase.config";
import Lock from "../../assets/images/lock.png";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import OtpInput from "react-otp-input";
import Cookies from 'universal-cookie';


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
  const cookies = new Cookies(null, { path: '/' });
  const onSubmit = async (values, actions) => {
    // console.log(value, actions)
    setTimeout(() => {
      navigate("/authentication");
    }, 1500);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  async function onSignup(e) {
    if (buttonText === "Login") {
      ValidateOtp();
    } else {
      setButtonText("Sending...");

      try {
        console.log("signup called");
        let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`
        );
        if (!response.data.exists) {
          alert("Mobile number is not registered. Please register first.");
        } else {
          const result = await auth.signInWithPhoneNumber(ph, verify);
          setfinal(result);
          console.log(final, "code sent final");
          setshow(true);
          setShowOTPBox(true);
          setButtonText("Login");
        }
      } catch (error) {
        console.error("Error checking mobile:", error);
        alert("An error occurred while checking the mobile number.");
      }
    }
  }

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
              cookies.set('wr_token', response.data.data._id);
              navigate("/dashboard");
            } else {
              alert("Login failed");
            }
          })
          .catch((error) => {
            console.error("Error checking mobile:", error);
          });
      })
      .catch((err) => {
        alert("Wrong code");
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
      validationSchema: basicSchemasLogin,
      onSubmit,
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="login-bg"></div>

          <div className="container">
            <div className="login-contain">
              <img src={MainImg} className="img-fluid" alt="main-img" />

              <span className="h1 text-center fw-bold">
                Sign in to access your account
              </span>

              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-contain">
                  <div
                    // id="recaptcha-container"
                    className={
                      errors.mobile && touched.mobile
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="text"
                      placeholder="+1(Phone Number)"
                      value={ph}
                      onChange={(e) => setPh(e.target.value)}
                      onBlur={handleBlur}
                      id="mobile"
                    />
                    <img src={Phone} alt="phone" />
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
                      // id="tin"
                      />
                      <small className="text-error">
                        {errors.otp && touched.opt && errors.otp}
                      </small>
                    </div>
                  )}




                  <div className="input-remember-me">
                    <div>
                      <input
                        type="checkbox"
                        id="remind"
                        value={values.remind}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label>Remember me</label>
                    </div>

                    <span>Re-try?</span>
                  </div>
                  {!final && <div id="recaptcha-container"></div>}
                  {/* 
                  <button className="btn-main" type="submit">
                    <span>Next</span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className="mt-1"
                    />
                  </button> */}

                  <button
                    className="bg-black px-24 items-center flex justify-between py-2 flex-row rounded-lg text-center"
                    onClick={(e) => onSignup(e)}
                  >
                    <span className="xl:text-2xl text-lg text-white font-bold">
                      {buttonText}
                    </span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className="mt-1"
                    />
                  </button>
                  <div>
                    <span>New Member? </span>
                    <span>
                      <Link to="/register" className="react-link">
                        Register now
                      </Link>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
