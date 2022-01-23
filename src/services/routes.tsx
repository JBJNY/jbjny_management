import Layout from "@Components/layout/layout";
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
          <Route path="/main" element={<Main />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </RecoilRoot>
  );
}

export default Router;
