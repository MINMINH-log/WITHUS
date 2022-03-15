/* eslint-disable*/
import React, { useState, useCallback, useRef } from "react";
import "../src/css/AskComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";
import "./bulkContents";
import createBulkContents from "./bulkContents";
import Modal from "react-modal";
import "./css/Modal.css";
import useToggleHeart from "./useToggleHeart";

const AskComponent = () => {
  // 질문 카테고리 left column 1행
  const TimeAsk = () => {
    return (
      <>
        <div className="timeask-block"></div>
      </>
    );
  };

  // 질문 카테고리 left column 2행
  // contents array
  let [askCampusLife, setAskCampusLife] = useState(
    createBulkContents({ type: "캠퍼스라이프" })
  );

  let [askRelationship, setAskRelationship] = useState(
    createBulkContents({ type: "인간관계" })
  );

  let [askStudies, setAskStudies] = useState(
    createBulkContents({ type: "학업" })
  );

  // category
  const askCategories = [
    { name: "campus", text: "대학생활" },
    { name: "relationship", text: "인간관계" },
    { name: "studies", text: "학업" },
  ];

  // category 클릭 시
  const [selectAskCategory, setAskCategory] = useState("campus");
  const onSelectAskContents = useCallback(
    (selectAskCategory) => setAskCategory(selectAskCategory),
    []
  );

  // category 구현
  const AskCategories = () => {
    return (
      <div className="ask-nav-block">
        {askCategories.map((c) => (
          <span
            key={c.name}
            active={selectAskCategory === c.name ? "true" : "false"}
            onClick={() => {
              onSelectAskContents(c.name);
            }}
            className="latestblock-nav"
          >
            {c.text}
          </span>
        ))}
      </div>
    );
  };

  // modal state 관리
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // body classlist true 넣기 => index.css에서 body.true 스크롤 삭제
  if (modalIsOpen) {
    document.body.classList.add(modalIsOpen);
  } else {
    document.body.classList.remove(modalIsOpen);
  }

  // modalisopen toggle
  const toggleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  // 질문 카테고리 left column 2행
  const AskList = () => {
    let [askContentsSelected, setAskContentsSelected] = useState(askCampusLife);
    const showAskSelected = () => {
      if (selectAskCategory === "campus") {
        (askContentsSelected = askCampusLife),
          (setAskContentsSelected = setAskCampusLife);
      } else if (selectAskCategory === "relationship") {
        (askContentsSelected = askRelationship),
          (setAskContentsSelected = setAskRelationship);
      } else if (selectAskCategory === "studies") {
        (askContentsSelected = askStudies),
          (setAskContentsSelected = setAskStudies);
      }
    };

    const { toggleHeart, toggleCommentHeart } = useToggleHeart(
      askContentsSelected,
      setAskContentsSelected
    );
    return (
      <>
        <ul className="latestblock-contents">
          {showAskSelected()}
          {askContentsSelected.map((content, i) => (
            <li className="latestblock-content" key={i}>
              <div className="latestblock-src">{content.src}</div>
              <h1 className="latestblock-title" onClick={toggleModal}>
                {content.title}
              </h1>
              <p className="latestblock-description ask" onClick={toggleModal}>
                {content.prgp}
              </p>

              <div className="best-comment-block">
                <h1 className="best-comment-nav ">BEST</h1>

                <div className="best-comment-contents">
                  <div className="best-comment-writer">
                    <img
                      className="best-commenter-img"
                      src={require("../src/img/withus_empty.jpg")}
                    />
                    <span className="best-commenter">
                      {content.commentInfo.bestCommenter}
                    </span>
                  </div>

                  <div className="best-comment-content">
                    <span className="best-comment">
                      {content.commentInfo.bestComment}
                    </span>
                  </div>

                  <span className="like-span latest">
                    <span className="like">
                      <span
                        className="like-icon"
                        onClick={() => toggleCommentHeart(i)}
                      >
                        {content.commentInfo.likeClicked ? (
                          <FontAwesomeIcon icon={fullHeart} />
                        ) : (
                          <FontAwesomeIcon icon={faHeart} />
                        )}
                      </span>
                    </span>
                    <span className="like-count">
                      {content.commentInfo.like}
                    </span>
                  </span>
                </div>
              </div>
              <div className="showmore">더보기</div>
            </li>
          ))}
        </ul>
      </>
    );
  };

  // #root위에 modal 보이기
  Modal.setAppElement("#root");
  return (
    <>
      <div className="time-ask-nav title">실시간 고민</div>
      <TimeAsk />
      <div className="ask-major-nav title">고민 상담이 필요해요</div>
      <AskCategories />
      <AskList />
      {/* 모달로 할지 기본 게시판 형태로 갈지 미정 */}
      <Modal isOpen={modalIsOpen}>
        <div className="modal">
          <section className="header">
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
            <div className="src">자유</div>
          </section>
          <h1 className="title">이너뷰티브랜드</h1>
          <section className="title-bottom">
            <div className="writer">
              <span className="writer-name">박효민</span>
              <span className="time">2021-07-30 00:00:00</span>
            </div>
            <div className="response">
              <span className="watched">
                <span className="watched-text">조회</span>
                <span className="watched-count">102</span>
              </span>
            </div>
          </section>

          <p className="prgp">hello world</p>
          <div className="func">
            <span className="save">저장하기</span>
            <span className="share">공유하기</span>
            <span className="report">신고하기</span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AskComponent;
