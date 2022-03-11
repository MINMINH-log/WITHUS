import React from "react";
import AuthTemplate from "./AuthTemplate";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
