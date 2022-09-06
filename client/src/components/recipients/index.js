import React from "react";
import Content from "../common/Wrapper";
import RecipientTable from "./RecipientTable";

function Wrapper() {
  return (
    <>
      <Content page="Recipient" content={<RecipientTable />} />
    </>
  );
}

export default Wrapper;
