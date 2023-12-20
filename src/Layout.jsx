import React from "react";
import SideNav from "./components/SideNav/SideNav";

const Layout = ({ children }) => {
  return (
    <div>
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
