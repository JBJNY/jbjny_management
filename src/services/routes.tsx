import Layout from "@Components/layout/layout";
import AdminEmployee from "@Pages/adminEmployee/AdminEmployee";
import AdminRoom from "@Pages/adminRoom/AdminRoom";
import Login from "@Pages/login";
import Main from "@Pages/main/Main";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

function Router() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin_employee" element={<AdminEmployee />} />
        <Route path="/admin_room" element={<AdminRoom />} />
      </Routes>
    </RecoilRoot>
  );
}

export default Router;
