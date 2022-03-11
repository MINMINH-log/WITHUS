/*eslint-disable*/
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../modules/auth";
import HelpFind from "./HelpFind";

const FindIdForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.findid }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "findid",
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("findid"));
  }, [dispatch]);
  return (
    <HelpFind
      type="findid"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default FindIdForm;
