import React from "react";
import "../src/css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/login" className="link-login-item">
        <div className="link-login">로그인</div>
      </Link>

      <div className="login-sub">
        <span className="login-sub-content">
          <span className="findid">
            <Link to="/findid">아이디찾기</Link>
          </span>
          <span className="findpw">
            <Link to="/findpw">비밀번호찾기</Link>
          </span>
          <span className="signup">
            <Link to="/register">회원가입</Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
