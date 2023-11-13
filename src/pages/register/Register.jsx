import "./Register.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MainImg from "../../assets/images/jip.png";
import Phone from "../../assets/images/smartphone.png";
import User from "../../assets/images/user.png";
import Passport from "../../assets/images/pass.png";
import Taxt from "../../assets/images/tax.png";
import Mail from "../../assets/images/mail.png";
import Lock from "../../assets/images/lock.png";
import Loader from "../../components/Loader/Loader";
import { basicSchemasRegister } from "../../schemas/index.js";
import { useFormik } from "formik";
import axios from "axios";
import { auth, firebase } from "../../firebase.config";
import { MdOutlineNavigateNext } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineSend } from "react-icons/ai";
import Protect from "../../assets/images/Protect.png";
import User2 from "../../assets/images/User2.png"
import Cookies from 'universal-cookie';

const Register = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");
  const [verifyDisable, setVerifyDisable] = useState(true);
  const [showOTPBox, setShowOTPBox] = useState(false);
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Get OTP");
  const [UserData, setUserData] = useState(null);
  const cookies = new Cookies(null, { path: '/' });
  // set loading
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); //a 2-second loading delay
  }, []);

  const saveFormData = async (temp_values, uid) => {
    console.log(temp_values, uid)
    const data = {
      name: values.name,
      email: values.email,
      mobile: ph,
      passport: values.passport,
      tin: values.tin,
      rafflesId: values.rafflesId,
      uid: uid
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/register`,
        data
      );
      console.log(response.data);
      cookies.set('wr_token', response.data.data._id);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  function onSignup(e) {
    if (buttonText === "Register") {
      ValidateOtp();
    } else {
      setButtonText("Sending...");

      let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
      axios
        .get(`${import.meta.env.VITE_SERVER_API}/checkMobile?mobile=${ph}`)
        .then((response) => {
          if (response.data.exists) {
            alert("Mobile number is already registered!");
            setButtonText("Get OTP");
          } else {
            auth
              .signInWithPhoneNumber(ph, verify)
              .then((result) => {
                setfinal(result);
                console.log(final, "code sent final");
                setshow(true);
                setVerifyDisable(false);
                setShowOTPBox(true);
                setButtonText("Register");
              })
              .catch((err) => {
                alert(err);
                window.location.reload();
                setButtonText("Get OTP");
              });
          }
        })
        .catch((error) => {
          console.error("Error checking mobile:", error);
          alert("An error occurred while checking the mobile number.");
          setButtonText("Get OTP");
        });
    }
  }

  const ValidateOtp = () => {
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        // success
        console.log("success", result);
        saveFormData(values, result.user.uid);
        
        navigate("/welcome");
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);

      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        passport: "",
        tin: "",
        rafflesId: "",
      },
      validationSchema: basicSchemasRegister,
      onSubmit: saveFormData,
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="register-bg"></div>

          <div className="container">
            <div className="register-contain">
              <img src={MainImg} className="img-fluid" alt="main-img" />

              <span className="h1 text-center fw-bold">Create an Account</span>

              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-contain-reg">
                  <div
                    className={
                      errors.name && touched.name
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="name"
                    />
                    <img src={User} alt="user" />
                    <small className="text-error">
                      {errors.name && touched.name && errors.name}
                    </small>
                  </div>

                  <div
                    className={
                      errors.email && touched.email
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="email"
                    />
                    <img src={Mail} alt="mail" />
                    <small className="text-error">
                      {errors.email && touched.email && errors.email}
                    </small>
                  </div>

                  <div
                    className={
                      errors.passport && touched.passport
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="text"
                      placeholder="Passport"
                      value={values.passport}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="passport"
                    />
                    <img src={Passport} alt="passport" />
                    {/* <small className="text-error">
                      {errors.passport && touched.passport && errors.passport}
                    </small> */}
                  </div>

                  <div
                    className={
                      errors.tin && touched.tin
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="text"
                      placeholder="Tin Number"
                      value={values.tin}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="tin"
                    />

                    <img src={Taxt} alt="tin" />
                    {/* <small className="text-error">
                      {errors.tin && touched.tin && errors.tin}
                    </small> */}
                  </div>

                  <div
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

                  <div
                    className={
                      errors.rafflesId && touched.rafflesId
                        ? "input-div input-error"
                        : "input-div"
                    }
                  >
                    <input
                      type="text"
                      placeholder="Reference Id"
                      value={values.rafflesId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="Reference Id"
                    />

                    <div className="flex flex-row items-center">
                      <img src={User2} alt="rafflesId" className="w-6 h-6" />
                      <img src={Protect} alt="rafflesId" className="w-6 h-6" />
                    </div>

                    {/* <small className="text-error">
                      {errors.tin && touched.tin && errors.tin}
                    </small> */}
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

                      {/* <AiOutlineSend
                        onClick={(e) => ValidateOtp(e)}
                        size={30}
                        className="hover:scale-110 cursor-pointer text-green-800"
                      /> */}
                      <small className="text-error">
                        {errors.otp && touched.opt && errors.otp}
                      </small>
                    </div>
                  )}

                  <div className="reg-condition">
                    <input
                      type="checkbox"
                      value={values.agree}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="agree"
                    />
                    <span>
                      By checking the box you agree to our{" "}
                      <span className="yellow-text">Terms</span> and{" "}
                      <span className="yellow-text">Conditions.</span>
                    </span>
                  </div>
                  {!final && <div id="recaptcha-container"></div>}

                  <button
                    className="bg-black px-24 items-center flex justify-between py-2 flex-row rounded-lg text-center"
                    onClick={(e) => onSignup(e)}
                  >
                    <span className="text-2xl text-white font-bold">
                      {buttonText}
                    </span>
                    <MdOutlineNavigateNext
                      color={"#fff"}
                      size={40}
                      className="mt-1"
                    />
                  </button>

                  <div>
                    <span>Already a member? </span>
                    <span>
                      <Link className="react-link" to="/login">
                        Login
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

export default Register;
