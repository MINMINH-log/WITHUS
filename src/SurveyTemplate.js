/* eslint-disable*/
import React, { useState, useCallback } from "react";
import AskLatestTemplate from "./AskLatestTemplate";

import "../src/css/AskComponent.css";
import createBulkContents from "./bulkContents";
import CenterMode from "./SurveyNotice.js";

const SurveyTemplate = () => {
  let [newSurveyCampus, setNewSurveyCampus] = useState(
    createBulkContents({ type: "최근 캠퍼스 설문" })
  );
  let [newSurveyHobby, setNewSurveyHobby] = useState(
    createBulkContents({ type: "최근 취미 설문" })
  );
  let [newSurveyStudy, setNewSurveyStudy] = useState(
    createBulkContents({ type: "최근 학업 설문" })
  );
  let [oldSurveyCampus, setOldSurveyCampus] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );
  let [oldSurveyHobby, setOldSurveyHobby] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );
  let [oldSurveyStudy, setOldSurveyStudy] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );
  const surveyCategories = [
    { name: "campus", text: "대학생활" },
    { name: "hobbies", text: "취미" },
    { name: "studies", text: "학업" },
  ];

  return (
    <>
      <div className="title">여러분의 참여가 필요해요!</div>
      <CenterMode />
      <section>
        <div className="title">새로 올라온 설문이에요!</div>
        <AskLatestTemplate
          firstContents={newSurveyCampus}
          secondContents={newSurveyHobby}
          thirdContents={newSurveyStudy}
          categories={surveyCategories}
        />
        <div className="title">종료된 설문이에요</div>
        <AskLatestTemplate
          firstContents={oldSurveyCampus}
          secondContents={oldSurveyHobby}
          thirdContents={oldSurveyStudy}
          categories={surveyCategories}
        />
      </section>
    </>
  );
};

export default SurveyTemplate;
