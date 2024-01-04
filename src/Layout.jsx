import React from "react";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import MyEntriesButton from "./components/MyEntries/MyEntriesButton";
import { RefreshProvider } from "./utils/RefreshContext";

const Layout = () => {
  return (
    <div className="flex flex-row w-full relative">
      <RefreshProvider>
        <SideNav />
        <Outlet />
        <MyEntriesButton />
      </RefreshProvider>

    </div>
  );
};

export default Layout;
