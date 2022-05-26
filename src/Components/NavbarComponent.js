/*eslint-disable*/
import React, { useState } from "react";
import withus_logo from "img/withus_logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faAngleDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [navItems, setNavItems] = useState([
    {
      text: "홈",
      name: "",
    },
    {
      text: "학과별",
      name: "major",
    },
    {
      text: "자유",
      name: "free",
    },
    {
      text: "테마",
      name: "theme",
    },
    {
      text: "고민",
      name: "ask",
    },
    {
      text: "설문",
      name: "survey",
    },
    {
      text: "정보",
      name: "info",
    },
    {
      text: "홍보",
      name: "promote",
    },
  ]);
  const [categorySelected, setCategorySelected] = useState("");

  const onToggleNav = (e) => {
    const navWrap = document.querySelector(".nav-wrap");
    navWrap.classList.toggle("active");
    console.log(navWrap);
  };

  const onClick = (event) => {
    const {
      target: { className },
    } = event;
    setCategorySelected(className.slice(8).trim());
  };

  return (
    <div className="header">
      <div className="header-top">
        <img className="logo" src={withus_logo} />
        <div className="searchbox">
          <select className="searchbox-dropdown">
            <option>전체</option>
            <option>학과별</option>
            <option>자유</option>
            <option>테마</option>
            <option>고민</option>
            <option>설문</option>
            <option>정보</option>
            <option>홍보</option>
          </select>
          <input className="searchbox-input"></input>
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <div className="show-more">
          <span className="show-userinfo">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span className="show-nav" onClick={onToggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>

      <ul className="nav-wrap">
        {navItems.map((c) => (
          <Link to={c.name} key={c.name}>
            <li
              className={`nav-item ${c.name}`}
              onClick={onClick}
              aria-selected={categorySelected === c.name ? "true" : "false"}
            >
              {c.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default NavbarComponent;
