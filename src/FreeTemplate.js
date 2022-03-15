/* eslint-disable*/

import LatestHotListTemplate from "./LatestHotListTemplate";
import React, { useState, useCallback } from "react";
import HotTemplate from "./HotTemplate";
import createBulkContents from "./bulkContents";

const FreeTemplate = () => {
  let [freeLatestContents, setFreeLatestContents] = useState(
    createBulkContents({ type: "최근 자유" })
  );

  let [freeHotContents, setFreeHotContents] = useState(
    createBulkContents({ type: "인기 자유" })
  );

  let [freeTimeContent, setFreeTimeContent] = useState(
    createBulkContents({ type: "실시간 자유" })
  );

  let [freeDayContent, setFreeDayContent] = useState(
    createBulkContents({ type: "실시간 자유" })
  );

  let [freeWeekContent, setFreeWeekContent] = useState(
    createBulkContents({ type: "실시간 자유" })
  );

  let [freeMonthContent, setFreeMonthContent] = useState(
    createBulkContents({ type: "실시간 자유" })
  );
  return (
    <>
      <HotTemplate
        timeContent={freeTimeContent}
        setTimeContent={setFreeTimeContent}
        dayContent={freeDayContent}
        setDayContent={setFreeDayContent}
        weekContent={freeWeekContent}
        setWeekContent={setFreeWeekContent}
        monthContent={freeMonthContent}
        setMonthContent={setFreeMonthContent}
      />
      <LatestHotListTemplate
        latestContents={freeLatestContents}
        setLatestContents={setFreeLatestContents}
        hotContents={freeHotContents}
        setHotContents={setFreeHotContents}
      />
    </>
  );
};

export default FreeTemplate;
