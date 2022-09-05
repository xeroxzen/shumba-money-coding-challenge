import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Wrapper({ content, page }) {
  return (
    <>
      <body className="g-sidenav-show  bg-gray-200">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <SideBar />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
          <NavBar page={page} />
          <div className="container-fluid py-4">{content}</div>
          {/* <Footer /> */}
        </main>
      </body>
    </>
  );
}

export default Wrapper;
