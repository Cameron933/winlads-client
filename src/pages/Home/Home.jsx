import "./Home.css";
// import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Main from "../../components/Main/Main";
import Join from "../../components/Join/join";
import Benefits from "../../components/Benefits/Benefits";
import Payments from "../../components/PaymentsCardGroup/payments";
import SignUpCardGroup from "../../components/SignUpCardGroup/SignUpCardGroup";
import NumberCardGroup from "../../components/NumberCardGroup/NumberCardGroup";
import Partners from "../../components/Partners/Partners";
import Showcase from "../../components/showcase/Showcase";
import Sidebar from "../../components/sidebar/Sidebar";
import Secondpage from "../../components/secondpage/Secondpage";
import Thirdpage from "../../components/thirdpage/Thirdpage";
import Fourthpage from "../../components/fourthpage/Fourthpage";
import Fifthpage from "../../components/fifthpage/Fifthpage";
import Footer from "../../components/footerSection/Footer";
import ChechSecondPage from "../../components/secondpage/ChechSecondPage";
import StatusSection from "../../components/Status/StatusSection";
import Showcase2 from "../../components/showcase/Showcase2";
import WelcomeHome2 from "../../components/Welcomehome/WelcomeHome2";
import Service from "../../components/Service/Service";
import Youtube from "../../components/youtube/Youtube"
import Benifit from "../../components/benifit/Benifit";
import Gallery2 from "../../components/Gallery/Gallery2";
import ChoosePlane from "../../components/choosePlane/ChoosePlane";

const Home = () => {
  return (
    <div>
      {/* <Header />
      <Main />
      <Join />
      <SignUpCardGroup />
      <NumberCardGroup />
      <Partners />
      <Benefits />
      <Payments />
      <Footer /> */}
      {/* <Sidebar /> */}
      <Showcase2 />
      <WelcomeHome2 />
      <Service/>
      <Youtube/>
      <Benifit/>

      <Gallery2/>
      
      {/* <Gallery/> */}

      <ChoosePlane/>

      {/* <Fifthpage /> */}
      <Footer />
      {/* <Showcase /> */}
      {/* <Secondpage /> */}
      {/* <StatusSection />
      <Thirdpage />
      <ChechSecondPage/>
      <Fourthpage />
      <Fifthpage />
      <Footer /> */}
    </div>
  );
};

export default Home;
