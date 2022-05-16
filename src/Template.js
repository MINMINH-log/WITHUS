import React, { useEffect, useState } from "react";
import RightColumn from "Components/RightColumn";
import "css/Main.css";
import "css/Login.css";
import "css/RightColumn.css";
const Template = ({ children, userDb, refreshUser }) => {
  return (
    <div className="container">
      <div className="container-left">{children}</div>
      <div className="container-right">
        <RightColumn userDb={userDb} refreshUser={refreshUser} />
      </div>
    </div>
  );
};

export default Template;
