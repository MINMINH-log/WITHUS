/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../modules/auth";
import HelpFind from "./HelpFind";

const FindPasswordForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.findpw }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findpw",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("findpw"));
  }, [dispatch]);
  return (
    <HelpFind
      type="findpw"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default FindPasswordForm;
