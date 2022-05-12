import React, { useState, useCallback } from "react";
import "../src/css/AskComponent.css";
import { useInfoData } from "DB/data";

const AskLatestTemplate = ({ categories }) => {
  const [
    [promoteJoinClub, setPromoteJoinClub],
    [promoteJoinStudy, setPromoteJoinStudy],
    [promoteJoinProject, setPromoteJoinProject],
    [promoteJoinCompetition, setPromoteCompetition],
  ] = useInfoData();
  const [selectLatestBlockCategory, setLatestBlockCategory] = useState(
    categories[0]["name"]
  );
  const onSelectLatestBlockContents = useCallback(
    (current) => setLatestBlockCategory(current),
    []
  );
  const LatestCategories = () => {
    return (
      <div className="latestblock-nav-block">
        {categories.map((c) => (
          <span
            key={c.name}
            active={selectLatestBlockCategory === c.name ? "true" : "false"}
            onClick={() => {
              onSelectLatestBlockContents(c.name);
            }}
            className="latestblock-nav sub-title"
          >
            {c.text}
          </span>
        ))}
      </div>
    );
  };

  const LatestComponent = () => {
    let latestblockContentsSelected = [];
    const showLatestBlockSelected = () => {
      if (selectLatestBlockCategory === categories[0]["name"]) {
        latestblockContentsSelected = [...promoteJoinClub];
      } else if (selectLatestBlockCategory === categories[1]["name"]) {
        latestblockContentsSelected = [...promoteJoinStudy];
      } else if (selectLatestBlockCategory === categories[2]["name"]) {
        latestblockContentsSelected = [...promoteJoinProject];
      } else if (selectLatestBlockCategory === categories[3]["name"]) {
        latestblockContentsSelected = [...promoteJoinCompetition];
      }
    };
    return (
      <ul className="latestblock-contents">
        {showLatestBlockSelected()}

        {latestblockContentsSelected.map((content) => (
          <li className="latestblock-content" key={content.id}>
            <div className="latestblock-src">{content.src}</div>
            <h1 className="latestblock-title">{content.title}</h1>
            <p className="latestblock-description">{content.prgp}</p>

            <div className="join latestblock">참여하기</div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <LatestCategories />
      <LatestComponent />
    </>
  );
};

export default AskLatestTemplate;
