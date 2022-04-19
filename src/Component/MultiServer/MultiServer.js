import React from "react";
import ReqResApiServer from "./reqReserer";
import TypicodeApiServer from "./typicode";
const MultiServer = () => {
  return (
    <>
      <TypicodeApiServer />
      <ReqResApiServer />
    </>
  );
};
export default MultiServer;
