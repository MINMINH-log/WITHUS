import React from "react";
import Template from "Template";
import HotTemplate from "HotTemplate";
import { useLocation } from "react-router-dom";
import LatestHotListTemplate from "LatestHotListTemplate";

const Major = () => {
  const { state } = useLocation();
  return (
    <Template user={state}>
      <HotTemplate />
      <LatestHotListTemplate />
    </Template>
  );
};

export default Major;
