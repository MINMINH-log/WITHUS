/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import "../css/AuthTemplate.css";

const AuthTemplate = ({ children }) => {
  return (
    <div className="authtemplate-block">
      <div className="authtemplate-box">
        <div className="auth-logo-area">
          <Link to="/Home">
            <img
              className="auth-logo"
              src={require("../img/withus_logo.png")}
            />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
