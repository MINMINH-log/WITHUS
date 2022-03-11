/* eslint-disable */
import React, { useState, useRef } from "react";

import "../src/css/header.css";
import "../src/css/InfoTemplate.css";
import "./MainTemplate";
import SearchBox from "./searchBox";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const InfoTemplate = () => {
  let [infoCertificate, setInfoCertificate] = useState([
    {
      id: 1,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글1",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 2,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글2",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 3,
      writer: "박효민",
      title: "hello",
      prgp: "남자친구가 자기 뭐 하는지 나한테 말을 안해주고 답장 텀도 너무 긺 그런데 이게 한 두번이 아니라 스트레스 받네 좋은 방법 없을까?",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 4,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글4",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 5,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글5",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 6,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글6",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
  ]);
  let [infoPostgraduate, setInfoPostgraduate] = useState([
    {
      id: 1,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글1",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 2,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글2",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 3,
      writer: "박효민",
      title: "hello",
      prgp: "남자친구가 자기 뭐 하는지 나한테 말을 안해주고 답장 텀도 너무 긺 그런데 이게 한 두번이 아니라 스트레스 받네 좋은 방법 없을까?",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 4,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글4",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 5,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글5",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 6,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글6",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
  ]);
  let [infoIntern, setInfoIntern] = useState([
    {
      id: 1,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글1",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 2,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글2",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 3,
      writer: "박효민",
      title: "hello",
      prgp: "남자친구가 자기 뭐 하는지 나한테 말을 안해주고 답장 텀도 너무 긺 그런데 이게 한 두번이 아니라 스트레스 받네 좋은 방법 없을까?",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 4,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글4",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 5,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글5",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 6,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글6",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
  ]);
  let [infoEmployment, setInfoEmployment] = useState([
    {
      id: 1,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글1",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 2,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글2",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 3,
      writer: "박효민",
      title: "hello",
      prgp: "남자친구가 자기 뭐 하는지 나한테 말을 안해주고 답장 텀도 너무 긺 그런데 이게 한 두번이 아니라 스트레스 받네 좋은 방법 없을까?",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 4,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글4",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 5,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글5",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
    {
      id: 6,
      writer: "박효민",
      title: "hello",
      prgp: "학과별인기글6",
      src: "자유",
      like: 100,
      comment: 98,
      img: "yes",
      watched: 102,
      time: "12:01",
      bestComment: "그냥 너도 얘기하지말고 신경쓰지마",
      commentLike: 140,
    },
  ]);
  const InfoList = ({ contents }) => {
    return (
      <ul className="latestblock-contents">
        {contents.map((content) => (
          <li className="latestblock-content" key={content.id}>
            <div className="survey-src">{content.src}</div>
            <h1 className="survey-title">{content.title}</h1>
            <p className="survey-description">{content.prgp}</p>

            <div className="join info">참여하기</div>
          </li>
        ))}
      </ul>
    );
  };

  const [infoHidden, setInfoHidden] = useState(false);
  const infoDropdown = [
    { name: "Total", text: "전체" },
    { name: "certificate", text: "자격증" },
    { name: "postgraduate", text: "대학원" },
    { name: "intern", text: "인턴" },
    { name: "employment", text: "취업후기" },
  ];

  var Scroll = require("react-scroll");
  var scrollTop = Scroll.animateScroll;

  return (
    <>
      <section className="info-top">
        <div className="info-top-nav">게시판 내 검색</div>
        <SearchBox
          dropdownContents={infoDropdown}
          type={"info"}
          hidden={infoHidden}
          setHidden={setInfoHidden}
          category={"info"}
        />
        <div className="search-ex">
          <Link to="scrollCertificate" spy={true} smooth={true}>
            <span className="search-ex-item">#자격증</span>
          </Link>
          <Link to="scrollPostgraduate" spy={true} smooth={true}>
            <span className="search-ex-item">#대학원</span>
          </Link>
          <Link to="scrollIntern" spy={true} smooth={true}>
            <span className="search-ex-item">#인턴</span>
          </Link>
          <Link to="scrollEmployment" spy={true} smooth={true}>
            <span className="search-ex-item">#취업 후기</span>
          </Link>
        </div>
      </section>
      <section className="info-bottom">
        <div className="certificate">
          <div className="title" id="scrollCertificate">
            자격증
          </div>
          <InfoList contents={infoCertificate} />
        </div>
        <div className="postgraduate">
          <div className="title" id="scrollPostgraduate">
            대학원
          </div>

          <InfoList contents={infoPostgraduate} />
        </div>
        <div className="intern">
          <div className="title" id="scrollIntern">
            인턴
          </div>
          <InfoList contents={infoIntern} />
        </div>
        <div className="employment">
          <div className="title" id="scrollEmployment">
            취업후기
          </div>
          <InfoList contents={infoEmployment} />
        </div>
      </section>

      <FontAwesomeIcon
        icon={faArrowAltCircleUp}
        className="scrollTop"
        onClick={() => {
          scrollTop.scrollToTop();
        }}
      />
    </>
  );
};

export default InfoTemplate;
