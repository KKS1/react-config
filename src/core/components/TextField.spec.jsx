import React, { Component } from "react";
import Label from "./Label";
import TextField from "./TextField";

describe("TextField", () => {
  test("render_TextField", () => {
    const wrapper = shallow(<TextField />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("attach_props", () => {
    const props = {
      id: "formOne_labelOne",
      value: "some text",
      options: {
        inputProps: {
          maxLength: 8
        }
      }
    };
    const wrapper = shallow(<TextField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_onChange_prop", () => {
    const changeHandler = jest.fn();

    const props = {
      id: "formOne_labelOne",
      value: "some text",
      onChange: changeHandler
    };
    const wrapper = shallow(<TextField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    instance.changeHandler({ target: { value: "changed text" } });

    expect(changeHandler).toHaveBeenCalledWith("changed text");
  });
});
