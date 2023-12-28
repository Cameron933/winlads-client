import "./Home.css";
// import Footer from "../../components/Footer/footer";
import Footer from "../../components/footerSection/Footer";
import Showcase2 from "../../components/showcase/Showcase2";
import WelcomeHome2 from "../../components/Welcomehome/WelcomeHome2";
import Service from "../../components/Service/Service";
import Youtube from "../../components/youtube/Youtube"
import Benifit from "../../components/benifit/Benifit";
import Gallery2 from "../../components/Gallery/Gallery2";
import ChoosePlane from "../../components/choosePlane/ChoosePlane";
import GetStart from "../../components/getStart/GetStart";
import Contact from "../../components/contact/Contact"

const Home = () => {
  return (
    <div className="pageBgColor">
      <Showcase2 />
      <WelcomeHome2 />
      <GetStart />
      <Service/>
      <Youtube/>
      <Benifit/>
      <Gallery2/>
      <ChoosePlane/>
      <Contact />
      <Footer />

    </div>
  );
};

export default Home;
