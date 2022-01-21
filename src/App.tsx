import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@Components/layout/layout";
import Login from "@Pages/login/Login";
import Main from "@Pages/main/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<Main />} />
      </Route>
      <Route path="login/" element={<Login />} />
    </Routes>
  );
};

export default App;
