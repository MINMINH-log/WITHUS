/* eslint-disable */
import React, { useState } from "react";
import "../src/css/HotClassifiedTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import HeartFuc from "./heartFuc";
import createBulkContents from "./bulkContents";

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

  const ClassifiedComponent = ({ contents, position, boardType }) => {
    return (
      <>
        <div className="cls-left-nav ${position}">
          <span className="cls-left-board">{boardType}</span>
          <span className="plus">
            <FontAwesomeIcon icon={faPlus} className="plus-i" />
          </span>
        </div>
        <ul className={["cls-contents", position].join(" ")}>
          {contents.map((c, i) => (
            <li className={["cls-content", position].join(" ")} key={c.id}>
              <span className="cls-num-block">
                <span className="cls-num">{i + 1}</span>
              </span>
              <div className="cls-description-block">
                <span className={["cls-description", position].join(" ")}>
                  {c.prgp}
                </span>
                <span className={["cls-img", position].join(" ")}></span>
                <span className={["cls-commentcount", position].join(" ")}>
                  [{c.comment}]
                </span>
              </div>
              <HeartFuc likeCount={c.like} position={position} />
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
              position="left"
              boardType={"자유게시판"}
            />

            <ClassifiedComponent
              contents={classifiedAsk}
              position="left"
              boardType={"고민게시판"}
            />

            <ClassifiedComponent
              contents={classifiedInfo}
              position="left"
              boardType={"정보게시판"}
            />
          </div>

          <div className="cls-content-right-block">
            <ClassifiedComponent
              contents={classifiedTheme}
              position="right"
              boardType={"테마게시판"}
            />

            <ClassifiedComponent
              contents={classifiedSurvey}
              position="right"
              boardType={"설문게시판"}
            />

            <ClassifiedComponent
              contents={classifiedPromote}
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
