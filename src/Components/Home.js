/* eslint-disable */
import React, { useState } from "react";
import HotTemplate from "HotTemplate";
import HotBoardTemplate from "HotBoardTemplate";
import HotClassifiedTemplate from "HotClassifiedTemplate";
import Template from "Template";
import "css/Main.css";

const Home = ({ userDb, refreshUser }) => {
  return (
    <Template userDb={userDb} refreshUser={refreshUser}>
      <HotTemplate />
      <HotBoardTemplate />
      <HotClassifiedTemplate />
    </Template>
  );
};

export default Home;
