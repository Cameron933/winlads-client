import React from "react";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import MyEntriesButton from "./components/MyEntries/MyEntriesButton";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Layout = () => {
  return (
    <div className="flex flex-row w-full relative">
      <SideNav />
      <Outlet />
      <MyEntriesButton />
      <MessengerCustomerChat pageId="171684687116166" />,
    </div>
  );
};

export default Layout;
