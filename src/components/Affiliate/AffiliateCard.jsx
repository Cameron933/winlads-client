import React, { useEffect, useState } from "react";
import Ticket from "../../assets/images/affiliate/affiliate.png";
import Money from "../../assets/images/affiliate/earnings.png";
import { validateCurrentUser } from "../../utils/validateuser";
import axios from "axios";
import ItemLoader from "../../components/Loader/ItemLoader";

import { useNavigate } from "react-router";

const AffiliateCard = () => {
    const [valUser, setValUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [wallet, setWallet] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        currentUserValidation();
    }, []);

    const currentUserValidation = async () => {
        const validator = await validateCurrentUser();
        if (validator.validatorBl) {
            console.log("Session OK", validator.user);
            setValUser(validator.user);
            // getTransactionsFunction();
            getEarning(validator.user.uid)
        } else {
            setLoading(false);
        }
    };

    const getEarning = async (valuid) => {
        await axios
            .get(
                `${import.meta.env.VITE_SERVER_API}/getPointBalances?uid=${valuid}`
            )
            .then((response) => {
                setWallet(response?.data?.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const dateObject = new Date(valUser.transaction?.endfrom);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = dateObject.toLocaleString("en-US", options);

    return (
        <div className="bg-white border-gray-300 border border-solid rounded-xl">
            {loading ? (
                <div className="flex justify-center py-12">
                    <ItemLoader className="w-9 h-9 2xl:w-9 2xl:h-9 special:w-18 special:h-18 animate-spin" />
                </div>
            ) : (
                <div className="flex flex-col p-2 space-y-4 2xl:space-y-4">
                    <div className="flex flex-row border-black border-2 rounded-2xl">
                        <div className="from-[#008767] to-black bg-gradient-to-r rounded-l-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
                        <div className="w-10 h-10">
                            <img src={Money} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col text-white">
                                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                                    AUD {wallet.earning || "0.00"}
                                </p>
                                <p className="capitalize text-sm">Total Earning</p>
                            </div>
                        </div>
                        <div className="to-[#CBAD11] from-black bg-gradient-to-r rounded-r-xl flex flex-row flex-1 py-4 md:justify-center xl:justify-center justify-between md:gap-6 xl:gap-6 px-2">
                            <div className="w-10 h-10">
                            <img src={Ticket} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col text-white">
                                <p className="font-semibold 2xl:text-xl special:text-2xl text-lg">
                                    {"0"}
                                </p>
                                <p className="capitalize text-sm">Total Affiliates</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col space-y-1 text-black">
                            <p className="2xl:text-lg font-semibold capitalize">
                                your balance
                            </p>
                            <p className="font-bold text-4xl">AUD {valUser.balance || "0.00"}</p>
                        </div>
                        <div className="flex flex-col space-x-1">
                            <div className="bg-black rounded-full py-1 text-center px-2">
                                <p
                                    style={{ color: !valUser.subscripton?.color || valUser.subscripton?.color === "#000000" ? "white" : valUser.subscripton?.color }}
                                >
                                    {valUser.subscripton?.name || "No plan"}
                                </p>
                            </div>
                            <p className="text-black text-sm">{formattedDate || ""}</p>
                        </div>
                    </div>
                    <div className="bg-black py-2 text-center rounded-xl cursor-pointer hover:bg-black/75" onClick={() => navigate('/withdraw')}>
                        <p className="text-white font-semibold">Withdraw</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AffiliateCard;
