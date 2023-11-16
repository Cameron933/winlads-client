function Sidebar() {
  return (
    <div
      className="hidden lg:flex flex-col"
      style={{
        width: "111px",
        height: "100vh",
        position: "fixed",
        top: "0px",
        zIndex: "1000",
      }}
    >
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(180deg, #46ED43 0%, #0D9D01 100%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
        >
          winlands
        </p>
      </div>
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(180deg, #ED4343 0%, #9D1D01 100%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
        >
          benifits
        </p>
      </div>
      <div
        className="flex justify-center items-center transition duration-700 hover:scale-x-125"
        style={{
          background: "linear-gradient(130deg, #FFF400 1.1%, #CA9E03 97.54%)",
          color: "#fff",
          height: "33.333%",
          textTransform: "uppercase",
          borderRadius: "0px 20px 20px 0px",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            transformRigin: "0 0",
            transform: "rotate(270deg)",
            letterSpacing: "5px",
          }}
        >
          promotions
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
