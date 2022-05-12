/* eslint-disable */
import React, { useState, useRef } from "react";

import "css/header.css";
import "css/InfoTemplate.css";
import SearchBox from "searchBox";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { useInfoData } from "DB/data";
import Template from "Template";

const Info = () => {
  const [
    [infoCertificate, setInfoCertificate],
    [infoPostgraduate, setInfoPostgraduate],
    [infoIntern, setInfoIntern],
    [infoEmployment, setInfoEmployment],
  ] = useInfoData();
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
    <Template>
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
    </Template>
  );
};

export default Info;
