/* eslint-disable */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../src/css/HotContents.css";
import "../src/css/HotContents.css";
import "../src/css/heartFuc.css";
import HotComponent from "./HotComponent";

const HotTemplate = ({
  timeContent,
  setTimeContent,
  dayContent,
  setDayContent,
  weekContent,
  setWeekContent,
  monthContent,
  setMonthContent,
}) => {
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
  let [categorySelected, setCategorySelected] = useState();
  const selectCategoryFunc = () => {
    selectCategory === "time"
      ? ((categorySelected = timeContent),
        (setCategorySelected = setTimeContent))
      : selectCategory === "day"
      ? ((categorySelected = dayContent), (setCategorySelected = setDayContent))
      : selectCategory === "week"
      ? ((categorySelected = weekContent),
        (setCategorySelected = setWeekContent))
      : ((categorySelected = monthContent),
        (setCategorySelected = setMonthContent));
  };

  return (
    <div className="hot-block">
      <Categories />
      <ul className="hot-contents">
        {selectCategoryFunc()}
        {categorySelected.slice(startIndex, startIndex + 10).map((c, i) => (
          <HotComponent
            content={c}
            order={i}
            key={i}
            startIndex={startIndex}
            setCategorySelected={setCategorySelected}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotTemplate;
