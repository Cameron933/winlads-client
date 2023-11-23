// import './App.css';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Authentication from './pages/Authentication/Authentication';
import Loader from './components/Loader/Loader';
import News from './pages/News/News';
import Newslist from "./pages/News/Newslist";
import Subscription from "./pages/Subscription/Subscription";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from "./components/Welcome/Welcome";
import Raffles from "./pages/Raffles/Raffles";
import RafflesDashboard from "./pages/Raffles/RaffleDashbord";
import FaQ from "./pages/FaQ/FaQ";
import Notice from "./pages/Notice/Notice";
import BusinessCard from "./pages/BusinessCard/BusinessCard";
import Transaction from "./pages/Transaction/Transaction";
import Transfer from "./pages/Transaction/Trasfer"
import LiveRaffle from "./pages/LiveRaffle/LiveRaffle";
import Profile from "./pages/Profile/Profile";
import NoticeInner from "./pages/Notice/NoticeInner";
import Messages from "./pages/Messages/Messages";
import History from "./pages/History/History";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/authentication",
      element: <Authentication />,
    },
    {
      path: "/loader",
      element: <Loader />,
    },
    {
      path: "/news",
      element: <News />,
    },
    {
      path: "/newslist",
      element: <Newslist />,
    },
    {
      path: "/subscription",
      element: <Subscription />,
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
    {
      path: "/raffles",
      element: <RafflesDashboard />,
    },
    {
      path: "/raffles/:id",
      element: <Raffles />,
    },
    {
      path: "/faq",
      element: <FaQ />,
    },
    {
      path: "/notice",
      element: <Notice />,
    },
    {
      path: "/notice-inner",
      element: <NoticeInner />,
    },
    {
      path: "transaction/",
      element: <Transaction />,
    },
    {
      path: "transfer/",
      element: <Transfer />,
    },
    {
      path: "/business-card",
      element: <BusinessCard />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/live-raffle",
      element: <LiveRaffle />,
    },
    ,
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
