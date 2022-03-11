/*eslint-disable*/
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../src/css/LatestHotListTemplate.css";
import { faHeart, faImage, faEdit } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const LatestHotListTemplate = ({ latestContents, hotContents }) => {
  const majorCategories = [
    { name: "latest", text: "최근 게시글" },
    { name: "hot", text: "인기글" },
  ];

  const [selectMajorCategory, setMajorCategory] = useState("latest");
  const onSelectMajorContents = useCallback(
    (current) => setMajorCategory(current),
    []
  );

  const MajorCategories = () => {
    return (
      <div className="major-nav-block">
        <span className="major-nav-txt">
          {majorCategories.map((c) => (
            <span
              key={c.name}
              active={selectMajorCategory === c.name ? "true" : "false"}
              onClick={() => {
                onSelectMajorContents(c.name);
              }}
              className="major-nav"
            >
              {c.text}
            </span>
          ))}
        </span>
        <button className="btn-to-write">
          <Link to="/write">
            <FontAwesomeIcon icon={faEdit} className="write-i" />
            글쓰기
          </Link>
        </button>
      </div>
    );
  };

  const LatestList = () => {
    let majorContentsSelected = [];
    const showMajorSelected = () => {
      if (selectMajorCategory === "latest") {
        majorContentsSelected = [...latestContents];
      } else if (selectMajorCategory === "hot") {
        majorContentsSelected = [...hotContents];
      }
    };

    return (
      <tbody className="latest-contents">
        {showMajorSelected()}
        {majorContentsSelected.slice(0, 45).map((c) => (
          <tr className="latest-content" key={c.id}>
            <td className="latest-src">{c.src}</td>
            <td className="latest-description">
              {c.prgp}
              <span className="latest-img">
                {c.img && (
                  <FontAwesomeIcon icon={faImage} className="latest-img-i" />
                )}
              </span>
              <span className="latest-commentcount">[{c.comment}]</span>
            </td>

            <td className="latest-writer">{c.writer}</td>
            <td className="latest-writtenTime">{c.time}</td>
            <td className="latest-viewed">{c.watched}</td>
            <td className="like-span">
              <span className="like">
                <FontAwesomeIcon icon={faHeart} className="like-i" />
              </span>
              <span className="like-count">{c.like}</span>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <>
      <MajorCategories />

      <table className="latest-block">
        <thead className="latest-marker-block">
          <tr className="latest-marker">
            <th className="marker-board">게시판</th>
            <th className="marker-title">제목</th>
            <th className="marker-writer">작성자</th>
            <th className="marker-writtenTime">작성일</th>
            <th className="marker-viewed">조회수</th>
            <th className="marker-like">좋아요</th>
          </tr>
        </thead>
        <LatestList />
      </table>
    </>
  );
};

export default LatestHotListTemplate;
