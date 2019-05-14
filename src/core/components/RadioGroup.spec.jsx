import React, { Component } from "react";
import RadioGroup from "./RadioGroup";

describe("RadioGroup", () => {
  test("render_RadioGroup", () => {
    const props = {
      id: "formOne_RadioGroupOne",
      label: "RadioGroup Label",
      options: {
        enumOptions: [
          {
            label: "Purchase",
            value: "1"
          },
          {
            label: "Other",
            value: "2"
          }
        ]
      },
      onChange: val => {}
    };

    const wrapper = shallow(<RadioGroup {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });

  test("click_RadioGroup_should_call_onChange_with_selectedValue", () => {
    let selectedValue;
    const props = {
      id: "formOne_RadioGroupOne",
      label: "RadioGroup Label",
      options: {
        enumOptions: [
          {
            label: "Purchase",
            value: "1"
          },
          {
            label: "Other",
            value: "2"
          }
        ]
      },
      onChange: val => (selectedValue = val)
    };

    const wrapper = mount(<RadioGroup {...props} />);
    const instance = wrapper.instance();

    expect(instance).toMatchSnapshot();

    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { checked: true }
      });

    expect(selectedValue).toEqual("1");

    wrapper.unmount();
  });
});
