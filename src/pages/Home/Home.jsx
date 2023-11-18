import './Home.css'
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
import Footer from "../../components/footerSection/Footer"

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
      <Sidebar />
      <Showcase />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />
      <Fifthpage />
      <Footer />
    </div>
  );
}

export default Home
