/* eslint-disable*/
import React, { useState } from "react";
import "../src/css/SurveyNotice.css";
import Carousel from "react-spring-3d-carousel-2";
import { config } from "react-spring";
import createBulkContents from "./DB/bulkContents";

const CenterMode = () => {
  let [noticeSurvey, setNoticeSurvey] = useState(
    createBulkContents({ type: "설문" })
  );

  let slides = [
    {
      key: `${noticeSurvey[0]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[0].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[0].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[0].prgp}</p>

          <div className="join latest">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[1]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[1].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[1].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[1].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[2]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[2].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[2].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[2].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[3]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[3].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[3].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[3].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[4]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[4].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[4].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[4].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[5]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[5].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[5].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[5].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[6]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[6].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[6].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[6].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[7]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[7].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[7].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[7].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[8]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[8].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[8].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[8].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
    {
      key: `${noticeSurvey[9]["id"]}`,
      content: (
        <li className="survey-notice-list">
          <div className="survey-notice-src">
            <span className="survey-notice-src-txt">{noticeSurvey[9].src}</span>
          </div>
          <h1 className="survey-notice-title">{noticeSurvey[9].title}</h1>
          <p className="survey-notice-description">{noticeSurvey[9].prgp}</p>

          <div className="join">
            <span className="join-txt">참여하기</span>
          </div>
        </li>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setState({ goToSlide: index }) };
  });

  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: false,
    config: config.gentle,
    autoplay: false,
    interval: 3,
  });

  return (
    <div
      className="survey-notice-block"
      style={{ width: "800px", height: "500px", margin: "0 auto" }}
    >
      <Carousel
        slides={slides}
        goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        showNavigation={state.showNavigation}
        animationConfig={state.config}
        autoPlay={state.autoplay}
        interval={state.interval}
      />
    </div>
  );
};

export default CenterMode;
