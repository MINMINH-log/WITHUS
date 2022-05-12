/*eslint-disable*/
import React, { useEffect } from "react";
import HelpFind from "./HelpFind";

const FindIdForm = () => {
  const onChange = (e) => {
    e.preventDefault();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return <HelpFind type="findid" onChange={onChange} onSubmit={onSubmit} />;
};

export default FindIdForm;
