import vehicle from "../../assets/images/Lottery/Jeep.png";

const DashboardVehicleCard = ({ name, date, icon, fromColor }) => {
  return (
    <div
      className={`bg-gradient-to-r from-[${fromColor}] to-black rounded-3xl py-2 px-2 special:px-4 border border-2 hover:border-black`}
    >
       <div className="flex justify-end">
            <img src={icon} alt="" className="w-12 special:w-36" />
          </div>
      <div className="flex flex-row justify-between items-center">
        <img
          src={vehicle}
          alt="vehicle"
          className="w-36 special:w-96 2xl:w-64"
        />
        <div className="flex flex-col space-y-2">
      
          <div className="flex flex-col space-y-1 text-white">
            <div className="text-white font-bold xl:text-sm text-xs special:text-4xl 2xl:text-2xl">{name}</div>
            <div className="text-[10px] text-white special:text-2xl 2xl:text-xl">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardVehicleCard;
