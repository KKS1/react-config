import React, { Component } from "react";
import Label from "./Label";
import Header from "./Header";

describe("Header", () => {
  test("render_Header", () => {
    const props = {
      schema: {
        title: "loan question",
        helptip: [
          {
            type: "paragraph",
            text: "help tip paragraph content"
          }
        ]
      }
    };
    const wrapper = shallow(<Header {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });
});
