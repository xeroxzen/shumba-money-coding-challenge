import React from "react";
import Content from "../common/Wrapper";
import Dashboard from "./Dashboard";

function Wrapper() {
  return (
    <>
      <Content page="Dashboard" content={<Dashboard />} />
    </>
  );
}

export default Wrapper;
