import React, { Component } from "react";
import Label from "./Label";
import Helptip from "./Helptip";

beforeAll(() => {
  $.R = jest.fn(() => {
    return {
      CallOutBoxes: {
        init: jest.fn()
      }
    };
  })();
});

describe("Helptip", () => {
  test("render_Helptip", () => {
    const props = {
      componentProps: [
        {
          type: "paragraph",
          text: "help tip paragraph content"
        },
        {
          type: "accordion",
          options: [
            {
              title: "Accordion One header",
              content: "Accordion One content"
            }
          ]
        }
      ]
    };
    const wrapper = shallow(<Helptip {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });
});
