import vehicle from "../../assets/images/Lottery/Jeep.png";
import SelectRafflePaymentMethod from "../../components/RaffleComponent/SelectRafflePaymentMethod";
import BuyRaffle from "../../components/RaffleComponent/BuyRaffle";
import NewJeep from "../../assets/images/newJeep.png"

const DashboardVehicleCard = ({ name, date, icon, fromColor, type, onButton }) => {
  const handleClick = () => {
    onButton()
  };

  return (
    <>
    <div
      className={`rounded-3xl py-2 px-2 special:px-4 bg-[#1195D4] hover:bg-[#1195D4]/75 cursor-pointer `}
      onClick={handleClick}
    >
      <div className="flex justify-end">
        <img src={icon} alt="" className="w-12 special:w-36" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <img
          src={NewJeep}
          alt="vehicle"
          className="w-36 special:w-96 2xl:w-64"
        />
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-1 text-white">
            <div className="text-white font-bold xl:text-sm text-xs special:text-4xl 2xl:text-xl text-center">
              {name}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DashboardVehicleCard;
