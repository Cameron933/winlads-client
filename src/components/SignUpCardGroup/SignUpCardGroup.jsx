import "./SignUpCardGroup.css";
import image1 from "../../assets/images/features/1.png";
import image2 from "../../assets/images/features/2.png";
import image3 from "../../assets/images/features/3.png";

function SignUpCardGroup() {
  return (
    <div className="">
      <div className="card-group flex mb-40 xl:flex-row flex-col sm:mb-5 xl:ml-6 xl:px-20">
        <div className="card  p-10 mb-10 xl:px-20 hover-up ">
          <div className="card-body">
            <h5 className="card-title">Automotive</h5>
            <br></br>
            <p className="card-text">
              Your one-stop-shop for exclusive offers from Australias leading
              performance & tuning workshops, panel beaters, aftermarket part &
              accessories, and everything else automotive
            </p>
            <img className="card-img-top" src={image1} alt="saving"></img>
          </div>
        </div>
        <div className="card  p-10 mb-10 xl:px-20 hover-up">
          <div className="card-body">
            <h5 className="card-title">Homewares, Trades & Services</h5>
            <br></br>
            <p className="card-text">
              Homewares, Trades & Services We ve teamed up with the best in the
              business. Get great deals on Furniture, homeware & decor,
              electrical, plumbing and more!
            </p>
            <img className="card-img-top" src={image3} alt="saving"></img>
          </div>
        </div>
        <div className="card  p-10 mb-10 xl:px-20 hover-up">
          <div className="card-body">
            <h5 className="card-title">Merchandise</h5>
            <br></br>
            <p className="card-text">
              Exclusive merchandise offers and designs from both LMCT+ and our
              Benefits. Great quality swag from your favourite brands. Including
              some exclusive designs from bags, T shirts and more..
            </p>
            <img className="card-img-top" src={image2} alt="Benefits"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpCardGroup;
