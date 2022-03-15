/* eslint-disable */
import React, { useState } from "react";
import "../src/css/HotClassifiedTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import createBulkContents from "./bulkContents";
import useToggleHeart from "./useToggleHeart";

const HotClassifiedTemplate = () => {
  let [classifiedFree, setClassifiedFree] = useState(
    createBulkContents({ type: "자유" })
  );
  let [classifiedTheme, setClassifiedTheme] = useState(
    createBulkContents({ type: "테마" })
  );
  let [classifiedAsk, setClassifiedAsk] = useState(
    createBulkContents({ type: "질문" })
  );
  let [classifiedSurvey, setClassifiedSurvey] = useState(
    createBulkContents({ type: "설문" })
  );
  let [classifiedInfo, setClassifiedInfo] = useState(
    createBulkContents({ type: "정보" })
  );
  let [classifiedPromote, setClassifiedPromote] = useState(
    createBulkContents({ type: "홍보" })
  );

  const ClassifiedComponent = ({
    contents,
    setContents,
    position,
    boardType,
  }) => {
    const { toggleHeart } = useToggleHeart(contents, setContents);
    return (
      <>
        <div className="cls-left-nav">
          <span className="cls-left-board">{boardType}</span>
          <span className="plus">
            <FontAwesomeIcon icon={faPlus} className="plus-i" />
          </span>
        </div>
        <ul className={["cls-contents", position].join(" ")}>
          {contents.map((c, i) => (
            <li className={["cls-content", position].join(" ")} key={i}>
              <span className="cls-num-block">
                <span className="cls-num">{i + 1}</span>
              </span>
              <div className="cls-description-block">
                <span className={["cls-description", position].join(" ")}>
                  {c.prgp}
                </span>
                <span className={["cls-img", position].join(" ")}></span>
                <span className={["cls-commentcount", position].join(" ")}>
                  [{c.commentInfo.comment}]
                </span>
              </div>
              <span className="like-span">
                <span className="like-icon" onClick={() => toggleHeart(i)}>
                  {c.likeClicked ? (
                    <FontAwesomeIcon icon={fullHeart} />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </span>
                <span className="like-count">{c.like}</span>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="cls-block">
        <div className="title cls-nav">게시판 별 실시간 인기글</div>
        <div className="cls-contents-block">
          <div className="cls-content-left-block">
            <ClassifiedComponent
              contents={classifiedFree}
              setContents={setClassifiedFree}
              position="left"
              boardType={"자유게시판"}
            />

            <ClassifiedComponent
              contents={classifiedAsk}
              setContents={setClassifiedAsk}
              position="left"
              boardType={"고민게시판"}
            />

            <ClassifiedComponent
              contents={classifiedInfo}
              setContents={setClassifiedInfo}
              position="left"
              boardType={"정보게시판"}
            />
          </div>

          <div className="cls-content-right-block">
            <ClassifiedComponent
              contents={classifiedTheme}
              setContents={setClassifiedTheme}
              position="right"
              boardType={"테마게시판"}
            />

            <ClassifiedComponent
              contents={classifiedSurvey}
              setContents={setClassifiedSurvey}
              position="right"
              boardType={"설문게시판"}
            />

            <ClassifiedComponent
              contents={classifiedPromote}
              setContents={setClassifiedPromote}
              position="right"
              boardType={"홍보게시판"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotClassifiedTemplate;
