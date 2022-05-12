/*eslint-disable*/
import React, { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { authService } from "fbase";

const LoginForm = () => {
  const navigate = useNavigate();

  // firebase auth
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        console.log(user);
        navigate("/", { state: user.uid });
      }
    });
  }, []);

  // 로그인
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
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

  const onSubmit = async (e) => {
    e.preventDefault();
    let data;
    try {
      const auth = getAuth();
      data = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <AuthForm
      onChange={onChange}
      onSubmit={onSubmit}
      email={email}
      password={password}
      type="login"
      errorMsg={errorMsg}
    />
  );
};

export default LoginForm;
