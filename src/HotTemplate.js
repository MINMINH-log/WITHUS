/* eslint-disable */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faHeart as fullHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import "../src/css/HotContents.css";
import "../src/css/HotContents.css";
import "../src/css/heartFuc.css";
import { useHomeData } from "./DB/data.js";
import useToggleHeart from "./useToggleHeart";
import { Link } from "react-router-dom";
const HotTemplate = () => {
  const [
    [homeTimeContent, setHomeTimeContent],
    [homeDayContent, setHomeDayContent],
    [homeWeekContent, setHomeWeekContent],
    [homeMonthContent, setHomeMonthContent],
  ] = useHomeData();

  const categories = [
    { name: "time", text: "실시간 인기글" },
    { name: "day", text: "일간 인기글" },
    { name: "week", text: "주간 인기글" },
    { name: "month", text: "월간 인기글" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  // page-btn눌렀을 때 페이지 변경 및 리스트 변경
  const updatePage = () => {
    if (currentPage === 2) {
      setCurrentPage(1);
      setStartIndex(0);
    } else {
      setCurrentPage(2);
      setStartIndex(10);
    }
  };

  // 현재 카테고리 default: 실시간 인기글
  const [selectCategory, setCategory] = useState("time");

  // 다른 카테고리 클릭했을 때 카테고리 변경
  const onSelectCategory = useCallback(
    (current) => setCategory(current),
    [selectCategory]
  );

  // category 컴포넌트
  const Categories = () => {
    return (
      <ul className="categories">
        {categories.map((c) => (
          <li
            key={c.name}
            active={selectCategory === c.name ? "true" : "false"}
            onClick={() => {
              setCurrentPage(1);
              setStartIndex(0);
              onSelectCategory(c.name);
            }}
            className="category"
          >
            {c.text}
          </li>
        ))}
        <div className="pagination">
          <div className="page-num">
            <span className="current-page">{currentPage}</span>
            <span>/</span>
            <span className="entire-page"> 2</span>
          </div>
          <div className="page-btn">
            <span className="left-btn">
              <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className="left-i"
                onClick={updatePage}
              />
            </span>
            <span className="right-btn">
              <FontAwesomeIcon
                icon={faChevronCircleRight}
                className="right-i"
                onClick={updatePage}
              />
            </span>
          </div>
        </div>
      </ul>
    );
  };
  // category에 맞는 list
  let categorySelected = homeTimeContent;
  let setCategorySelected = setHomeTimeContent;
  const selectCategoryFunc = () => {
    selectCategory === "time"
      ? ((categorySelected = homeTimeContent),
        (setCategorySelected = setHomeTimeContent))
      : selectCategory === "day"
      ? ((categorySelected = homeDayContent),
        (setCategorySelected = setHomeDayContent))
      : selectCategory === "week"
      ? ((categorySelected = homeWeekContent),
        (setCategorySelected = setHomeWeekContent))
      : ((categorySelected = homeMonthContent),
        (setCategorySelected = setHomeMonthContent));
  };

  // hotcomponent
  const HotComponent = ({
    content,
    order,
    startIndex,
    categorySelected,
    setCategorySelected,
  }) => {
    const {
      id,
      writer,
      title,
      img,
      prgp,
      src,
      time,
      like,
      commentInfo,
      likeClicked,
    } = content;

    const contentIndex = startIndex + order;
    const { toggleHeart } = useToggleHeart(
      categorySelected,
      setCategorySelected
    );

    return (
      <li className="hot-content" id={id}>
        <div className="hot-img-part">
          <span className="hot-num-block">
            <span className="hot-num">{order + 1 + startIndex}</span>
          </span>
          <img
            className="hot-img"
            src={require("../src/img/withus_empty.jpg")}
          />
        </div>

        <div className="hot-noimg-part">
          <Link to={`/${src}/${title}/${id}`}>
            <p className="hot-description">{prgp}</p>
          </Link>

          <div className="like-comment">
            <span className="like-span">
              <span className="like">
                <span
                  className="like-icon"
                  onClick={() => toggleHeart(contentIndex)}
                >
                  {likeClicked ? (
                    <FontAwesomeIcon icon={fullHeart} />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </span>
              </span>
              <span className="like-count">{like}</span>
            </span>

            <span className="comment">
              <FontAwesomeIcon icon={faCommentAlt} className="comment-i" />
              <span className="comment-count">{commentInfo.comment}</span>
            </span>
          </div>
          <div className="src-time">
            <span className="src">{src}</span>
            <span className="time">{time}</span>
          </div>
        </div>
      </li>
    );
  };

  return (
    <div className="hot-block">
      <Categories />
      <ul className="hot-contents">
        {selectCategoryFunc()}
        {categorySelected.slice(startIndex, startIndex + 10).map((c, i) => (
          <HotComponent
            content={c}
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
            order={i}
            key={i}
            startIndex={startIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotTemplate;
