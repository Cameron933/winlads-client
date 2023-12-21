import React, { useState } from 'react'
import TopNav from '../../components/TopNav/TopNav'
import SideNav from "../../components/SideNav/SideNav";
import Filters from '../../components/MyEntries/Filters';
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import EntriPagination from '../../components/MyEntries/EntriPagination';
import { IoIosTimer } from "react-icons/io";
import noMore from '../../assets/images/icons/no-more.svg';
const MyEntries = () => {
    const [isLoading, setIsLoading] = useState(true);

    const data = [
        {
            color: '#1196D5',
            round: '1991 Land Rover Defender 110',
            letter:'R',
            numbers: '14 52 43 12',
            date: '2023-SEP-19 TUESDAY',
            status: 'win'
        },
        {
            color: '#366B71',
            round: '1991 Land Rover Defender 110',
            letter:'R',
            numbers: '14 52 43 12',
            date: '2023-SEP-19 TUESDAY',
            status: 'loss'
        },
        {
            color: '#E86363',
            round: '1991 Land Rover Defender 110',
            letter:'R',
            numbers: '14 52 43 12',
            date: '2023-SEP-19 TUESDAY',
            status: 'win'
        },
        {
            color: '#CBAD11',
            round: '1991 Land Rover Defender 110',
            letter:'R',
            numbers: '14 52 43 12',
            date: '2023-SEP-19 TUESDAY',
            status: 'loss'
        }
    ]
    return (
        <div className='flex items-stretch w-full'>
            <div className='bg-red-100 bg-green-100 bg-yellow-100 bg-blue-100 hidden'></div>
            <SideNav />
            <div className='w-full'>
            <div className="flex flex-col xl:flex-col flex-1 px-1 gap-5 w-full">
                {/* left side */}
                <div className="flex flex-col flex-1 ">
                    <div className="block xl:hidden space-y-4">
                        <div className=" rounded-b-3xl py-4">
                            <TopNav />
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex flex-col space-y-4 items-end">
                    <div className=" rounded-b-3xl space-y-4 relative w-web">
                        <div className="grid grid-cols-2 gap-4 m-2">
                            <div className="col-span-1">

                            </div>
                            <div className="col-span-1">
                                <TopNav textColor={"black"} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className='px-0 md:px-10 relative'>
                    <Filters />
                    <div className='flex items-center justify-between xl:hidden px-5 my-5'>
                    <h1 className='text-xl font-bold'>Upcoming Entries</h1>
                    <IoIosTimer className='text-2xl font-bold'/>
                    </div>
                    {
                       data && data.length > 0 ? ( data.map((row, index) => (
                            <div key={index} className='mb-2 flex xl:flex-row flex-col items-center justify-between rounded-3xl mx-2 xl:rounded-none overflow-hidden'>
                                <div className={`p-4 xl:rounded-l-full text-white capitalize xl:w-1/6 w-full text-center xl:text-left`} style={{ backgroundColor: row.color }}>
                                    {row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black xl:flex-1 w-full`}>
                                    {row.round}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black xl:flex-1 w-full`}>
                                    <p><span className={`text-blue-500 font-bold`}>{row.letter} </span>{row.numbers}</p>
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black w-full xl:w-auto `}>
                                    {row.date}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black min-w-[150px] xl:text-center w-full xl:w-auto`}>
                                    {'-'}
                                </div>
                            </div>
                        )) ) :(<div className='w-52 mx-auto my-52'> <img src={noMore} alt="empty" className='w-full h-full object-contain' /></div>)
                    }
                    <hr className='h-[2px] bg-gray-300 my-10 w-11/12 mx-auto'/>
                    {
                        data.map((row, index) => (
                            <div key={index} className='mb-2 flex xl:flex-row flex-col items-center justify-between rounded-3xl mx-2 xl:rounded-none overflow-hidden'>
                                <div className={`p-4 xl:rounded-l-full text-white capitalize xl:w-1/6 w-full`} style={{ backgroundColor: row.color }}>
                                    {row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black xl:flex-1 w-full`}>
                                    {row.round}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black xl:flex-1 w-full`}>
                                    <p><span className={`text-blue-500 font-bold`}>{row.letter} </span>{row.numbers}</p>
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black w-full xl:w-auto `}>
                                    {row.date}
                                </div>
                                <div className={`bg-${row.color == '#1196D5' ? 'blue' : row.color == '#366B71' ? 'green' : row.color == '#E86363' ? 'red' : 'yellow'}-100 xl:p-4 py-1 px-4 text-black min-w-[150px] xl:text-center w-full xl:w-auto`}>
                                    {row.status == 'win' ? <MdDone  className='text-2xl mx-auto text-blue-500'/> : <RxCross1 className='text-2xl mx-auto text-red-500'/>}
                                </div>
                            </div>
                        ))
                    }
                    <EntriPagination/>
                </div>

            </div>
            </div>
        </div>
    )
}

export default MyEntries