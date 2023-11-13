import "./payments.css";
import Accept from "../../../src/assets/images/icons/accept 3.png";
import Arrow from "../../../src/assets/images/icons/export 1.png";

function Payments() {
  return (
    <div className="mx-5 xl-mx-10">
      <div className="text-center mt-16 text-2xl font-semibold">
        <h4 className="text-2xl font-semibold">Pricing</h4>
        <h2 className="font-sans font-semibold text-5xl">
          Choose a server plan
        </h2>
        <h5 className="font-sans text-lg my-10">
          Sign up now, upgrade anytime. Every new account gets a
          <br />
          14-day trial of our Pro features.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-black text-white rounded-2xl p-5 w-full md:w-1/4 space-y-2 custom-background-price">
          <h5 className="text-xl font-bold">Standard</h5>
          <h6 className="text-gray-500">for the basic</h6>
          <div className="mb-5">
            <h2 className="text-4xl font-bold">$10</h2>
          </div>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-32 "
          >
            <img src={Arrow} className="w-4" />
            Join waitlist
          </div>

          <div className="flex flex-col text-gray-400 pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500">
                <span className="text-bold text-white">2 days</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500 text-x">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500 text-x">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl p-5 w-full md:w-1/4 space-y-2 custom-background-price">
          <h5 className="text-xl font-bold">Bronze</h5>
          <h6 className="text-gray-500">for the basic</h6>
          <h2 className="text-4xl font-bold">$30</h2>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>
          <div className="flex flex-col pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <span className="text-bold text-white">1 Week</span> Database
              Discount Access
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500 text-x">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500 text-x">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl  p-5 w-full md:w-1/4 space-y-2 custom-background-price">
          <h5 className="text-xl font-bold">Silver</h5>
          <h6 className="text-gray-500">for the basic</h6>
          <h2 className="text-4xl font-bold ">$100</h2>

          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>

          <div className="flex flex-col space-y-2 pt-5">
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p>
                <span className="text-bold text-white">1 Month</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500 text-x">LMCT+ Event Invites</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 text-gray-500">
            <img src={Accept} className="w-4" />
            <p className="text-gray-500 text-x">10% Off LMCT+ Merch</p>
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl  p-5 w-full md:w-1/4 space-y-2 custom-background-price">
          <h5 className="text-xl font-bold">Platinum</h5>
          <h6 className="text-gray-500">for the basic</h6>
          <h2 className="text-4xl font-bold">$250</h2>
          <div
            href="/"
            className="flex flex-row gap-2 items-center px-2 py-1 bg-slate-50 text-black rounded-2xl w-28 "
          >
            <img src={Arrow} className="w-4" />
            Start trial
          </div>
          <div className="flex flex-col pt-5 space-y-2">
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p>
                <span className="text-bold text-white">6 Months</span> Database
                Discount Access
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500">LMCT+ Event Invites</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-gray-500">
              <img src={Accept} className="w-4" />
              <p className="text-gray-500">10% Off LMCT+ Merch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
