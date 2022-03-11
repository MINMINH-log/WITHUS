/*eslint-disable*/
import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import "../css/ReadMore.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import createBulkContents from "../bulkContents";
const ReadMore = () => {
  let [comment, setComment] = useState(createBulkContents({ type: "댓글" }));

  const { src, writer, id } = useParams();
  const [popup, setPopup] = useState(false);
  const onToggle = () => {
    setPopup(!popup);
  };
  return (
    <>
      <section className="sm-top">
        <div className="board">일상 게시판</div>
        <h1 className="title">오늘 날씨 미침</h1>
        <div className="title-footer">
          <div className="writer">
            <span className="writer-name">죽을사학년</span>
            <span className="writer-time">2021-07-30 13:20</span>
          </div>
          <div className="response">
            <span className="watched">
              <span className="watched-name">조회</span>
              <span className="watched-num">30</span>
            </span>
            <span className="liked">
              <span className="liked-name">좋아요</span>

              <span className="liked-num">30</span>
            </span>
            <span className="commented">
              <span className="commented-name">댓글</span>
              <span className="commented-num">2</span>
            </span>
          </div>
        </div>
      </section>
      <section className="sm-body">
        <p className="content">요즘 너무 더워 역시 집밖은 위험해</p>
      </section>
      <section className="sm-body-footer">
        <div className="response">
          <span className="count liked">30</span>

          <span className="btn liked">
            <FontAwesomeIcon className="thumb-icon" icon={faThumbsUp} />
            <span className="text liked">좋아요</span>
          </span>

          <span className="btn disliked">
            <FontAwesomeIcon className="thumb-icon" icon={faThumbsDown} />
            <span className="text disliked">싫어요</span>
          </span>
          <span className="count disliked">0</span>
        </div>
        <div className="func">
          <span className="share">공유하기</span>
          <span className="report">신고하기</span>
        </div>
      </section>
      <section className="sm-comment">
        <form className="input-form">
          <div className="input-writer">
            <span className="input-writer-name">하필이면 한화펜을</span>
            <div className="input-anonymous">
              <input type="checkbox"></input>
              <span className="anonymous-text">익명</span>
            </div>
          </div>

          <textarea
            className="input"
            placeholder="댓글을 입력해주세요."
          ></textarea>
          <button className="input-submit">등록</button>
        </form>
        <div className="nav">
          <span className="whole">전체 댓글</span>
          <span className="best">베스트 댓글</span>
        </div>

        <div className="body">
          {comment.map((c) => (
            <div key={c.id} id={c.id} className="comment">
              <div className="writer">
                <img
                  className="writer-img"
                  src={require("../img/withus_empty.jpg")}
                />
                <span className="writer-name">{c.writer}</span>
              </div>
              <div className="contents-block">
                <span className="morefunc">
                  <BsThreeDotsVertical
                    className="icon-morefunc"
                    onClick={onToggle}
                  />
                  <ul className={`popup-text ${popup}`}>
                    <li className="popup-item">삭제하기</li>
                    <li className="popup-item">신고하기</li>
                    <li className="popup-item">차단하기</li>
                  </ul>
                </span>

                <p className="contents">{c.prgp}</p>
                <div className="time">{c.time}</div>
                <div className="func">
                  <span className="like">좋아요</span>
                  <span className="reply">답글</span>
                  <span className="message">쪽지</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination"></div>
      </section>
    </>
  );
};

export default ReadMore;
