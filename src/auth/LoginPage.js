import React from "react";
import AuthTemplate from "./AuthTemplate";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
