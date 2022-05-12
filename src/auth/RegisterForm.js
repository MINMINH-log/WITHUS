/*eslint-disable*/
import React, { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { authService } from "fbase";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  // firebase auth
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        navigate("/", { state: user.uid });
      }
    });
  }, []);
  // 회원가입
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let data;
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      data = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <AuthForm
      onChange={onChange}
      onSubmit={onSubmit}
      email={email}
      password={password}
      type="register"
      errorMsg={errorMsg}
    />
  );
};

export default RegisterForm;
