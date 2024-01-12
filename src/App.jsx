import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import Authentication from "./pages/Authentication/Authentication";
import Loader from "./components/Loader/Loader";
import News from "./pages/News/News";
import Newslist from "./pages/News/Newslist";
import Subscription from "./pages/Subscription/Subscription";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome/Welcome";
import Raffles from "./pages/Raffles/Raffles";
import RafflesDashboard from "./pages/Raffles/RaffleDashbord";
import FaQ from "./pages/FaQ/FaQ";
import BusinessCard from "./pages/BusinessCard/BusinessCard";
import Transaction from "./pages/Transaction/Transaction";
import LiveRaffle from "./pages/LiveRaffle/LiveRaffle";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Messages/Messages";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import GoogleAnalytics from "./utils/GoogleAnalytics";
import TermsCondition from "./pages/Terms&Condition/Terms&Condition";
import Layout from "./Layout";
import Privacy from "./pages/Privacy/Privacy";
import MyEntries from "./pages/MyEntries/MyEntries";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support/Support";
import Withdraw from "./pages/Withdraw/Withdraw";
import Affiliate from "./pages/Affiliate/Affiliate";
import Promo from "./pages/Promo/Promo";
import RefCount from "./pages/Affiliate/RefferalCount";
import Won from "./pages/Won/Won"
import ForgotPassword from "./pages/ForgotPW/ForgotPassword";
import RequestEntries from "./pages/RequestEntries/RequestEntries";
import TagManager from 'react-gtm-module'
import SubDone from "./pages/SubDone";
import PastGiveaways from "./pages/PastGiveaways/PastGiveaways";
import OngoingGiveaways from "./pages/OngoingGiveaways/OngoingGiveaways";
import UpcomingGiveaways from "./pages/UpcomingGiveaways/UpcomingGiveaways";


function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-P2DVFZVB'
}

TagManager.initialize(tagManagerArgs)
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/newslist",
          element: <Newslist />,
        },
        {
          path: "/news/:id",
          element: <News />,
        },
        {
          path: "/subscription",
          element: <Subscription />,
        },
        // {
        //   path: "/giveaways",
        //   element: <RafflesDashboard />,
        // },
        {
          path: "/giveaway/:id",
          element: <Raffles />,
        },
        {
          path: "/faq",
          element: <FaQ />,
        },
        {
          path: "transaction/",
          element: <Transaction />,
        },
        {
          path: "/business-card",
          element: <BusinessCard />,
        },
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/live",
          element: <LiveRaffle />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/subscription-done",
          element: <SubDone />,
          // subscription-done?suc=0&fail=1&sub_id=ds Sample Done Route
        },
        {
          path: "/payment-done",
          element: <PaymentSuccess />,
          // payment-done?suc=1&round_id=sadc  Sample Success Route
          // payment-done?suc=0&fail=1&round_id=ds  Sample Fail Route
        },
        {
          path: "/myentries",
          element: <MyEntries />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/loader",
          element: <Loader />,
        },
        {
          path: "/support",
          element: <Support />,
        },
        {
          path:'/affiliate',
          element:<Affiliate/>
        },
        {
          path:'/promo',
          element:<Promo/>
        },
        {
          path:'/ref',
          element:<RefCount/>
        },
        {
          path:'/requestEntries',
          element:<RequestEntries/>
        },
        {
          path:'/pastGiveaways',
          element:<PastGiveaways/>
        },
        {
          path:'/ongoingGiveaways',
          element:<OngoingGiveaways/>
        },
        {
          path:'/upcomingGiveaways',
          element:<UpcomingGiveaways/>
        },
       
      ],
    },
    {
      path:'/won/:id',
      element:<Won/>
    },

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/conditions",
      element: <TermsCondition />,
    },
    {
      path: "*",
      element: <NotFound />,
    },

    {
      path: "/register/:selectedPackage?",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/subscription-done",
      element: <SubDone />,
    },
  
    {
      path: "/privacy",
      element: <Privacy />,
    },
  ]);

  return (
    <>
      <GoogleAnalytics trackingCode="G-N927BPJE6K" />
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
