/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import "../css/AuthForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser, faLock, faAt } from "@fortawesome/free-solid-svg-icons";

const HelpFind = ({ type, onChange, onSubmit }) => {
  return (
    <div className="authform-block">
      <form onSubmit={onSubmit}>
        <div className="auth-input-block name">
          <span className="auth-icon name">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            className="auth-input name"
            autoComplete="name"
            name="name"
            placeholder="이름"
            onChange={onChange}
          />
        </div>

        {type === "findpw" && (
          <div className="auth-input-block id">
            <span className="auth-icon id">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              className="auth-input id"
              autoComplete="id"
              name="id"
              placeholder="아이디"
              type="id"
              onChange={onChange}
            />
          </div>
        )}
        <div className="auth-input-block email">
          <span className="auth-icon email">
            <FontAwesomeIcon icon={faAt} />
          </span>
          <input
            className="auth-input email"
            autoComplete="email"
            name="email"
            placeholder="이메일"
            type="email"
            onChange={onChange}
          />
        </div>

        <span className="authform-login-btn">확인</span>
      </form>
      <div className="auth-footer">
        {type === "findid" ? (
          <>
            <Link to="/findpw">비밀번호 찾기</Link>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
          </>
        ) : (
          <>
            <Link to="/findid">아이디 찾기</Link>
            <Link to="/login">로그인</Link>
            <Link to="/register">회원가입</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default HelpFind;
