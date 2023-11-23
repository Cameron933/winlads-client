import React from 'react'
import Jeep from "../../assets/images/Lottery/Jeep.png";
import max from "../../assets/images/rafflesImages/max.png";
import { GoQuestion } from 'react-icons/go';

const FutureRaffles = () => {
     // Common raffleid for all arrays
     const commonRaffleId = "6543e08c2076f209adae93a2";
        // Array 3
        const raffleArray3 = [
            {
                "_id": "another_different_id_1",
                "name": "Different Raffle 1",
                "date": "2023-12-05T15:00:00.000Z",
                "raffleid": commonRaffleId,
                "desc": "Another Different Description 1"
            },
            {
                "_id": "another_different_id_2",
                "name": "Another Different Raffle 2",
                "date": "2023-12-07T15:00:00.000Z",
                "raffleid": commonRaffleId,
                "desc": "Different Description 2"
            },
            {
                "_id": "another_different_id_2",
                "name": "Another Different Raffle 2",
                "date": "2023-12-07T15:00:00.000Z",
                "raffleid": commonRaffleId,
                "desc": "Different Description 2"
            },
            {
                "_id": "another_different_id_2",
                "name": "Another Different Raffle 2",
                "date": "2023-12-07T15:00:00.000Z",
                "raffleid": commonRaffleId,
                "desc": "Different Description 2"
            }
        ];
        return (
            raffleArray3.map((round, key) => (
    
                <div
                key={key}
                className="xl:w-1/4 w-full flex cursor-pointer flex-col rounded-3xl px-2 py-3 space-y-2 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 "
                style={{
                    background:
                        "linear-gradient(98.92deg, #EF4444 45%, #000000 83%)",
                }}
                onClick={() => setShowPopup(true)}
            >
                <img src={Jeep} alt="" className="absolute flex w-48" />
                <div className="flex justify-end">
                    <img src={max} alt="" className="w-16" />
                </div>
                <div className="flex text-end flex-col z-10">
                    <p className="text-white font-bold xl:text-sm text-xs">
                        {round.name}
                    </p>
                    <p className="text-xs text-white">{round.date}</p>
                </div>
                <div className="flex justify-between px-5 items-center w-full">
                        <div className="w-10/12 overflow-clip flex gap-2 z-10">
                            {/* <p className="text-[#4FC8E8] font-bold">R</p>
          <p className="text-white font-bold">14</p>
          <p className="text-white font-bold">34</p>
          <p className="text-white font-bold">38</p>
          <p className="text-white font-bold">76</p> */}
                            <p className="text-white w-full whitespace-nowrap">{round.desc}</p>
                        </div>
    
                        <div className="w-1">
                            <GoQuestion />
                        </div>
                    </div>
            </div>
    
            ))
        )
}

export default FutureRaffles