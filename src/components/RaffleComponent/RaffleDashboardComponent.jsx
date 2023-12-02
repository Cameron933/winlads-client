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
  }, []);

  const getRaffles = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffles`)
      .then((response) => {
        console.log(response.data.data);
        setRaffles(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    {raffles.length > 0 ? (
       <div className="xl:flex grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 special:gap-4 ">
     
       {raffles.map((raffle, key) => (
         <Link key={key} to={`/raffles/${raffle._id}`} className="w-full">
           <div
             className="flex flex-row justify-between items-center px-2 rounded-3xl w-full py-1 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
             style={{
               background: "linear-gradient(98.92deg, #1A8BC0 45%, #000000 83%",
             }}
           >
             <img
               src={Jeep}
               alt=""
               className="flex w-48 special:w-96 2xl:w-64"
             />
             <div>
               <div className="flex justify-end">
                 <img src={max} alt="" className="w-16 special:w-36 2xl:w-24" />
               </div>
               <div className="flex text-end flex-col z-10">
                 <p className="text-white font-bold xl:text-sm text-xs special:text-2xl 2xl:text-lg">
                   {raffle.name}
                 </p>
                 <p className="text-xs text-white special:text-xl 2xl:text-sm">
                   {raffle.date}
                 </p>
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
           </div>
         </Link>
       ))}
     </div>
    ) : (
      <p className="text-center text-2xl font-bold">
          No Giveaways
      </p>
    )}
   
    </>
  );
}

export default RaffleDashboardComponent;
