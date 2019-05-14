import React, { Component } from "react";
import Label from "./Label";
import Footer from "./Footer";

describe("Footer", () => {
  test("render_Footer", () => {
    const wrapper = shallow(<Footer />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_back_and_next_handler_props", () => {
    const backClickHandler = jest.fn();
    const nextClickHandler = jest.fn();

    const props = {
      id: "formOne_labelOne",
      value: 100,
      onBackClick: backClickHandler,
      onNextClick: nextClickHandler
    };
    const wrapper = shallow(<Footer {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    wrapper.find(".js-form-footer-back").simulate("click");

    expect(backClickHandler).toHaveBeenCalled();

    wrapper.find(".js-form-footer-next").simulate("click");

    expect(nextClickHandler).toHaveBeenCalled();
  });
});
