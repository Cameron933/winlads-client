import React, { useEffect, useState } from "react";
import SideNav from "../../components/SideNav/SideNav";
import TopNav from "../../components/TopNav/TopNav";
import User from "../../assets/images/side-bar/User.png";
import GoldCard from "../../components/GoldCard/GoldCard";
import MainCar from "../../assets/images/MainCar.png";
import EarningCard from "../../components/EarningCard/EarningCard";
import backgroundcar from "../../assets/images/background/Background-car.png";
import axios from "axios";
import Cookies from "universal-cookie";

import { toast } from "react-toastify";
import {  HashLoader } from 'react-spinners';


const Profile = () => {
  const cookies = new Cookies(null, { path: '/' });
  const id = cookies.get('wr_token');
  const [userData, setUserData] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passport, setPassport] = useState("");
  const [tin, setTin] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async () => {
    setLoading(true)
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/validate?id=${id}`)
      .then((response) => {
        console.log(response.data.data)
        setUserData(response?.data?.data)
        setMobile(response?.data?.data.mobile)
        setName(response?.data?.data.name);
        setEmail(response?.data?.data.email);
        setPassport(response?.data?.data.passport);
        setTin(response?.data?.data.tin);
        setDob(response?.data?.data.dob);
        setAddress(response?.data?.data.address);
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
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
        console.log(error)
      });
  }

  const updateUserDatails = async () => {
    setLoading(true);
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_API}/editUser`,
      {
        id: userData._id,
        name,
        email,
        mobile,
        passport,
        tin,
        dob,
        address
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
      setLoading(false)
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
      setLoading(false)
    }
  }





  return (
    <div>
      <div className="flex relative">
        <SideNav screen="full" />
        <div
          className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0"
          style={{ backgroundImage: `url(${backgroundcar})` }}
        >
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="lg:w-2/3">
              <GoldCard />
            </div>

            <div>
              <EarningCard />
            </div>
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-12">
            <div className="flex flex-col space-y-3">
              <div className="flex justify-center">
                <img src={User} alt="" />
              </div>

              {
                loading ? <div className="moonloader-center"><HashLoader
                  color={'#43AEC2'}
                  loading={true}
                  // cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> </div> : <div className="flex flex-col space-y-2">
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">My Refferal ID</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter User Name"
                      type="text"
                      value={userData?.uid}
                      disabled
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">First Name</p>
                    <input

                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter First Name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">Last Name</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter Last Name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">Valid Email</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter Valid EMail"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">Phone Number</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter Phone Number"
                      type="number"
                      onChange={(e) => setMobile(e.target.value)}
                      value={mobile}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">
                      Passport Number
                    </p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter Passport Number"
                      type="text"
                      onChange={(e) => setPassport(e.target.value)}
                      value={passport}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">Date of Birth</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm"
                      placeholder="Enter Date of Birth"
                      type="text"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">
                      Postal Address
                    </p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                      placeholder="Enter Postal Address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md">Tin</p>
                    <input
                      className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                      placeholder="Enter Tin"
                      type="text"
                      value={tin}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  {/* <div className="flex flex-col space-y-2">
                  <p className="text-black text-sm xl:text-md">Reference Id</p>
                  <input
                    className="bg-[#FFECA8] rounded-2xl px-2 py-2 focus:outline-none placeholder:text-sm"
                    placeholder="Enter Reference Id"
                    type="text"
                    value={userData?.rafflesId}
                  ></input>
                </div> */}
                  <div className="flex flex-row justify-between items-center pt-4">
                    {/* <div className="flex items-center xl:gap-6 gap-3">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checked-checkbox"
                      className="ml-2 xl:text-sm text-xs font-medium text-gray-900 dark:text-gray-300"
                    >
                      <p className="text-black">
                        {" "}
                        I agree with the terms of use
                      </p>
                    </label>
                  </div> */}
                    <div className="flex justify-center">
                      <button onClick={() => updateUserDatails()} className="bg-[#4FC8E8] rounded-2xl px-12 py-1 font-semibold">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>


              }


            </div>
          </div>
          <div className="flex flex-col space-y-4 flex-1 invisible xl:visible">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="lg:w-2/3">
              <GoldCard />
            </div>

            <div>
              <EarningCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
