/*eslint-disable*/
import React, { useState } from "react";
import createBulkContents from "./bulkContents";

export const useHomeData = () => {
  const [homeTimeContent, setHomeTimeContent] = useState(
    createBulkContents({ type: "실시간 홈", startNum: 1 })
  );

  const [homeDayContent, setHomeDayContent] = useState(
    createBulkContents({ type: "일간 홈", startNum: 41 })
  );

  const [homeWeekContent, setHomeWeekContent] = useState(
    createBulkContents({ type: "주간 홈", startNum: 81 })
  );

  const [homeMonthContent, setHomeMonthContent] = useState(
    createBulkContents({ type: "월간 홈", startNum: 121 })
  );

  return [
    [homeTimeContent, setHomeTimeContent],
    [homeDayContent, setHomeDayContent],
    [homeWeekContent, setHomeWeekContent],
    [homeMonthContent, setHomeMonthContent],
  ];
};

export const useClassfiedData = () => {
  const [classifiedFree, setClassifiedFree] = useState(
    createBulkContents({ type: "자유", startNum: 1 })
  );

  const [classifiedTheme, setClassifiedTheme] = useState(
    createBulkContents({ type: "테마", startNum: 1 })
  );

  const [classifiedAsk, setClassifiedAsk] = useState(
    createBulkContents({ type: "고민", startNum: 1 })
  );

  const [classifiedSurvey, setClassifiedSurvey] = useState(
    createBulkContents({ type: "설문", startNum: 1 })
  );

  const [classifiedInfo, setClassifiedInfo] = useState(
    createBulkContents({ type: "정보", startNum: 1 })
  );

  const [classifiedPromote, setClassifiedPromote] = useState(
    createBulkContents({ type: "홍보", startNum: 1 })
  );

  return [
    [classifiedFree, setClassifiedFree],
    [classifiedTheme, setClassifiedTheme],
    [classifiedAsk, setClassifiedAsk],
    [classifiedSurvey, setClassifiedSurvey],
    [classifiedInfo, setClassifiedInfo],
    [classifiedPromote, setClassifiedPromote],
  ];
};

export const useMajorData = () => {
  const [majorLatestContents, setMajorLatestContents] = useState(
    createBulkContents({ type: "최근 학과별" })
  );

  const [majorHotContents, setMajorHotContents] = useState(
    createBulkContents({ type: "인기 학과별" })
  );

  return [
    [majorLatestContents, setMajorLatestContents],
    [majorHotContents, setMajorHotContents],
  ];
};

export const useSurveyData = () => {
  const [newSurveyCampus, setNewSurveyCampus] = useState(
    createBulkContents({ type: "최근 캠퍼스 설문" })
  );
  const [newSurveyHobby, setNewSurveyHobby] = useState(
    createBulkContents({ type: "최근 취미 설문" })
  );
  const [newSurveyStudy, setNewSurveyStudy] = useState(
    createBulkContents({ type: "최근 학업 설문" })
  );
  const [oldSurveyCampus, setOldSurveyCampus] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );
  const [oldSurveyHobby, setOldSurveyHobby] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );
  const [oldSurveyStudy, setOldSurveyStudy] = useState(
    createBulkContents({ type: "과거 캠퍼스 설문" })
  );

  return [
    [newSurveyCampus, setNewSurveyCampus],
    [newSurveyHobby, setNewSurveyHobby],
    [newSurveyStudy, setNewSurveyStudy],
    [oldSurveyCampus, setOldSurveyCampus],
    [oldSurveyHobby, setOldSurveyHobby],
    [oldSurveyStudy, setOldSurveyStudy],
  ];
};

export const useInfoData = () => {
  const [infoCertificate, setInfoCertificate] = useState(
    createBulkContents({ type: "자격증" })
  );

  const [infoPostgraduate, setInfoPostgraduate] = useState(
    createBulkContents({ type: "대학원" })
  );
  const [infoIntern, setInfoIntern] = useState(
    createBulkContents({ type: "인턴" })
  );

  const [infoEmployment, setInfoEmployment] = useState(
    createBulkContents({ type: "취직" })
  );

  return [
    [infoCertificate, setInfoCertificate],
    [infoPostgraduate, setInfoPostgraduate],
    [infoIntern, setInfoIntern],
    [infoEmployment, setInfoEmployment],
  ];
};

export const usePromoteData = () => {
  const [promoteJoinClub, setPromoteJoinClub] = useState(
    createBulkContents({ type: "동아리 홍보" })
  );
  const [promoteJoinStudy, setPromoteJoinStudy] = useState(
    createBulkContents({ type: "스터디 홍보" })
  );
  const [promoteJoinProject, setPromoteJoinProject] = useState(
    createBulkContents({ type: "프로젝트 홍보" })
  );
  const [promoteJoinCompetition, setPromoteCompetition] = useState(
    createBulkContents({ type: "공모전 홍보" })
  );

  return [
    [promoteJoinClub, setPromoteJoinClub],
    [promoteJoinStudy, setPromoteJoinStudy],
    [promoteJoinProject, setPromoteJoinProject],
    [promoteJoinCompetition, setPromoteCompetition],
  ];
};
