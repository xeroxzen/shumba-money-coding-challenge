import React from "react";
import Content from "../common/Wrapper";
import Auth from "./Auth";

function Wrapper() {
  return (
    <>
      <Content page="Auth" content={<Auth />} />
    </>
  );
}

export default Wrapper;
