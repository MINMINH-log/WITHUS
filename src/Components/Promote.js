/* eslint-disable*/
import React, { useState, useEffect, useCallback } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "css/PromoteTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "css/header.css";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, {
  NavigationControl,
  FlyToInterpolator,
  Marker,
  Popup,
} from "react-map-gl";
import AskLatestTemplate from "AskLatestTemplate";
import { useInfoData } from "DB/data";
import { useLocation } from "react-router-dom";
import Template from "Template";

const Promote = () => {
  const promoteJoinCategories = [
    { name: "club", text: "동아리" },
    { name: "study", text: "스터디" },
    { name: "project", text: "프로젝트" },
    { name: "competition", text: "공모전" },
  ];
  const [selectPromoteJoinCategory, setPromoteJoinCategory] = useState("club");

  const [areaArray, setAreaArray] = useState([
    "서울",
    "경기",
    "인천",
    "강원",
    "충북",
    "충남",
    "경북",
    "경남",
    "전북",
    "전남",
    "제주",
  ]);

  const [univSeoul, setUnivSeoul] = useState([
    { name: "가톨릭", location: [37.5862082, 127.004587] },
    { name: "건국", location: [37.5425241, 127.073699] },
    { name: "경기", location: [37.3004755, 127.034374] },
  ]);
  const Mapbox = () => {
    const MAP_TOKEN =
      "pk.eyJ1IjoicGFya2h5b20iLCJhIjoiY2t5bjR3anN4MzJ5ajJxbGtjMjRvOTVudiJ9.mZZ7bKnmlTzRZc32GNteOQ";
    const [viewport, setViewport] = useState({
      latitude: 37.5862082,
      longitude: 127.004587,
      width: "400px",
      height: "400px",
      zoom: 12,
    });

    const [selectedUniv, setSelectedUniv] = useState(null);

    return (
      <div
        className="Mapbox"
        style={{ width: "400px", margin: 0, display: "inline-block" }}
      >
        <ReactMapGL
          {...viewport}
          transitionDuration={800}
          transitionInterpolator={new FlyToInterpolator()}
          mapboxApiAccessToken={MAP_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          <div className="navi-control">
            <NavigationControl />
          </div>
          {univSeoul.map((univ, i) => (
            <Marker
              key={i}
              latitude={univ.location[0]}
              longitude={univ.location[1]}
            >
              <button
                className="btn-marker"
                onClick={() => setSelectedUniv(univ)}
              />
            </Marker>
          ))}
          {selectedUniv && (
            <Popup
              offsetLeft={10}
              latitude={selectedUniv.location[0]}
              longitude={selectedUniv.location[1]}
              onClose={() => setSelectedUniv(null)}
            >
              <div>{selectedUniv.name}대학교</div>
            </Popup>
          )}
        </ReactMapGL>
      </div>
    );
  };
  const Area = () => {
    return (
      <ul className="area-items">
        {areaArray.map((c) => (
          <li className="area-item" key={c}>
            {c}
          </li>
        ))}
      </ul>
    );
  };

  const SearchOnMap = () => {
    return (
      <div className="promote-search-block">
        <form className="promote-search-bar" role="search">
          <input
            className="search"
            type="text"
            autoComplete="off"
            role="searchbox"
          />
          <button
            className="search-btn"
            type="submit"
            aria-label="Submit button"
          >
            <FontAwesomeIcon icon={faSearch} className="search-i" />
          </button>
        </form>
        <ul className="univ-list">
          {univSeoul.map((c) => (
            <li className="univ-item" key={c.name}>
              {c.name}대학교
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const onSelectPromoteJoinContents = useCallback(
    (current) => setPromoteJoinCategory(current),
    []
  );
  const PromoteJoinCategories = () => {
    return (
      <div className="promote-join-nav-block">
        {promoteJoinCategories.map((c) => (
          <span
            key={c.name}
            active={selectPromoteJoinCategory === c.name ? "true" : "false"}
            onClick={() => {
              onSelectPromoteJoinContents(c.name);
            }}
            className="promote-join-nav sub-title"
          >
            {c.text}
          </span>
        ))}
      </div>
    );
  };

  const PromoteJoin = ({ Club, Study, Project, Competition, category }) => {
    let promoteJoinSelected = [];
    const showPromoteJoinSelected = () => {
      if (category === "club") {
        promoteJoinSelected = [...Club];
      } else if (category === "study") {
        promoteJoinSelected = [...Study];
      } else if (category === "project") {
        promoteJoinSelected = [...Project];
      } else if (category === "competition") {
        promoteJoinSelected = [...Competition];
      }
    };
    return (
      <ul className="promote-join-contents">
        {showPromoteJoinSelected()}

        {promoteJoinSelected.map((content) => (
          <li className="promote-join-content" key={content.id}>
            <div className="promote-join-src">{content.src}</div>
            <h1 className="promote-join-title">{content.title}</h1>promote-join
            <p className="promote-join-description">{content.prgp}</p>
            <div className="promote-join-btn">참여하기</div>
          </li>
        ))}
      </ul>
    );
  };
  const { state } = useLocation();
  return (
    <Template user={state}>
      <div className="title"> 학교 이모저모</div>
      <section className="promote-univ">
        <Area />
        <div className="mapbox-block">
          <Mapbox />
        </div>

        <SearchOnMap />
      </section>

      <div className="univ-img"></div>
      <section className="promote-join">
        <div className="title">팀원모집</div>
        <AskLatestTemplate categories={promoteJoinCategories} />
      </section>
    </Template>
  );
};

export default Promote;
