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
import { MdOutlinePhotoCamera } from "react-icons/md";
import { toast } from "react-toastify";
import { HashLoader } from 'react-spinners';


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
      <div className="right-side-logo max-xl:hidden"></div>

        <SideNav screen="screen" />
        <div
          className="flex xl:flex-row flex-col xl:justify-between flex-1 mx-5 xl:gap-8 pb-5 space-y-4 xl:space-y-0 bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundcar})` }}
        >
          <div className="flex flex-col space-y-4 flex-1 visible xl:hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="w-full">
              <GoldCard />
            </div>
          </div>
          <div className="flex flex-col space-y-4 flex-1 xl:mx-12">
            <div className="flex flex-col space-y-3">
              <form className="mx-auto mt-4 relative">
                <img src={User} alt="profile-pic" className="special:w-28"/>
                <label htmlFor="profile" className="z-10 absolute -bottom-3 -right-2 text-2xl bg-gray-200 rounded-full p-1 cursor-pointer">
                  <MdOutlinePhotoCamera/>
                </label>
                <input type="file" className="hidden" name="profile" id="profile" />
                
              </form>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-green-300 border border-0.5 border-black p-0.5 w-fit special:px-3">
                  <p className="w-fit special:text-xl " style={{fontSize:'8px'}}>Level 1</p>
                </div>
                <p className="special:text-xl">Verified User</p>
              </div>
              
              
              




              {
                loading ? <div className="moonloader-center"><HashLoader
                  color={'#43AEC2'}
                  loading={true}
                  // cssOverride={override}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                /> </div> : <div className="flex flex-col space-y-2 special:space-y-5">
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">User ID</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter User Name"
                      type="text"
                      value={userData?.uid}
                      disabled
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">First Name</p>
                    <input

                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter First Name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Last Name</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Last Name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Valid Email</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Valid EMail"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Phone Number</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Phone Number"
                      type="tel"
                      onChange={(e) => setMobile(e.target.value)}
                      value={mobile}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">
                      Passport Number
                    </p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Passport Number"
                      type="text"
                      onChange={(e) => setPassport(e.target.value)}
                      value={passport}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Date of Birth</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-xs placeholder:xl:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Date of Birth"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">
                      Postal Address
                    </p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Postal Address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Tin</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Tin"
                      type="text"
                      value={tin}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <p className="text-black text-sm xl:text-md special:text-xl">Reference Id</p>
                    <input
                      className="bg-gray-300 rounded-xl px-2 py-2 focus:outline-none placeholder:text-sm placeholder:special:text-xl special:py-3"
                      placeholder="Enter Reference Id"
                      type="text"
                      value={userData?.rafflesId}
                    ></input>
                  </div>
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


                      <p className="special:text-xl"> <input type="checkbox" name="agree" /> I agree with the terms of use</p>

                      <button onClick={() => updateUserDatails()} className=" text-white rounded-xl px-12 py-3 font-semibold special:text-xl animate_btn black_btn ">
                        Confirm
                      </button>
              
                  </div>
                </div>


              }


            </div>
          </div>
          <div className="xl:flex flex-col space-y-4 flex-1 hidden">
            <div className="bg-black rounded-b-3xl py-4">
              <TopNav textColor={"white"} />
              <div className="pt-10">
                <img className="" src={MainCar} alt="main" />
              </div>
            </div>

            <div className="w-full">
              <GoldCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
