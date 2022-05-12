/*eslint-disable*/
import React, { useState } from "react";
import "css/HotBoardTemplate.css";

const HotBoardTemplate = () => {
  let [hotBoard, setHotBoard] = useState([
    [
      { name: "board-biotech", text: "생명공학과" },
      { name: "board-vietnamese", text: "베트남어과" },
      { name: "board-question", text: "질문게시판" },
    ],
    [
      { name: "board-survey", text: "설문게시판" },
      { name: "board-promote", text: "홍보게시판" },
      { name: "board-philosophy", text: "철학과" },
    ],
    [
      { name: "board-management", text: "경영학과" },
      { name: "board-computer", text: "컴퓨터공학과" },
      { name: "board-theme", text: "테마게시판" },
    ],
  ]);

  return (
    <div className="board-block">
      <span className="title nav">HOT 게시판</span>
      <table>
        <tbody>
          <tr>
            {hotBoard[0].map((item, i) => (
              <td key={item.name}>
                <span className="order">{i + 1}</span>
                &nbsp;
                <span className="text">{item.text}</span>
              </td>
            ))}
          </tr>
          <tr>
            {hotBoard[1].map((item, i) => (
              <td key={item.name}>
                <span className="order">{i + 4}</span>
                &nbsp;
                <span className="text">{item.text}</span>
              </td>
            ))}
          </tr>
          <tr>
            {hotBoard[2].map((item, i) => (
              <td key={item.name}>
                <span className="order">{i + 7}</span>
                &nbsp;
                <span className="text">{item.text}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HotBoardTemplate;
