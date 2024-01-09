import SideNav from "../../components/SideNav/SideNav";
import Correct from "../../assets/images/payment_success/success.png";
import Bg from "../../assets/images/payment_success/bg.png";
import { successAnimation } from "../../animation/animation"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";


function PaymentSuccess() {
  const controls = useAnimation();
  const [isSuccess, setSuccess] = useState(true);
  const [seconds, setSeconds] = useState(5);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  // Access individual query parameters
  const suc = searchParams.get('suc');
  const round_id = searchParams.get('round_id');

  useEffect(() => {
    if (suc == 0) {
      setSuccess(false)
    } else {
      setSuccess(true);
    }
    controls.start(successAnimation.animate);

    const intervalId = setInterval(() => {
      setSeconds((prev) => {
        // Ensure that the countdown stops at 0
        if (prev <= 1) {
          clearInterval(intervalId);
          navigate('/dashboard');
          return 0;
        }
        return prev - 1;
      });

      if (seconds < 1) {
        navigate('/dashboard')
      }
    }, 1000)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };

  }, [controls]);

  return (
    <div
      className="flex w-full"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      {/* <SideNav screen="screen" /> */}

      <div className="flex flex-col xl:mx-10 mx-5 flex-1 pt-4  items-center justify-center w-full">
        <div className="flex flex-col justify-center items-center container xl:gap-10 lg:gap-8 md:gap-6 sm:gap-5 gap-5">
          <div className=" flex items-center flex-col space-y-5 justify-center">
            <p>You will redirect to the dashboard after {seconds}</p>
            {
              isSuccess ? <motion.img
                src={Correct}
                alt=""
                className="xl:w-7/12 lg:w-8/12 md:w-6/12 sm:w-5/12 w-3/12"
                initial="initial"
                animate={controls}
                transition={successAnimation.transition}
              /> : <motion.div
                className="text-center w-full text-6xl text-red-500"
                initial="initial"
                animate={controls}
                transition={successAnimation.transition}
              >
                <ImCross className="mx-auto" />
              </motion.div>
            }

          </div>
          <p className="font-bold  xl:text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-xl">
            {isSuccess ? 'Payment Successful !' : 'Payment Fail'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
