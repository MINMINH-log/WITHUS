/* eslint-disable */
import React, { useState, useCallback } from "react";
import "../src/css/Main.css";
import Login from "./Login";
import MyBoardTemplate from "./MyBoardTemplate";
import "../src/css/header.css";
import SearchBox from "./searchBox";
import Home from "./Home";
import MajorTemplate from "./MajorTemplate";
import FreeTemplate from "./FreeTemplate";
import ThemeTemplate from "./ThemeTemplate";
import AskComponent from "./AskComponent";
import SurveyTemplate from "./SurveyTemplate";
import InfoTemplate from "./InfoTemplate";
import PromoteTemplate from "./PromoteTemplate";
import ReadMore from "./readmore/ReadMore";
import { Route, Routes, Link } from "react-router-dom";

const MainTemplate = ({ containerLeft }) => {
  const [mainHidden, setMainHidden] = useState(false);
  const navItem = [
    { name: "Home", text: "홈" },
    { name: "Major", text: "학과별" },
    { name: "Free", text: "자유" },
    { name: "Theme", text: "테마" },
    { name: "Ask", text: "고민" },
    { name: "Survey", text: "설문" },
    { name: "Info", text: "정보" },
    { name: "Promote", text: "홍보" },
  ];

  const dropdownContents = [
    { name: "Total", text: "전체" },
    { name: "Major", text: "학과별" },
    { name: "Free", text: "자유" },
    { name: "Theme", text: "테마" },
    { name: "Ask", text: "질문" },
    { name: "Survey", text: "설문" },
    { name: "Info", text: "정보" },
    { name: "Promote", text: "홍보" },
  ];

  const NavItems = () => {
    return (
      <ul className="nav-items">
        {navItem.map((c) => (
          <li
            key={c.name}
            active={nav === c.name ? "true" : "false"}
            onClick={() => {
              onSelectNav(c.name);
            }}
            className="nav-item"
          >
            <Link to={`${c.name}`} className="nav-link">
              {c.text}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const [nav, setNav] = useState("Home");
  const onSelectNav = useCallback((nav) => setNav(nav), []);

  return (
    <>
      {/* header */}
      <div className="header">
        <div className="top-back">
          <div className="menubar-top">
            <div className="logo-area">
              <Link to="/home">
                <img
                  className="logo"
                  src={require("../src/img/withus_logo.png")}
                />
              </Link>
            </div>
            <span className="major-category" style={{ fontSize: "18px" }}>
              대학생 커뮤니티
            </span>
            <SearchBox
              dropdownContents={dropdownContents}
              type={"main"}
              hidden={mainHidden}
              setHidden={setMainHidden}
            />
          </div>
        </div>

        <div className="menubar-bottom">
          <div className="nav-block">
            <NavItems nav={nav} onSelect={onSelectNav} />
          </div>
        </div>
      </div>
      {/* header */}

      <div className="container">
        <div className="container-left">
          <Routes>
            <Route element={<Home />} path="/Home" />
            <Route element={<MajorTemplate />} path="/Major" />
            <Route element={<FreeTemplate />} path="/Free" />
            <Route element={<ThemeTemplate />} path="/Theme" />
            <Route element={<AskComponent />} path="/Ask" />
            <Route element={<SurveyTemplate />} path="/Survey" />
            <Route element={<InfoTemplate />} path="/Info" />
            <Route element={<PromoteTemplate />} path="/Promote" />
            <Route element={<ReadMore />} path="/readmore" />
          </Routes>
        </div>
        <div className="container-right">
          <Login />
          <MyBoardTemplate />
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
