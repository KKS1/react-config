import React, { Component } from "react";
import Paragraph from "./Paragraph";

describe("Paragraph", () => {
  test("render_Paragraph", () => {
    const props = {
      text: "paragraph content"
    };
    const wrapper = shallow(<Paragraph {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });

  test("render_Paragraph_with_schema", () => {
    const props = {
      schema: { text: "paragraph content" }
    };
    const wrapper = shallow(<Paragraph {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });
});
