import React from "react";

function Plancard({ price, plan, a, b, c, bg }) {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-xl transition duration-700 hover:scale-105"
      style={{
        width: "80%",
        background: `${bg}`,
        margin: "auto",
      }}
    >
      <p className="mt-4 border-2 p-2 border-black rounded-md">{plan}</p>
      <p className="my-1" style={{ fontSize: "50px" }}>
        {price}
      </p>
      <p>user/month</p>
      <p className="my-1">{a}</p>
      <p>{b}</p>
      <p className="my-1">{c}</p>
      <button
        className="my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        style={{ background: "black", marginBottom: "10px" }}
      >
        Choose Plan
      </button>
    </div>
  );
}

export default Plancard;
