import logo2 from "../../assets/images/logo/logo2.png";


function Footer() {
  return (
<div style={{ background: "black" }} className="md:pl-0">
  <div className="flex flex-col md:flex-row md:px-14">
    <div className="xl:w-2/3 md:w-1/2 w-full pl-4 pt-5 2xl:pt-10 lg:pl-0">
      <img src={logo2} alt="" className="2xl:w-96" />
      <p className="text-sm mt-5 2xl:text-2xl" style={{ color: "#fff" }}>
        We provide one-stop solutions for all IT items. your bliss is <br />
        just click away. Star Tech trusts in quality clien.
      </p>
    </div>
    <div className="flex xl:w-1/3 md:w-1/2 w-full justify-between pb-2 linklist">
      <div className="m-5" style={{ color: "#fff" }}>
        <p className="font-bold mb-3 2xl:text-2xl">Links</p>
        <ul className="2xl:text-xl">
          <li>Home</li>
          <li>Service</li>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Feature</li>
        </ul>
      </div>
      <div className="m-5" style={{ color: "#fff" }}>
        <p className="font-bold mb-3 2xl:text-2xl">Product</p>
        <ul className="2xl:text-xl">
          <li>Membership T&C</li>
          <li>Cars</li>
          <li>Drive</li>
          <li>Winners</li>
        </ul>
      </div>
      <div className="m-5" style={{ color: "#fff" }}>
        <p className="font-bold mb-3 2xl:text-2xl">Community</p>
        <ul className="2xl:text-xl">
          <li>Global Partners</li>
          <li>Forum</li>
          <li>Careers</li>
          <li>Community</li>
          <li>Brand Assets</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default Footer;
