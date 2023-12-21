import React, { useState } from 'react'
import { IoIosOptions } from "react-icons/io";
import { GoBell } from "react-icons/go";
const Filters = ({ categoryVal, roundVal, winStatus, validDate, entNumber }) => {
    const [isCatShow, setIsCat] = useState(false);
    const [isRoundShow, setIsRound] = useState(false);
    const [winShow, setWinShow] = useState(false);

    const [catValue , setCatValue] = useState('Giveaway Category');
    const [roundValue, setRoundVal] = useState('Giveaway Rounds');

    const handleCategoryShow = () => {
        setIsCat((prev) => !prev);
    }
    const handleRoundsShow = () => {
        setIsRound((prev) => !prev);
    }
    const handleWinShow = () => {
        setWinShow((prev) => !prev);
    }

    const handleCatChange = (val)=>{
        setCatValue(val)
        categoryVal(val)
        setIsCat(false);
    }
    const handleRoundChange = (val)=>{
        setRoundVal(val);
        roundVal(val);
        setIsRound(false);
    }

    return (
        <>
            <h1 className='special:text-4xl xl:text-3xl md:text-xl text-lg font-extrabold mb-10 xl:block hidden'>My Entries</h1>
            <div className='hidden items-center xl:flex justify-between my-3 gap-4 xl:px-2'>
                <div className='relative w-1/6'>
                    <div className='w-full text-ellipsis overflow-hidden flex items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold'>
                        <h5 className='text-nowrap  text-ellipsis overflow-hidden'>{catValue}</h5>
                        <IoIosOptions className='text-2xl m-1 cursor-pointer flex-shrink-0' onClick={handleCategoryShow} />
                    </div>
                    {isCatShow && <ul className='absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold' >
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={()=>handleCatChange('Blue')}>Blue</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={()=>handleCatChange('Yellow')}>Yellow</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={()=>handleCatChange('Red')}>Red</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={()=>handleCatChange('Green')}>Green</li>
                    </ul>}
                </div>
                {/* Giveaway Rounds */}
                <div className='relative flex-1'>
                    <div className='flex items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold'>
                        <h5 className='w-max'>{roundValue}</h5>
                        <IoIosOptions className='text-2xl m-1 cursor-pointer' onClick={handleRoundsShow} />
                    </div>
                    {isRoundShow && <ul className='absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold' >
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => handleRoundChange('1')}>Round 1</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => handleRoundChange('2')}>Round 2</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => handleRoundChange('3')}>Round 3</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => handleRoundChange('4')}>Round 4</li>
                    </ul>}
                </div>
                {/* Entry Numbers */}
                <input type="text" name="entry-number" className='bg-gray-300 flex-1 px-4 py-3 gap-2 rounded-full text-xl font-semibold placeholder:font-semibold placeholder:text-black outline-none' placeholder='Entry Numbers' onChange={(e) => entNumber(e.target.value)} />
                {/* Valid Date */}
                <input type="date" name="valid-date" className='bg-gray-300 flex-3 max-w-[300px] px-4 py-3 gap-2 rounded-full text-xl font-semibold cursor-pointer' placeholder='Valid Date' onChange={(e) => validDate(e.target.value)} />
                {/* Win Status */}
                <div className='relative flex-4 cursor-pointer'>
                    <div className='flex items-center justify-between bg-gray-300 px-4 py-3 gap-2 rounded-full text-xl font-semibold w-max' onClick={handleWinShow}>
                        <h5>Win State</h5>
                    </div>
                    {winShow && <ul className='absolute left-0 w-full p-3 bg-white rounded-xl border border-gray-300 text-xl font-semibold' >
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => winStatus(1)}>Win</li>
                        <li className='p-3 hover:bg-gray-200 cursor-pointer' onClick={() => winStatus(0)}>Loss</li>
                    </ul>}
                </div>
            </div>

            <input type="text" name="search" className='rounded-xl px-4 py-4 outline-none w-full bg-gray-200 xl:hidden' placeholder='Search'/>
           
        </>
    )
}

export default Filters