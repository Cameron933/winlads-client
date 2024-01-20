import React from "react";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import MyEntriesButton from "./components/MyEntries/MyEntriesButton";
import { RefreshProvider } from "./utils/RefreshContext";
import Logout from "./components/logout/Logout";

const Layout = () => {
  return (
    <div className="flex flex-row w-full relative">
      <RefreshProvider>
        <SideNav />
        <Outlet />
        {/* <MyEntriesButton /> */}
        {/* <Logout/> */}
      </RefreshProvider>

    </div>
  );
};

export default Layout;
