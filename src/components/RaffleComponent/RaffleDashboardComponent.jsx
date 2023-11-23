import { Link } from "react-router-dom";
import max from "../../assets/images/rafflesImages/max.png";
import lotto from "../../assets/images/rafflesImages/lotto.png";
import six from "../../assets/images/rafflesImages/six4.png";
import { GoQuestion } from "react-icons/go";
import Jeep from "../../assets/images/Lottery/Jeep.png";
import Loto from "../../assets/images/rafflesImages/loto.png";
import "./Raffle.css";
import { useEffect, useState } from "react";
import axios from "axios";

function RaffleDashboardComponent() {

  const [raffles, setRaffles] = useState([]);


  useEffect(() => {
    getRaffles();
  }, [])

  const getRaffles = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffles`)
      .then((response) => {
        console.log(response.data.data)
        setRaffles(response?.data?.data)
      })
      .catch((error) => {

        console.log(error)
      });
  }


  return (
    <div className="lg:mt-80 lg:pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-2">
        {raffles.map((raffle,key) => (
          <Link key={key} to={`/raffles/${raffle._id}`}>
            <div
              className="flex flex-col rounded-3xl px-2 py-1 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(98.92deg, #1A8BC0 45%, #000000 83%",
              }}
            >
              <img src={Jeep} alt="" className="absolute flex w-48" />
              <div className="flex justify-end">
                <img src={max} alt="" className="w-16" />
              </div>
              <div className="flex text-end flex-col z-10">
                <p className="text-white font-bold xl:text-sm text-xs">
                  {raffle.name}
                </p>
                <p className="text-xs text-white">{raffle.date}</p>
              </div>
              <div className="grid grid-cols-3 px-5 items-center">
                <div className="col-span-2 flex justify-end gap-2 z-10">
                  <br />
                  <br />
                </div>
                <div className="col-span-1 justify-end flex">
                  <GoQuestion />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* {raffles.map((raffle) => (
          <Link to={`/raffles/${raffle._id}`}>
            <div
              className="flex flex-col rounded-3xl px-2 py-1 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(98.92deg, #E9BA0D 45%, #000000 83%)",
              }}
            >
              <img src={Jeep} alt="" className="absolute flex w-48" />
              <div className="flex justify-end">
                <img src={six} alt="" className="w-16" />
              </div>
              <div className="flex text-end flex-col z-10">
                <p className="text-white font-bold xl:text-sm text-xs">
                  {raffle.name}
                </p>
                <p className="text-xs text-white">{raffle.date}</p>
              </div>
              <div className="grid grid-cols-3 px-5 items-center">
                <div className="col-span-2 flex justify-end gap-2 z-10">
                  <br />
                  <br />
                </div>
                <div className="col-span-1 justify-end flex">
                  <GoQuestion />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {raffles.map((raffle) => (
          <Link to={`/raffles/${raffle._id}`}>
            <div
              className="flex flex-col rounded-3xl px-2 py-1 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(98.92deg, #C51B1B 45%, #000000 83%)",
              }}
            >
              <img src={Jeep} alt="" className="absolute flex w-48" />
              <div className="flex justify-end">
                <img src={Loto} alt="" className="w-10" />
              </div>
              <div className="flex text-end flex-col z-10">
                <p className="text-white font-bold xl:text-sm text-xs">
                  {raffle.name}
                </p>
                <p className="text-xs text-white">{raffle.date}</p>
              </div>
              <div className="grid grid-cols-3 px-5 items-center">
                <div className="col-span-2 flex justify-end gap-2 z-10">
                  <br />
                  <br />
                </div>
                <div className="col-span-1 justify-end flex">
                  <GoQuestion />
                </div>
              </div>
            </div>
          </Link>
        ))}

        {raffles.map((raffle) => (
          <Link to={`/raffles/${raffle._id}`}>
            <div
              className="flex flex-col rounded-3xl px-2 py-1 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(98.92deg, #26BD35 45%, #000000 83%)",
              }}
            >
              <img src={Jeep} alt="" className="absolute flex w-48" />
              <div className="flex justify-end">
                <img src={lotto} alt="" className="w-16" />
              </div>
              <div className="flex text-end flex-col z-10">
                <p className="text-white font-bold xl:text-sm text-xs">
                  {raffle.name}
                </p>
                <p className="text-xs text-white">{raffle.date}</p>
              </div>
              <div className="grid grid-cols-3 px-5 items-center">
                <div className="col-span-2 flex justify-end gap-2 z-10">
                  <br />
                  <br />
                </div>
                <div className="col-span-1 justify-end flex">
                  <GoQuestion />
                </div>
              </div>
            </div>
          </Link>
        ))} */}

        {/* <Link to="/raffles">
          <div
            className="flex flex-col rounded-3xl px-2 py-1 space-y-2"
            style={{
              background: "linear-gradient(98.92deg, #1A8BC0 45%, #000000 83%)",
            }}
          >
            <img src={Jeep} alt="" className="absolute flex w-48" />
            <div className="flex justify-end">
              <img src={max} alt="" className="w-16" />
            </div>
            <div className="flex text-end flex-col z-10">
              <p className="text-white font-bold xl:text-sm text-xs">
                1991 Land Rover
                <br /> Defender 110
              </p>
              <p className="text-xs text-white">2023-SEP-19 TUESDAY</p>
            </div>
            <div className="grid grid-cols-3 px-5 items-center">
              <div className="col-span-2 flex justify-end gap-2 z-10">
                <p className="text-[#4FC8E8] font-bold">R</p>
                <p className="text-white font-bold">14</p>
                <p className="text-white font-bold">34</p>
                <p className="text-white font-bold">38</p>
                <p className="text-white font-bold">76</p>
              </div>
              <div className="col-span-1 justify-end flex">
                <GoQuestion />
              </div>
            </div>
          </div>
        </Link> */}

        {/* <Link to="/raffles">
          <div
            className="flex flex-col rounded-3xl px-2 py-1 space-y-2"
            style={{
              background: "linear-gradient(98.92deg, #C51B1B 45%, #000000 83%)",
            }}
          >
            <img src={Jeep} alt="" className="absolute flex w-48" />
            <div className="flex justify-end">
              <img src={Loto} alt="" className="w-10" />
            </div>
            <div className="flex text-end flex-col z-10">
              <p className="text-white font-bold xl:text-sm text-xs">
                1991 Land Rover
                <br /> Defender 110
              </p>
              <p className="text-xs text-white">2023-SEP-19 TUESDAY</p>
            </div>
            <div className="grid grid-cols-3 px-5 items-center">
              <div className="col-span-2 flex justify-end gap-2 z-10">
                <p className="text-[#4FC8E8] font-bold">R</p>
                <p className="text-white font-bold">14</p>
                <p className="text-white font-bold">34</p>
                <p className="text-white font-bold">38</p>
                <p className="text-white font-bold">76</p>
              </div>
              <div className="col-span-1 justify-end flex">
                <GoQuestion />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/raffles">
          <div
            className="flex flex-col rounded-3xl px-2 py-1 space-y-2"
            style={{
              background: "linear-gradient(98.92deg, #26BD35 45%, #000000 83%)",
            }}
          >
            <img src={Jeep} alt="" className="absolute flex w-48" />
            <div className="flex justify-end">

              <img src={lotto} alt="" className="w-16" />

            </div>
            <div className="flex text-end flex-col z-10">
              <p className="text-white font-bold xl:text-sm text-xs">
                1991 Land Rover
                <br /> Defender 110
              </p>
              <p className="text-xs text-white">2023-SEP-19 TUESDAY</p>
            </div>
            <div className="grid grid-cols-3 px-5 items-center">
              <div className="col-span-2 flex justify-end gap-2 z-10">
                <p className="text-[#4FC8E8] font-bold">R</p>
                <p className="text-white font-bold">14</p>
                <p className="text-white font-bold">34</p>
                <p className="text-white font-bold">38</p>
                <p className="text-white font-bold">76</p>
              </div>
              <div className="col-span-1 justify-end flex">
                <GoQuestion />
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default RaffleDashboardComponent;

//  const currentDate = new Date();
//  const formattedDate = currentDate.toLocaleString();

// <div className="rafflecards">
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 relative xl:top-40">
//     <div className="w-full md:w-1/2 lg:w-full	">
//       <div className="bg-gradient-to-br from-[#37DBFF] to-[#00529D] p-4 rounded-2xl">
//         <div className="flex flex-col justify-between h-full">
//           <img className=" mx-auto w-16 " src={max} alt=""></img>
//           <div className="flex justify-center items-center gap-4 px-3 py-3 ">
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#157D98] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
//               value=" R "
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
//               value="14"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
//               value="34"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="38"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D6F6FF] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="78"
//               disabled
//               readOnly
//             />
//           </div>
//           <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
//             {formattedDate}
//           </p>

//           <Link to="/raffles" className="link-no-underlin">
//             <div className="flex justify-center items-center">
//               <button
//                 type="button"
//                 className=" border border-white bg-transparent w-1/4 text-white  rounded "
//               >
//                 more
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="w-full md:w-1/2 lg:w-full	">
//       <div className="bg-gradient-to-br from-[#FAD035A8] to-[#E7B600] p-4 rounded-2xl">
//         <div className="flex flex-col justify-between h-full">
//           <img className="mx-auto w-16" src={six} alt=""></img>
//           <div className="flex justify-center items-center gap-4 px-3 py-3 ">
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#E7B600] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
//               value=" R "
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFF7D9] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
//               value="14"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFF7D9] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
//               value="34"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFF7D9] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="38"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFF7D9] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="78"
//               disabled
//               readOnly
//             />
//           </div>
//           <p className="text-black font-subscription  flex justify-center items-center  mb-3 ">
//             {formattedDate}
//           </p>
//           <Link to="/raffles" className="link-no-underlin">
//             <div className="flex justify-center items-center">
//               <button
//                 type="button"
//                 className=" border border-white bg-transparent w-1/4 text-white  rounded "
//               >
//                 more
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="w-full md:w-1/2 lg:w-full	">
//       <div className="bg-gradient-to-br from-[#35FA3DA8] to-[#00E741] p-4 rounded-2xl">
//         <div className="flex flex-col justify-between h-full">
//           <img className="mx-auto w-16" src={lotto} alt=""></img>
//           <div className="flex justify-center items-center gap-4 px-3 py-3 ">
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#059713] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
//               value=" R "
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D0FFC8] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
//               value="14"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D0FFC8] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
//               value="34"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D0FFC8] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="38"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#D0FFC8] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="78"
//               disabled
//               readOnly
//             />
//           </div>
//           <p className="text-black font-subscription flex justify-center items-center  mb-3 ">
//             {formattedDate}
//           </p>
//           <Link to="/raffles" className="link-no-underlin">
//             <div className="flex justify-center items-center">
//               <button
//                 type="button"
//                 className=" border border-white bg-transparent w-1/4 text-white  rounded "
//               >
//                 more
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>

//     <div className="w-full md:w-1/2 lg:w-full	">
//       <div className="bg-gradient-to-br from-[#FA3535A8] to-[#E70000] p-4 rounded-2xl">
//         <div className="flex flex-col justify-between h-full">
//           <img className="mx-auto w-16" src={lotto} alt=""></img>
//           <div className="flex justify-center items-center gap-4 px-3 py-3 ">
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#970505] text-white text-sm p-1  w-6 cursor-not-allowed  rounded-full flex justify-center items-center"
//               value=" R "
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFC8C8] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full"
//               value="14"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFC8C8] text-black text-sm p-1  w-6 cursor-not-allowed rounded-full "
//               value="34"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFC8C8] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="38"
//               disabled
//               readOnly
//             />
//             <input
//               type="text"
//               id="disabled-input-2"
//               aria-label="disabled input 2"
//               className=" bg-[#FFC8C8] text-black text-sm p-1  w-6 cursor-not-allowed  rounded-full"
//               value="78"
//               disabled
//               readOnly
//             />
//           </div>
//           <p className="text-black font-subscription  flex justify-center items-center  mb-3">
//             {formattedDate}
//           </p>
//           <Link to="/raffles" className="link-no-underlin">
//             <div className="flex justify-center items-center">
//               <button
//                 type="button"
//                 className=" border border-white bg-transparent w-1/4 text-white  rounded "
//               >
//                 more
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <div>

// </div>
