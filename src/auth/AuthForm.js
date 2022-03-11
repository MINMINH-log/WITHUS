/*eslint-disable*/
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/AuthForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

const textMap = {
  login: "로그인",
  register: "회원가입",
};
const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <div className="authform-block">
      <form onSubmit={onSubmit}>
        <div className="auth-input-block id">
          <span className="auth-icon id">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            className="auth-input id"
            autoComplete="username"
            name="username"
            placeholder="아이디"
            onChange={onChange}
            value={form.username}
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
            value={form.password}
          />
        </div>
        {type === "register" && (
          <div className="auth-input-block pw-confirm">
            <span className="auth-icon pw-confirm">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              className="auth-input pw-confirm"
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
            />
          </div>
        )}
        <span className="authform-login-btn">{text}</span>
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
    </div>
  );
};

export default AuthForm;
