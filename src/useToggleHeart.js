/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";

const useToggleHeart = (content, setContent) => {
  const toggleHeart = (i) => {
    if (content[i].likeClicked) {
      setContent([
        ...content,
        ((content[i].likeClicked = false),
        (content[i].like = content[i].like - 1)),
      ]);
    } else {
      setContent([
        ...content,
        ((content[i].likeClicked = true),
        (content[i].like = content[i].like + 1)),
      ]);
    }

    console.log(content);
  };

  const toggleCommentHeart = (i) => {
    if (content[i].commentInfo.likeClicked) {
      setContent([
        ...content,
        ((content[i].commentInfo.likeClicked = false),
        (content[i].commentInfo.like = content[i].commentInfo.like - 1)),
      ]);
    } else {
      setContent([
        ...content,
        ((content[i].commentInfo.likeClicked = true),
        (content[i].commentInfo.like = content[i].commentInfo.like + 1)),
      ]);
    }
  };

  return { toggleHeart, toggleCommentHeart };
};

export default useToggleHeart;
