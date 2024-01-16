import React, { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User2.png";
import MainCar from "../../assets/images/MainCar.png";
import axios from "axios";
import Cookies from "universal-cookie";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import ItemLoader from "../../components/Loader/ItemLoader";
import { storage } from "../../firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { useRefresh } from "../../utils/RefreshContext";
import AffiliateCard from "../../components/Affiliate/AffiliateCard";
import { motion } from "framer-motion";
import { FaRegCopy } from "react-icons/fa";
import Banner1 from "../../assets/images/banner-1.gif";
import Banner2 from "../../assets/images/banner-2.gif";
import Banner3 from "../../assets/images/banner-3.gif";

const publicPath = "https://www.winlads.com";

// Constructing the public URL for the image
const banner1Url = `${publicPath}${Banner1}`;
const banner2Url = `${publicPath}${Banner2}`;
const banner3Url = `${publicPath}${Banner3}`;

const Promo = () => {
  const cookies = new Cookies(null, { path: "/" });
  const { refreshCount, refresh } = useRefresh();
  const id = cookies.get("wr_token");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nic, setNic] = useState("");
  const [tin, setTin] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [license, setLicense] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [refferalId, setRefferalId] = useState();
  // const [refresh, setRefresh] = useState(false);
  // useEffect(() => {
  //   getUserData();
  // }, [refreshCount]);

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

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfile(file);
    }
  };

  const getUserData = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setUserData(response?.data?.data);
        setMobile(response?.data?.data.mobile);
        setName(response?.data?.data.name);
        setUserId(response?.data?.data.uid);
        setEmail(response?.data?.data.email);
        setNic(response?.data?.data.nic);
        setTin(response?.data?.data.tin);
        setDob(response?.data?.data.dob);
        setAddress(response?.data?.data.address);
        setAddress2(response?.data?.data.address2);
        setCity(response?.data?.data.city);
        setState(response?.data?.data.state);
        setPostalcode(response?.data?.data.postalcode);
        setUserImage(response?.data?.data.image);
        setRefferalId(response?.data?.data.rafflesId);
        console.log(response?.data?.data.image);
        if (response?.data?.data.image != undefined) {
          getProfileImage(response?.data?.data.image);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(error);
      });
  };

  function getProfileImage(img) {
    getDownloadURL(ref(storage, img))
      .then((url) => {
        setUserImage(url);
        console.log(url, "imgg");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle any errors
      });
  }

  // Function to handle copying the input value to clipboard
  const handleCopyToClipboard = async (tex) => {
    try {
      await navigator.clipboard.writeText(tex);
      toast.success("Copied to Clipboard");
    } catch (err) {
      console.error("Unable to copy to clipboard.", err);
      alert("Copy to clipboard failed.");
    }
  };
  return (
    <div className="bg-[#F2F5FB]">
      <div className="flex relative">
        <div className="right-side-logo max-xl:hidden"></div>
        <div className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0 bg-no-repeat">
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>
            <CardComponent />

            <div className="flex flex-col space-y-2 special:space-y-5">
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Full Name
                </p>
                <input
                  className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                  type="text"
                  disabled
                  value={
                    valUser
                      ? (valUser.firstname || "") +
                        " " +
                        (valUser.lastname || "")
                      : ""
                  }
                ></input>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Your Email
                </p>
                <input
                  className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                  type="email"
                  value={valUser?.email}
                  disabled
                ></input>
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Your affiliate ID
                </p>
                <div className="w-full relative">
                  <input
                    className="bg-white font-bold rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                    type="text"
                    value={valUser?.uid}
                    disabled
                  ></input>
                  <button
                    onClick={() => handleCopyToClipboard(valUser?.uid)}
                    className="absolute right-1 bottom-0 text-xl px-2 py-3"
                  >
                   {valUser.uid ? <FaRegCopy className="hover:opacity-75" /> : ""}
                  </button>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <p className="text-black text-sm xl:text-md special:text-xl">
                  Your Affiliate Link
                </p>
                <div className="w-full relative">
                  <input
                    className="bg-white font-bold w-full md:text-sm text-[9px] rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    placeholder="Enter Phone Number"
                    type="tel"
                    disabled
                    onChange={(e) => setMobile(e.target.value)}
                    value={
                      valUser.uid
                        ? `https://www.winlads.com/?ref=${valUser?.uid}`
                        : ""
                    }
                  ></input>
                  <button
                    onClick={() =>
                      handleCopyToClipboard(
                        `https://www.winlads.com/?ref=${valUser?.uid}`
                      )
                    }
                    className="absolute right-1 bottom-0 text-xl px-2 py-3"
                  >
                     {valUser.uid ? <FaRegCopy className="hover:opacity-75" /> : ""}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-4">
            <div className="flex flex-col space-y-3">
              {loading ? (
                <div className="flex justify-center pt-12">
                  <ItemLoader />
                </div>
              ) : (
                <div className="md:mt-20 flex flex-col space-y-5">
                  <AffiliateCard />

                  <div className="flex flex-col space-y-2 md:space-y-5 special:space-y-5">
                    <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Banner (468*60)
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter First Name"
                        type="text"
                        disabled
                        value={banner1Url}
                      ></input>
                    </div>
                    <div className="w-full">
                      <img
                        src={Banner1}
                        className="w-8/12 mr-auto h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Banner (728*90)
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter Valid EMail"
                        type="text"
                        value={banner2Url}
                        disabled
                      ></input>
                    </div>
                    <div className="w-full h-32">
                      <img
                        src={Banner2}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <p className="text-black text-sm xl:text-md special:text-xl">
                        Banner (250*250)
                      </p>
                      <input
                        className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                        placeholder="Enter User Name"
                        type="text"
                        value={banner3Url}
                        disabled
                      ></input>
                    </div>
                    <div className="w-32 h-32 mr-auto">
                      <img
                        src={Banner3}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <motion.img
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 80, opacity: 1 }}
                  transition={{ type: "tween", duration: 1, delay: 1 }}
                  className="w-3/4"
                  src={MainCar}
                  alt="main"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-2 special:space-y-5">
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Full Name
                  </p>
                  <input
                    className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    type="text"
                    disabled
                    value={
                      valUser
                        ? (valUser.firstname || "") +
                          " " +
                          (valUser.lastname || "")
                        : ""
                    }
                  ></input>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your Email
                  </p>
                  <input
                    className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    type="email"
                    value={valUser?.email}
                    disabled
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your affiliate ID
                  </p>
                  <div className="w-full relative">
                    <input
                      className="bg-white font-bold rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                      type="text"
                      value={valUser?.uid}
                      disabled
                    ></input>
                    <button
                      onClick={() => handleCopyToClipboard(valUser?.uid)}
                      className="absolute right-1 bottom-0 text-xl px-2 py-3"
                    >
                      {valUser.uid ? <FaRegCopy className="hover:opacity-75" /> : ""}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your Affiliate Link
                  </p>
                  <div className="w-full relative">
                    <input
                      className="bg-white rounded-xl md:text-sm text-[9px] px-2 py-3 font-bold focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                      type="tel"
                      disabled
                      value={
                        valUser.uid
                          ? `https://www.winlads.com/?ref=${valUser?.uid}`
                          : ""
                      }
                    ></input>
                    <button
                      onClick={() =>
                        handleCopyToClipboard(
                          `https://www.winlads.com/?ref=${userData?.uid}`
                        )
                      }
                      className="absolute right-1 bottom-0 text-xl px-2 py-3"
                    >
                      {valUser.uid ? <FaRegCopy className="hover:opacity-75" /> : ""}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
