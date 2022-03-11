/*eslint-disable*/
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import "../src/css/HotContents.css";
import "../src/css/heartFuc.css";

const HeartFuc = ({ likeCount, position, likeClicked, id }) => {
  return (
    <span className="like-span">
      <span className={`like ${position}`}>
        <FontAwesomeIcon icon={faHeart} className="like-i" />
      </span>
      <span className="like-count">{likeCount}</span>
    </span>
  );
};

export default HeartFuc;
