import "./join.css"
import car from "../../assets/images/services/service-3.png";
import { motion } from "framer-motion";

function Join() {
  return (
    <div className="mx-5 xl:px-20">
      <div className="join">
        <motion.img
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src={car}
          alt="Your Logo"
          className="background-image-join"
        ></motion.img>

        <h2 className="J-tittle">
          Join us today and gain entry to Australia s most extensive and
          exceptional rewards network!
          <br></br>
        </h2>
      </div>
    </div>
  );
}

export default Join