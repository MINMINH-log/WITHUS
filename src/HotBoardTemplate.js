/*eslint-disable*/
import React, { useState } from "react";
import "../src/css/HotBoardTemplate.css";

const HotBoardTemplate = () => {
  let [hotBoard, setHotBoard] = useState([
    { name: "board-biotech", text: "생명공학과" },
    { name: "board-vietnamese", text: "베트남어과" },
    { name: "board-question", text: "질문게시판" },
    { name: "board-survey", text: "설문게시판" },
    { name: "board-promote", text: "홍보게시판" },
    { name: "board-philosophy", text: "철학과" },
    { name: "board-management", text: "경영학과" },
    { name: "board-computer", text: "컴퓨터공학과" },
    { name: "board-theme", text: "테마게시판" },
  ]);

  const HotBoardComponent = () => {
    return (
      <ul className="boards">
        {hotBoard.map((c, i) => (
          <li key={c.name} className="board">
            <span className="board-order">{i + 1}</span>
            <span className="board-txt">{c.text}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="board-block">
      <span className="title board-nav">HOT 게시판</span>
      <div className="board-contents">
        <HotBoardComponent />
      </div>
    </div>
  );
};

export default HotBoardTemplate;
