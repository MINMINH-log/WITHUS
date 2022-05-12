/* eslint-disable*/
import React from "react";
import AskLatestTemplate from "AskLatestTemplate";
import "css/AskComponent.css";
import CenterMode from "SurveyNotice.js";
import Template from "Template";
const SurveyTemplate = () => {
  const surveyCategories = [
    { name: "campus", text: "대학생활" },
    { name: "hobbies", text: "취미" },
    { name: "studies", text: "학업" },
  ];

  return (
    <Template>
      <div className="title">여러분의 참여가 필요해요!</div>
      <CenterMode />
      <section>
        <div className="title">새로 올라온 설문이에요!</div>
        <AskLatestTemplate categories={surveyCategories} />
        <div className="title">종료된 설문이에요</div>
        <AskLatestTemplate categories={surveyCategories} />
      </section>
    </Template>
  );
};

export default SurveyTemplate;
