import React from "react";
import AuthTemplate from "./AuthTemplate";
import FindIdForm from "./FindIdForm";

const FindIdPage = () => {
  return (
    <AuthTemplate>
      <FindIdForm type="findid" />
    </AuthTemplate>
  );
};

export default FindIdPage;
