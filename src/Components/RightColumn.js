/* eslint-disable */
import React, { useState } from "react";
import "css/RightColumn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faStar,
  faHistory,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileAlt,
  faCommentAlt,
  faHeart,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import "css/Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { authService } from "fbase";
import { signOut } from "firebase/auth";
import { AiFillSetting, AiFillBell } from "react-icons/ai";

const RightColumn = ({ userDb, refreshUser }) => {
  const [myBox, setMyBox] = useState([
    { name: "my-post", text: "내 게시글", icon: faFileAlt },
    { name: "my-comment", text: "내 댓글", icon: faCommentAlt },
    { name: "my-like", text: "좋아한 글", icon: faHeart },
    { name: "my-scrap", text: "스크랩", icon: faBookmark },
    { name: "my-msg", text: "쪽지함", icon: faEnvelope },
  ]);

  // 로그아웃
  const navigate = useNavigate();
  const onLogout = () => {
    signOut(authService);
    window.location.reload(true);
    navigate("/");
  };
  const [favIsOpened, setFavIsOpened] = useState(false);
  const [latestIsOpened, setLatestIsOpened] = useState(false);
  const onToggleFavBox = () => {
    if (userDb) {
      setFavIsOpened((prev) => !prev);
    }
  };

  const onToggleLatestBox = () => {
    if (userDb) {
      setLatestIsOpened((prev) => !prev);
    }
  };

  const Login = () => {
    return (
      <>
        {userDb ? (
          <>
            <div className="user">
              <img className="photo" src={userDb.photoURL} />
              <span className="displayname">{userDb.displayName}</span>
              <span className="alarm">
                <AiFillBell />
              </span>
              <span className="setting">
                <Link to="/userhelp">
                  <AiFillSetting />
                </Link>
              </span>
              <div className="login-bottom-wrap">
                <button className="write-btn">
                  <Link to="/write">글쓰기</Link>
                </button>
                <button onClick={onLogout} className="logout-btn">
                  로그아웃
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </>
    );
  };

  const MyBox = () => {
    return (
      <div className="my-box">
        <ul className="box-items" active={userDb ? "true" : "false"}>
          {myBox.map((c) => (
            <li className="box-item" key={c.name}>
              <span className="box-item-icon">
                <FontAwesomeIcon icon={c.icon} />
              </span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const FavBoard = () => {
    return (
      <div className="fav">
        <div className="fav-nav" active={userDb ? "true" : "false"}>
          <span className="fav-icon">
            <FontAwesomeIcon icon={faStar} />
          </span>
          <span className="fav-title">즐겨찾는 게시판</span>
          <span className="dropdown">
            <FontAwesomeIcon icon={faAngleDown} onClick={onToggleFavBox} />
          </span>
        </div>
        <div active={favIsOpened.toString()} className="fav-wrap">
          <ul className="fav-items">
            <li className="fav-item">생명공학과</li>
            <li className="fav-item">베트남어과</li>
            <li className="fav-item">설문게시판</li>
            <li className="fav-item">경영학과</li>
            <li className="fav-item">컴퓨터공학과</li>
          </ul>
        </div>
      </div>
    );
  };

  const Latest = () => {
    return (
      <div className="latest">
        <div className="latest-nav" active={userDb ? "true" : "false"}>
          <span className="latest-icon">
            <FontAwesomeIcon icon={faHistory} />
          </span>
          <span className="latest-title">최근에 방문한 게시판</span>
          <span className="dropdown">
            <FontAwesomeIcon icon={faAngleDown} onClick={onToggleLatestBox} />
          </span>
        </div>
        <div active={latestIsOpened.toString()} className="latest-wrap">
          <ul className="latest-items">
            <li className="latest-item">생명공학과</li>
            <li className="latest-item">베트남어과</li>
            <li className="latest-item">설문게시판</li>
            <li className="latest-item">경영학과</li>
            <li className="latest-item">컴퓨터공학과</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <Login />
      <MyBox />
      <FavBoard />
      <Latest />
    </>
  );
};

export default RightColumn;
