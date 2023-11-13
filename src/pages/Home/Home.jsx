import './Home.css'
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import Main from "../../components/Main/Main";
import Join from "../../components/Join/join";
import Benefits from "../../components/Benefits/Benefits";
import Payments from "../../components/PaymentsCardGroup/payments";
import SignUpCardGroup from "../../components/SignUpCardGroup/SignUpCardGroup";
import NumberCardGroup from "../../components/NumberCardGroup/NumberCardGroup";
import Partners from "../../components/Partners/Partners";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Join />
      <SignUpCardGroup />
      <NumberCardGroup />
      <Partners />
      <Benefits />
      <Payments />
      <Footer />
    </div>
  );
}

export default Home
