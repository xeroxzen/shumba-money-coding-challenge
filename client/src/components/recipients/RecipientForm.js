import React from "react";
import Content from "../common/Wrapper";
import CreateRecipient from "../recipients/CreateRecipient";

function Wrapper() {
  return (
    <>
      <Content page="Create Recipient" content={<CreateRecipient />} />
    </>
  );
}

export default Wrapper;
