import React, { Component } from "react";

const Paragraph = props => {
  const { text } = props.schema ? props.schema : props;
  return <p> {text} </p>;
};

export default Paragraph;
