import React from "react";
import SideNav from "./components/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import MyEntriesButton from "./components/MyEntries/MyEntriesButton";

const Layout = () => {
  return (
    <div className="flex flex-row w-full">
      <SideNav />
      <Outlet />
      <MyEntriesButton/>
    </div>
  );
};

export default Layout;
