import React, { useEffect, useState } from 'react'
import PresentRaffles from './PresentRaffles';
import PastRaffles from './PastRaffles';
import FutureRaffles from './FutureRaffles';
import './Raffle.css';
const RaffleViewer = ({ raffleRounds, setShowPopup, showLessPopUp }) => {
    const [rTime, setRaffleTime] = useState(0);
    const [activeButton, setActiveButton] = useState(0);

    useEffect(() => {

    }, [])

    const handleRaffleTime = (time) => {
        console.log(time + 'TIME CHANGED');
        setRaffleTime(time); //setRaffleRounds(raffleRounds[time])
        setActiveButton(time);
    }
    return (
        <div className='w-full my-24'>
            {/*PAST PRESENT FUTURE  */}
            <div className='flex items-center justify-between font-extrabold w-full lg:w-1/2 px-5 '>
                {/* TODO: Change the Value Pased in here to time accordingly */}
                <button onClick={() => handleRaffleTime(0)} className={`${activeButton === 0 ? 'active' : ''} cursor-pointer p-3`}>
                    PAST
                </button>
                <button onClick={() => handleRaffleTime(1)} className={`${activeButton === 1 ? 'active' : ''} cursor-pointer p-3`}>
                    PRESENT
                </button>
                <button onClick={() => handleRaffleTime(2)} className={`${activeButton === 2 ? 'active' : ''} cursor-pointer p-3`}>
                    FUTURE
                </button>
            </div>

            {/*ITEMS*/}
            <div className="flex flex-col space-y-2 md:flex-row space-x-2 md:justify-start w-full flex-wrap lg:flex-nowrap mt-10 md:mt-5 items-center">
                {
                    rTime === 0 ? <PastRaffles setShowPopup={setShowPopup} /> : (rTime === 1 ? <PresentRaffles setShowPopup={setShowPopup} /> : <FutureRaffles setShowPopup={setShowPopup} showLessPopUP={showLessPopUp}/>)
                }

            </div >
        </div>

    )
}

export default RaffleViewer