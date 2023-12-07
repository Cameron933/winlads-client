import winladsCard from "../../assets/images/BusinessCard/winladsCard.png";
import Signal from "../../assets/images/BusinessCard/Signal.png";
import png2 from "../../assets/images/BusinessCard/png2.png";

const BCard = () => {
    return (

        <div className="bg-black rounded-t-[35px] rounded-b-[35px] px-4 special:px-8 2xl:px-6 justify-between py-4 special:py-8 2xl:py-4 cursor-pointer">
            <div className="flex flex-row justify-between item-center">
                <div className="col-span-8">
                    <img src={winladsCard} className="w-20 special:w-22" alt="Winlads Card" />
                </div>

                <div className="xl:space-y-2 space-y-1 px-2 col-span-4">
                    <img src={Signal} className="w-4" alt="Signal" />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col xl:space-y-2 space-y-1 px-2 col-span-4">
                    <img src={png2} alt="" />
                </div>

                <span className="text-blue text-center md:text-sm xl:text-sm 2xl:text-sm special:text-xl">
                    "Connecting hearts, uplifting lives: Our People-centric giveaways"
                </span>
            </div>
        </div>
        

    );
};

export default BCard;
