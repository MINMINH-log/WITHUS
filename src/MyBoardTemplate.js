/* eslint-disable */
import React, { useState } from "react";
import "../src/css/MyBoardTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faStar,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFileAlt,
  faCommentAlt,
  faHeart,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";

const MyBoardTemplate = () => {
  const [myBox, setMyBox] = useState([
    { name: "my-post", text: "내 게시글", icon: faFileAlt },
    { name: "my-comment", text: "내 댓글", icon: faCommentAlt },
    { name: "my-like", text: "좋아한 글", icon: faHeart },
    { name: "my-scrap", text: "스크랩", icon: faBookmark },
    { name: "my-msg", text: "쪽지함", icon: faEnvelope },
  ]);

  const MyBox = () => {
    return (
      <div className="my-box">
        <ul className="box-items">
          {myBox.map((c) => (
            <li className="box-item" key={c.name}>
              <FontAwesomeIcon icon={c.icon} className="box-item-i" />
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
        <div className="fav-nav">
          <span className="fav-i">
            <FontAwesomeIcon icon={faStar} className="star-i" />
          </span>
          <span className="fav-title">즐겨찾는 게시판</span>
          <FontAwesomeIcon icon={faAngleDown} className="down-i" />
        </div>
      </div>
    );
  };

  const Latest = () => {
    return (
      <div className="latest">
        <div className="latest-nav">
          <span className="latest-i">
            <FontAwesomeIcon icon={faHistory} className="history-i" />
          </span>
          <span className="latest-title">최근에 방문한 게시판</span>
          <FontAwesomeIcon icon={faAngleDown} className="down-i" />
        </div>
      </div>
    );
  };

  return (
    <>
      <MyBox />
      <FavBoard />
      <Latest />
    </>
  );
};

export default MyBoardTemplate;
