import logo2 from "../../assets/images/logo/logo2.png";


function Footer() {
  return (
    <div style={{ background: "black" }}>
      <div className="lg:grid grid-cols-9 gap-1">
        <div className="col-span-1"></div>
        <div className="pl-4 pt-5 col-span-4 lg:pl-0">
          <img src={logo2} alt="" />
          <p className="text-sm" style={{ color: "#fff" }}>
            We provide one-stop solutions for all IT items. your bliss is <br />
            just click away. Star Tech trusts in quality clien.
          </p>
        </div>
        <div className="lg:grid grid-cols-3 gap-1 col-span-4 pb-2">
          {/* <div></div> */}
          {/* <div className="flex p-5 justify-end" style={{ color: "#fff" }}> */}
          <div className="m-5" style={{ color: "#fff" }}>
            <p className="font-bold mb-3">Links</p>
            <ul>
              <li>Home</li>
              <li>Service</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>Feature</li>
            </ul>
          </div>
          <div className="m-5" style={{ color: "#fff" }}>
            <p className="font-bold mb-3">Product</p>
            <ul>
              <li>Membership T&C</li>
              <li>Cars</li>
              <li>Drive</li>
              <li>Winners</li>
            </ul>
          </div>
          <div className="m-5" style={{ color: "#fff" }}>
            <p className="font-bold mb-3">Community</p>
            <ul>
              <li>Global Partners</li>
              <li>Forum</li>
              <li>Careers</li>
              <li>Community</li>
              <li>Brand Assets</li>
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
