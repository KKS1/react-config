import React, { Component } from "react";
import Label from "./Label";
import PercentField from "./PercentField";

describe("PercentField", () => {
  test("render_PercentField", () => {
    const props = {
      id: "formOne_labelOne",
      options: {
        maskconfig: {
          min: 0,
          max: 100,
          digits: 2
        }
      }
    };
    const wrapper = shallow(<PercentField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_onChange_prop", () => {
    const changeHandler = jest.fn();

    const props = {
      id: "formOne_labelOne",
      value: 100,
      options: {
        maskconfig: {
          min: 0,
          max: 100,
          digits: 2
        }
      },
      onChange: changeHandler
    };
    const wrapper = shallow(<PercentField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    instance.changeHandler({ target: { value: 80 } });

    expect(changeHandler).toHaveBeenCalledWith(80);
  });
});
