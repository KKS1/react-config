import React, { Component } from "react";
import Label from "./Label";
import ButtonGroup from "./ButtonGroup";

describe("ButtonGroup", () => {
  test("render_ButtonGroup", () => {
    const props = {
      id: "formOne_ButtonGroupOne",
      label: "ButtonGroup Label",
      options: {
        enumOptions: [
          {
            label: "Yes",
            value: "1"
          },
          {
            label: "No",
            value: "0"
          }
        ]
      }
    };
    const wrapper = shallow(<ButtonGroup {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("click_ButtonGroup_should_call_onChange_with_value", () => {
    let retVal;
    const props = {
      id: "formOne_ButtonGroupOne",
      label: "ButtonGroup Label",
      options: {
        enumOptions: [
          {
            label: "Yes",
            value: "1"
          },
          {
            label: "No",
            value: "0"
          }
        ]
      },
      onChange: val => (retVal = val)
    };
    const wrapper = mount(<ButtonGroup {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    wrapper
      .find("button")
      .at(0)
      .simulate("click");

    expect(retVal).toBe("1");

    wrapper.unmount();
  });
});
