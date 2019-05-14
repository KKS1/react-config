import React, { Component } from "react";
import Label from "./Label";
import NumericField from "./NumericField";

describe("NumericField", () => {
  test("render_NumericField", () => {
    const wrapper = shallow(<NumericField />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("attach_props", () => {
    const props = {
      id: "formOne_labelOne",
      value: 100,
      options: {
        maskconfig: {
          min: 0,
          max: 100000,
          digits: 2
        }
      }
    };
    const wrapper = shallow(<NumericField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_onChange_prop", () => {
    const changeHandler = jest.fn();

    const props = {
      id: "formOne_labelOne",
      value: 100,
      onChange: changeHandler
    };
    const wrapper = shallow(<NumericField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    instance.changeHandler({ target: { value: 200 } });

    expect(changeHandler).toHaveBeenCalledWith(200);
  });
});
