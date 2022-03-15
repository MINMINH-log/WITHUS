/* eslint-disable*/
import HotTemplate from "./HotTemplate";
import LatestHotListTemplate from "./LatestHotListTemplate";
import React, { useState, useCallback } from "react";
import createBulkContents from "./bulkContents";
const ThemeTemplate = () => {
  let [themeLatestContents, setThemeLatestContents] = useState(
    createBulkContents({ type: "최근 테마" })
  );

  let [themeHotContents, setThemeHotContents] = useState(
    createBulkContents({ type: "인기 테마" })
  );
  let [themeTimeContent, setThemeTimeContent] = useState(
    createBulkContents({ type: "실시간 테마" })
  );

  let [themeDayContent, setThemeDayContent] = useState(
    createBulkContents({ type: "일간 테마" })
  );

  let [themeWeekContent, setThemeWeekContent] = useState(
    createBulkContents({ type: "주간 테마" })
  );

  let [themeMonthContent, setThemeMonthContent] = useState(
    createBulkContents({ type: "월간 테마" })
  );
  return (
    <>
      <HotTemplate
        timeContent={themeTimeContent}
        setTimeContent={setThemeTimeContent}
        dayContent={themeDayContent}
        setDayContent={setThemeDayContent}
        weekContent={themeWeekContent}
        setWeekContent={setThemeWeekContent}
        monthContent={themeMonthContent}
        setMonthContent={setThemeMonthContent}
      />
      <LatestHotListTemplate
        latestContents={themeLatestContents}
        setLatestContents={setThemeLatestContents}
        hotContents={themeHotContents}
        setHotContents={setThemeHotContents}
      />
    </>
  );
};

export default ThemeTemplate;
