import React from "react";
import AuthTemplate from "./AuthTemplate";
import FindPasswordForm from "./FindPasswordForm";

const FindPwPage = () => {
  return (
    <AuthTemplate>
      <FindPasswordForm type="findpw" />
    </AuthTemplate>
  );
};

export default FindPwPage;
