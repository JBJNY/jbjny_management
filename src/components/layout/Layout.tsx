import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      기본 레이아웃
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
