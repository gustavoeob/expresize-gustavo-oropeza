import React from "react";
import Faq from "./Faq";
import "./Help.css";
import HelpForm from "./HelpForm";

const Help = () => {
  return (
    <>
      <h2 className="help-title">Help Center</h2>
      <div className="help-and-faq">
        <HelpForm />
        <Faq />
      </div>
    </>
  );
};

export default Help;
