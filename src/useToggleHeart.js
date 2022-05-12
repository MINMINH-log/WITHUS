/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";

const useToggleHeart = (content, setContent) => {
  const toggleHeart = (index) => {
    if (content[index].likeClicked) {
      setContent((prev) =>
        prev.map((c, i) =>
          i === index ? { ...c, likeClicked: false, like: c.like - 1 } : c
        )
      );
    } else {
      setContent((prev) =>
        prev.map((c, i) =>
          i === index ? { ...c, likeClicked: true, like: c.like + 1 } : c
        )
      );
    }
  };

  const toggleCommentHeart = (index) => {
    if (content[index].commentInfo.likeClicked) {
      setContent((prev) =>
        prev.map((c, i) =>
          i === index
            ? {
                ...c,
                commentInfo: {
                  ...c.commentInfo,
                  likeClicked: false,
                  like: like - 1,
                },
              }
            : c
        )
      );
    } else {
      setContent((prev) =>
        prev.map((c, i) =>
          i === index
            ? {
                ...c,
                commentInfo: {
                  ...c.commentInfo,
                  likeClicked: true,
                  like: like + 1,
                },
              }
            : c
        )
      );
    }
  };

  return { toggleHeart, toggleCommentHeart };
};

export default useToggleHeart;
