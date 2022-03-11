/* eslint-disable */
import React, { useState } from "react";
import HotTemplate from "./HotTemplate";
import HotBoardTemplate from "./HotBoardTemplate";
import HotClassifiedTemplate from "./HotClassifiedTemplate";
import createBulkContents from "./bulkContents";

const Home = () => {
  let [homeTimeContent, setHomeTimeContent] = useState(
    createBulkContents({ type: "실시간 홈" })
  );

  let [homeDayContent, setHomeDayContent] = useState(
    createBulkContents({ type: "일간 홈" })
  );

  let [homeWeekContent, setHomeWeekContent] = useState(
    createBulkContents({ type: "주간 홈" })
  );

  let [homeMonthContent, setHomeMonthContent] = useState(
    createBulkContents({ type: "월간 홈" })
  );
  return (
    <>
      <HotTemplate
        timeContent={homeTimeContent}
        setTimeContent={setHomeTimeContent}
        dayContent={homeDayContent}
        setDayContent={setHomeDayContent}
        weekContent={homeWeekContent}
        setWeekContent={setHomeWeekContent}
        monthContent={homeMonthContent}
        setMonthContent={setHomeMonthContent}
      />
      <HotBoardTemplate />
      <HotClassifiedTemplate />
    </>
  );
};

export default Home;
