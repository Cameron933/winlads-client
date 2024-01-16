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
import { motion } from "framer-motion";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link, useNavigate } from "react-router-dom";
import { validateCurrentUser } from "../../utils/validateuser";
import CardComponent from "../../components/cardComponent/CardComponent";
import { useRefresh } from "../../utils/RefreshContext";
import AffiliateCard from "../../components/Affiliate/AffiliateCard";
import RefCount from "./RefferalCount";
import Count from "../../components/Affiliate/Count";
import { FaRegCopy } from "react-icons/fa";

const Affiliate = () => {
  const cookies = new Cookies(null, { path: "/" });
  const { refreshCount, refresh } = useRefresh();
  const id = cookies.get("wr_token");
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const [valUser, setValUser] = useState({});
  const [activeButton, setActiveButton] = useState(1);
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
  const [refferals, setRefferals] = useState([]);
  const [loading2, setLoading2] = useState(false);
  const [affCount, setAffCount] = useState([]);
  // const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    getUserData();
  }, [refreshCount]);

  const onCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setProfile(file);
    }
  };

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getReffeles(validator.user.uid);
      getAffiliatsCount(validator.user.uid);
    } else {
      navigate("/login");
    }
  };

  // useEffect(() => {
  //   // Load Level 01 data by default when the component mounts
  //   getReffeles();
  // }, []);

  const getReffeles = async (uid) => {
    setLoading2(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${uid}`)
      .then((response) => {
        console.log(response.data.l1);
        setRefferals(response.data.l1);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  };

  const getAffiliatsCount = async (uid) => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${uid}`)
      .then((response) => {
        console.log(response.data);
        setAffCount(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLevel01ButtonClick = async () => {
    setActiveButton(1);
    setLoading2(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${valUser.uid}`)
      .then((response) => {
        console.log(response.data.l1);
        setRefferals(response.data.l1);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  };

  const handleLevel02ButtonClick = async () => {
    setActiveButton(2);
    setLoading2(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${valUser.uid}`)
      .then((response) => {
        setRefferals(response.data.l2);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  };

  const handleLevel03ButtonClick = async () => {
    setActiveButton(3);
    setLoading2(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${valUser.uid}`)
      .then((response) => {
        setRefferals(response.data.l3);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
  };

  const handleLevel04ButtonClick = async () => {
    setActiveButton(4);
    setLoading2(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/getRefferals?uid=${valUser.uid}`)
      .then((response) => {
        setRefferals(response.data.l4);
        setLoading2(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading2(false);
      });
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

  const updateUserDatails = async () => {
    const profileImageName = `${userId}_username`;
    const storageRef = ref(storage, profileImageName);
    const image = await uploadBytes(storageRef, profile).then((snapshot) => {
      console.log("profile image upload");
      refresh();
    });
    setLoading(true);
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/editUser`,
      {
        id: userData._id,
        name,
        email,
        mobile,
        nic,
        tin,
        dob,
        address,
        address2,
        city,
        state,
        postalcode,
        image: profileImageName,
      }
    );
    if (response.data.status == 200) {
      toast.success("Profile details updated!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    } else {
      toast.error("Cannot update your profile. Please try again later", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
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
  const handleCopyToClipboard = async (txt) => {
    try {
      await navigator.clipboard.writeText(txt);
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
            <AffiliateCard />
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-4">
            <div className="flex flex-col space-y-3">
              {loading ? (
                <div className="flex justify-center pt-12">
                  <ItemLoader />
                </div>
              ) : (
                <>
                  {/* <form className="mx-auto mt-4 relative">
                    {userImage ? (
                      <div className="special:w-32 w-18 2xl:w-52 aspect-square rounded-full overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={userImage}
                        />
                      </div>
                    ) : (
                      <img
                        src={User}
                        alt="profile-pic"
                        className="special:w-16 2xl:w-16 xl:w-12 w-8"
                      />
                    )}
                  </form> */}
                  <div className="md:mt-10 mt-5">
                    <Count
                      count={
                        affCount?.l1count +
                          affCount?.l2count +
                          affCount?.l3count +
                          affCount?.l4count || 0
                      }
                    />
                  </div>
                  <div className="hidden xl:block">
                    <AffiliateCard />
                  </div>
                  <div className="hidden xl:block">
                    <h3 style={{ fontWeight: "bold" }}>Affiliate List</h3>
                    <div className="flex flex-col space-y-4 pt-4">
                      <div className="flex flex-row md:gap-4 gap-1 items-center">
                        <button
                          className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                            activeButton === 1
                              ? "bg-black text-white"
                              : "bg-[#F3F3F3]"
                          }`}
                          onClick={handleLevel01ButtonClick}
                        >
                          Level 01
                        </button>
                        <button
                          className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                            activeButton === 2
                              ? "bg-black text-white"
                              : "bg-[#F3F3F3]"
                          }`}
                          onClick={handleLevel02ButtonClick}
                        >
                          Level 02
                        </button>
                        <button
                          className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                            activeButton === 3
                              ? "bg-black text-white"
                              : "bg-[#F3F3F3]"
                          }`}
                          onClick={handleLevel03ButtonClick}
                        >
                          Level 03
                        </button>
                        <button
                          className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                            activeButton === 4
                              ? "bg-black text-white"
                              : "bg-[#F3F3F3]"
                          }`}
                          onClick={handleLevel04ButtonClick}
                        >
                          Level 04
                        </button>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                          <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                            Name
                          </p>
                          <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                            Email
                          </p>
                          <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                            Subscription Plans
                          </p>
                        </div>

                        {loading2 ? (
                          <div className="flex justify-center pt-12">
                            <ItemLoader />
                          </div>
                        ) : refferals?.length > 0 ? (
                          refferals?.map((refferal, key) => (
                            <>
                              <div
                                className="flex flex-row items-center justify-between pt-2 text-xs md:text-md px-4 mb-2"
                                key={key}
                              >
                                <p>{refferal.firstname}</p>
                                <p>{refferal.email}</p>
                                <p>
                                  {refferal?.sub?.data?.name ? refferal?.sub?.data?.name : "no plan"}
                                </p>
                              </div>
                              <hr />
                            </>
                          ))
                        ) : (
                          <div className="pt-4 flex justify-center">
                            <p className="text-xs md:text-sm">
                              You have no affiliates
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1">
            <div className="bg-black rounded-b-3xl py-4 hidemb">
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
                    placeholder="Loading..."
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    disabled
                    value={
                      (userData.firstname &&
                        userData?.firstname + " " + userData?.lastname) ||
                      ""
                    }
                  ></input>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your Email
                  </p>
                  <input
                    className="bg-white rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                    placeholder="Loading..."
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email || ""}
                    disabled
                  ></input>
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your Affiliate ID
                  </p>
                  <div className="w-full relative">
                    <input
                      className="bg-white font-bold rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3 w-full"
                      placeholder="loading..."
                      type="text"
                      value={valUser.subscripton ? userId || "N/A" : "N/A"}
                      disabled
                    />
                    <button
                      onClick={() => handleCopyToClipboard(userId)}
                      className="absolute right-1 bottom-0 text-xl pb-2 pr-2"
                    >
                      <FaRegCopy className="hover:opacity-75" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md special:text-xl">
                    Your Affiliate Link
                  </p>
                  <div className="w-full relative">
                    <input
                      className="bg-white w-full rounded-xl px-2 py-2 focus:outline-none text-sm font-bold placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Phone Number"
                      type="tel"
                      disabled
                      onChange={(e) => setMobile(e.target.value)}
                      value={
                        valUser.subscripton
                          ? `https://www.winlads.com/register?ref=${userId}`
                          : "N/A"
                      }
                    ></input>
                    <button
                      onClick={() =>
                        handleCopyToClipboard(
                          `https://www.winlads.com/register?ref=${userId}`
                        )
                      }
                      className="absolute right-1 bottom-0 text-xl pb-2 pr-2"
                    >
                      <FaRegCopy className="hover:opacity-75" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="block xl:hidden pt-4">
              <h3 style={{ fontWeight: "bold" }}>Affiliate List</h3>
              <div className="flex flex-col space-y-4 pt-4">
                <div className="flex flex-row md:gap-4 gap-1 items-center">
                  <button
                    className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                      activeButton === 1
                        ? "bg-black text-white"
                        : "bg-[#F3F3F3]"
                    }`}
                    onClick={handleLevel01ButtonClick}
                  >
                    Level 01
                  </button>
                  <button
                    className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                      activeButton === 2
                        ? "bg-black text-white"
                        : "bg-[#F3F3F3]"
                    }`}
                    onClick={handleLevel02ButtonClick}
                  >
                    Level 02
                  </button>
                  <button
                    className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                      activeButton === 3
                        ? "bg-black text-white"
                        : "bg-[#F3F3F3]"
                    }`}
                    onClick={handleLevel03ButtonClick}
                  >
                    Level 03
                  </button>
                  <button
                    className={`rounded-lg text-xs md:text-sm py-2 px-2 ${
                      activeButton === 4
                        ? "bg-black text-white"
                        : "bg-[#F3F3F3]"
                    }`}
                    onClick={handleLevel04ButtonClick}
                  >
                    Level 04
                  </button>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                      Name
                    </p>
                    <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                      Email
                    </p>
                    <p className="bg-[#F3F3F3] font-semibold py-2 px-4 text-xs md:text-md">
                      Subscription Plans
                    </p>
                  </div>

                  {loading2 ? (
                    <div className="flex justify-center pt-12">
                      <ItemLoader />
                    </div>
                  ) : refferals?.length > 0 ? (
                    refferals?.map((refferal, key) => (
                      <>
                        <div
                          className="flex flex-row items-center justify-between pt-2 text-xs md:text-md px-4 mb-2"
                          key={key}
                        >
                          <p>{refferal.firstname}</p>
                          <p>{refferal.email}</p>
                          <p>{refferal?.sub?.data?.name ? refferal?.sub?.data?.name : "no plan"}</p>
                        </div>
                        <hr />
                      </>
                    ))
                  ) : (
                    <div className="pt-4 flex justify-center">
                      <p className="text-xs md:text-sm">
                        You have no affiliates
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
