import React from "react";
import Header from "./Header";

function Wrapper({ content, page }) {
  return (
    <>
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Header />

      <div className="container-fluid py-4">{content}</div>
    </>
  );
}

export default Wrapper;
