/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";

const toggleHeart = (like, setCategorySelected) => {
  useEffect(() => {
    setCategorySelected(!like);
  });
  console.log(like);
};

export default toggleHeart;
