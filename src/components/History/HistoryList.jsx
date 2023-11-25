import React from 'react'
import { IoIosOptions } from 'react-icons/io'
import { Link } from 'react-router-dom'
import newsimage4 from "../../assets/images/news/4.png";
import { HiDotsHorizontal } from "react-icons/hi";
import { bgStyle } from '../../pages/Raffles/Raffles';

const HistoryList = () => {
    return (
        <div>
            <form className="form-inline relative">
                <input
                    className="form-control mr-sm-2 outline-none bg-gray-300"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                        border: "none",
                        marginBottom: "40px",
                        width: "100%",
                        height: "50px",
                        borderRadius: "10px",
                        padding: "10px",
                    }}
                />
                <button className="absolute top-3 right-5">
                    <IoIosOptions className="text-2xl" />
                </button>
            </form>
            <div className="hitory-container md:pr-32" style={bgStyle}>
                <Link to="/#">
                    <div className="flex flex-row gap-8 xl:mb-5 items-center  border-b-2 border-gray-200">
                        <img
                            src={newsimage4}
                            alt=""
                            className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
                        />
                        <div className="flex w-full flex-col">
                            <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold">1991 land rover defender 110</h3>
                            <p className="text-md xl:text-lg">
                                2023-SEP-19 Tuesday
                            </p>
                            <p className='text-left'> <span className='text-blue-500 font-bold'>R</span> 14 34 46 88</p>
                            <p className="text-xl ml-auto"><HiDotsHorizontal /></p>
                        </div>
                    </div>
                </Link>
                <Link to="/#">
                    <div className="flex flex-row gap-8 xl:mb-5 items-center  border-b-2 border-gray-200">
                        <img
                            src={newsimage4}
                            alt=""
                            className="w-16 h-16 xl:w-16 xl:h-16 rounded-full"
                        />
                        <div className="flex w-full flex-col">
                            <h3 className="text-md xl:text-xl md:text-lg capitalize font-bold">1991 land rover defender 110</h3>
                            <p className="text-md xl:text-lg">
                                2023-SEP-19 Tuesday
                            </p>
                            <p className='text-left'> <span className='text-blue-500 font-bold'>R</span> 14 34 46 88</p>
                            <p className="text-xl ml-auto"><HiDotsHorizontal /></p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HistoryList