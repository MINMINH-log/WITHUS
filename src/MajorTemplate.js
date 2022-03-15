/* eslint-disable*/

import HotTemplate from "./HotTemplate";
import LatestHotListTemplate from "./LatestHotListTemplate";
import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import createBulkContents from "./bulkContents";

const MajorTemplate = () => {
  let [majorTimeContent, setMajorTimeContent] = useState(
    createBulkContents({ type: "실시간 학과별" })
  );

  let [majorDayContent, setMajorDayContent] = useState(
    createBulkContents({ type: "일별 학과별" })
  );

  let [majorWeekContent, setMajorWeekContent] = useState(
    createBulkContents({ type: "실시간 주별" })
  );

  let [majorMonthContent, setMajorMonthContent] = useState(
    createBulkContents({ type: "실시간 월별" })
  );

  let [majorLatestContents, setMajorLatestContents] = useState(
    createBulkContents({ type: "최근 학과별" })
  );

  let [majorHotContents, setMajorHotContents] = useState(
    createBulkContents({ type: "인기 학과별" })
  );
  return (
    <>
      <HotTemplate
        timeContent={majorTimeContent}
        setTimeContent={setMajorTimeContent}
        dayContent={majorDayContent}
        setDayContent={setMajorDayContent}
        weekContent={majorWeekContent}
        setWeekContent={setMajorWeekContent}
        monthContent={majorMonthContent}
        setMonthContent={setMajorMonthContent}
      />
      <LatestHotListTemplate
        latestContents={majorLatestContents}
        setLatestContents={setMajorLatestContents}
        hotContents={majorHotContents}
        setHotContents={setMajorHotContents}
      />
    </>
  );
};

export default MajorTemplate;
