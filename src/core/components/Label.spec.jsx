import React, { Component } from "react";
import Label from "./Label";

describe("Label", () => {
  test("render_Label", () => {
    const props = {
      label: "loan question",
      id: "formOne_labaleOne"
    };
    const wrapper = shallow(<Label {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });
});
