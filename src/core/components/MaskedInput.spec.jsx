import React, { Component } from "react";
import Inputmask from "inputmask";
import MaskedInput from "./MaskedInput";

describe("MaskedInput", () => {
  test("render_MaskedInput", () => {
    const props = {
      maskconfig: {}
    };
    const wrapper = mount(<MaskedInput {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    wrapper.unmount();
  });
});
