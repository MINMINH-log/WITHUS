/*eslint-disable*/
import React, { useEffect } from "react";
import HelpFind from "./HelpFind";

const FindPasswordForm = () => {
  const onChange = (e) => {
    e.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return <HelpFind type="findpw" onChange={onChange} onSubmit={onSubmit} />;
};

export default FindPasswordForm;
