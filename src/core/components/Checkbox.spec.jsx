import React, { Component } from "react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("render_Checkbox", () => {
    const props = {
      id: "formOne_CheckboxOne",
      label: "Checkbox Label",
      value: true,
      onChange: val => {}
    };

    const wrapper = shallow(<Checkbox {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });

  test("change_Checkbox_should_propogate_boolean", () => {
    let isChecked = false;
    const props = {
      id: "formOne_CheckboxOne",
      label: "Checkbox Label",
      onChange: val => (isChecked = val)
    };

    const wrapper = shallow(<Checkbox {...props} />);
    const instance = wrapper.getElement();

    wrapper.find("input").simulate("change", { target: { checked: true } });

    expect(isChecked).toBe(true);
  });
});
