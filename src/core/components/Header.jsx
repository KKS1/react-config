import React, { Component } from "react";
import Helptip from "./Helptip";

const Header = props => {
  const { title, helptip } = props.schema;
  return (
    <div className="component r-header">
      <h1 className="question c-question__header js-substep-form-header" tabIndex="-1">
        <span className="mr-2">{title}</span>
        {helptip && <Helptip componentProps={helptip} />}
      </h1>
    </div>
  );
};

export default Header;
