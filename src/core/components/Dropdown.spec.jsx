import React, { Component } from "react";
import Label from "./Label";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  test("render_Dropdown", () => {
    const props = {
      id: "formOne_dropdownOne",
      customClasses: "col-6",
      value: "value1",
      options: {
        enumOptions: [
          {
            label: "option1",
            value: "value1"
          },
          {
            label: "option2",
            value: "value2"
          }
        ]
      }
    };
    const wrapper = shallow(<Dropdown {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_onChange_prop", () => {
    const changeHandler = jest.fn();
    const props = {
      id: "formOne_dropdownOne",
      customClasses: "col-6",
      options: {
        enumOptions: [
          {
            label: "option1",
            value: "value1"
          },
          {
            label: "option2",
            value: "value2"
          }
        ]
      },
      onChange: changeHandler
    };
    const wrapper = mount(<Dropdown {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    wrapper.find("select").simulate("change", { target: { value: "value1" } });

    expect(changeHandler).toHaveBeenCalledWith("value1");

    wrapper.unmount();
  });
});
