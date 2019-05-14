import React, { Component } from "react";

const Label = ({ schema, label, id }) => {
  return !schema && label ? <label htmlFor={id}>{label}</label> : "";
};

export default Label;
