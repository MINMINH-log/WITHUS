/*eslint-disable*/
import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import WritePage from "./write/WritePage";
import MainTemplate from "./MainTemplate";
import FindPwPage from "./auth/FindPwPage";
import FindIdPage from "./auth/FindIdPage";
import ReadMore from "./readmore/ReadMore";

const App = () => {
  return (
    <Routes>
      <Route element={<MainTemplate />} path="*" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<FindIdPage />} path="/findid" />
      <Route element={<FindPwPage />} path="/findpw" />
      <Route element={<WritePage />} path="/write" />
      <Route element={<ReadMore />} path="/:src/:writer/:id" />
    </Routes>
  );
};

export default App;
