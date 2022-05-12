/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import "../css/AuthForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const AuthForm = ({ type, onChange, onSubmit, errorMsg }) => {
  const textMap = {
    login: "로그인",
    register: "회원가입",
  };
  const text = textMap[type];
  return (
    <div className="authform-block">
      <form onSubmit={onSubmit}>
        <div className="auth-input-block email">
          <span className="auth-icon email">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            className="auth-input id"
            autoComplete="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
          />
        </div>
        <div className="auth-input-block pw">
          <span className="auth-icon pw">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <input
            className="auth-input pw"
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
          />
        </div>

        <input type="submit" className="authform-login-btn" value={text} />
      </form>
      <div className="auth-footer">
        {type === "login" ? (
          <>
            <Link to="/findpw">비밀번호 찾기</Link>
            <Link to="/findid">아이디 찾기</Link>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
      <h1>{errorMsg}</h1>
    </div>
  );
};

export default AuthForm;
