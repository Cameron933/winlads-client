import { useEffect, useState } from "react";
import TopNav from "../../components/TopNav/TopNav";
import Filters from "../../components/MyEntries/Filters";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import EntriPagination from "../../components/MyEntries/EntriPagination";
import { IoIosTimer } from "react-icons/io";
import noMore from "../../assets/images/icons/no-more.svg";
import { validateCurrentUser } from "../../utils/validateuser";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FiLoader } from "react-icons/fi";
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { LuMinus } from "react-icons/lu";

const recodeCount = 10;

const MyEntries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [valUser, setValUser] = useState({});
  const navigate = useNavigate();
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pastGiveaways, setPastGiveaways] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [catValue, setCatValue] = useState("");
  const [round, setRound] = useState("")
  const [number, setNumber] = useState("")
  const [allRounds, setAllRounds] = useState([])

  const [myGiveaways, setMyGiveaways] = useState([]);

  useEffect(() => {
    currentUserValidation();
  }, []);

  const currentUserValidation = async () => {
    const validator = await validateCurrentUser();
    if (validator.validatorBl) {
      console.log("Session OK", validator.user);
      setValUser(validator.user);
      getMyGiveaways(validator.user.uid, 1, 10, catValue, round, number);
    } else {
      navigate("/login");
      console.log("");
    }
  };


  const getMyGiveaways = async (id, from, to, catValue, roundId, number) => {
    setIsLoading(true)
    console.log(from, to, "from to")
    let baseUrl = `${
      import.meta.env.VITE_SERVER_API
    }/myRaffleRounds?uid=${id}&from=${from}&to=${to}`;

    if(catValue !== "") {
      baseUrl+=`&category=${catValue}`
    }

    if(roundId !== "") {
      baseUrl+=`&round=${roundId}`
    }

    if(number !== "") {
      baseUrl+=`&numbers=${number}`
    }

    await axios
      .get(
       baseUrl
      )
      .then((response) => {
        console.log(response.data.data, "data raffle");
        setMyGiveaways(response.data.data.future);
        setPastGiveaways(response.data.data.past);
        getAllRounds()
        const onePage = Math.ceil(response.data.data.count / recodeCount);
        setDataCount(response.data.data.count);
        setPageCount(onePage);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const pagination = (no) => {
    const fromNo = recodeCount * (no - 1) + 1;
    const toNo = recodeCount * no;
    setCurrentPage(no);
    getMyGiveaways(valUser.uid, fromNo, toNo, catValue, round, number);
  };

  const categories = (cat) => {
    setCatValue(cat);
    getMyGiveaways(valUser.uid, 1, 10, cat, round, number);
  };


  const rounds = (round) => {
    setRound(round);
    getMyGiveaways(valUser.uid, 1, 10, catValue, round, number);
  };

  const getNumbers = (number) => {
    setNumber(number);
    getMyGiveaways(valUser.uid, 1, 10, catValue, round, number);
  };


  const getAllRounds = async () => {
    await axios
      .get(`${import.meta.env.VITE_SERVER_API}/raffleRoundsAllCategories`)
      .then((response) => {
        console.log(response.data.data, "data");
        setAllRounds(response.data.data)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex items-stretch w-full py-4">
      <div className="w-full">
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
                <div className="col-span-1"></div>
                <div className="col-span-1">
                  <TopNav textColor={"black"} />
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="px-0 md:px-10 relative">
            <Filters allRounds={allRounds} round={rounds} selectCatValue={categories} numbers={getNumbers}/>
            <div className="flex items-center justify-between xl:hidden px-5 my-5">
              <h1 className="text-xl font-bold">Upcoming Entries</h1>
              <IoIosTimer className="text-2xl font-bold" />
            </div>
            {isLoading ? (
              <div className="flex justify-center">
                <FiLoader className="w-9 h-9 2xl:w-12 2xl:h-12 special:w-18 special:h-18 animate-spin" />
              </div>
            ) : (
              <>
                {dataCount > 0 ? (
                  <div className="flex flex-col space-y-2">
                    {myGiveaways.map((giveaway, key) => (
                      <div
                        key={key}
                        className="xl:grid grid-cols-5 px-2 xl:px-0 flex flex-col"
                      >
                        <div
                          className="xl:rounded-l-full col-span-1 justify-between items-center rounded-t-2xl py-4 xl:pl-4 px-2 "
                          style={{ backgroundColor: giveaway?.raffle?.color }}
                        >
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-black capitalize text-xs">
                              {giveaway?.raffle.name}
                            </p>
                            <PiBookmarkSimpleLight />
                          </div>
                        </div>
                        <div className="bg-blue-100 py-3 text-xs 2xl:text-sm xl:pr-4 pl-2 pr-2 xl:pl-4 xl:rounded-b-none rounded-b-2xl xl:flex col-span-4 xl:items-center justify-between space-y-1 xl:space-y-0">
                          <div>
                            <p className="capitalize">{giveaway.round.name}</p>
                          </div>
                          <div>
                            <p>{giveaway.entryNumber}</p>
                          </div>
                          <div className="flex flex-row justify-between 2xl:gap-36 xl:gap-12">
                            <p className="text-xs xl:text-sm">
                              {" "}
                              {new Date(giveaway.round.endtime).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <div>
                            {" "}
                            {giveaway.winstatus === "pending" ? (
                              <LuMinus />
                            ) : (
                              <RxCross1 />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                    {pastGiveaways.length > 0 && (
                      <hr className="h-[2px] bg-gray-300 my-10 w-11/12 mx-auto" />
                    )}

                    {pastGiveaways?.map((giveaway, key) => (
                      <div
                        key={key}
                        className="xl:grid grid-cols-5 px-2 xl:px-0 flex flex-col"
                      >
                        <div
                          className="xl:rounded-l-full col-span-1 justify-between items-center rounded-t-2xl py-4 xl:pl-4 px-2 "
                          style={{ backgroundColor: giveaway?.raffle?.color }}
                        >
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-black capitalize text-xs">
                              {giveaway?.raffle.name}
                            </p>
                            <PiBookmarkSimpleLight />
                          </div>
                        </div>
                        <div className="bg-blue-100 py-3 text-xs 2xl:text-sm xl:pr-4 pl-2 pr-2 xl:pl-4 xl:rounded-b-none rounded-b-2xl xl:flex col-span-4 xl:items-center justify-between space-y-1 xl:space-y-0">
                          <div>
                            <p className="capitalize">{giveaway.round.name}</p>
                          </div>
                          <div>
                            <p>{giveaway.entryNumber}</p>
                          </div>
                          <div className="flex flex-row justify-between 2xl:gap-36 xl:gap-12">
                            <p className="text-xs xl:text-sm">
                              {" "}
                              {new Date(giveaway.round.endtime).toLocaleString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                  hour: "numeric",
                                  minute: "numeric",
                                  second: "numeric",
                                }
                              )}
                            </p>
                            <div>
                            {" "}
                            {giveaway.winstatus === "win" ? (
                              <MdDone />
                            ) : giveaway.winstatus === "lost" ? (
                              <RxCross1 />
                            ) : (
                              ""
                            )}
                          </div>
                          </div>
                        
                        </div>
                      </div>
                    ))}

                    <EntriPagination
                      pageCount={pageCount}
                      buttonClick={pagination}
                      currentPage={currentPage}
                      setCurrentPage={pagination}
                    />
                  </div>
                ) : (
                  <div className="w-52 mx-auto my-52">
                    {" "}
                    <img
                      src={noMore}
                      alt="empty"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEntries;
