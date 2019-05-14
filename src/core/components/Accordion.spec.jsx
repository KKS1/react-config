import React, { Component } from "react";
import Label from "./Label";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("render_Accordion", () => {
    const props = {
      id: "formOne_AccordionOne",
      label: "Accordion Label",
      options: [
        {
          title: "Accordion One header",
          content: "Accordion One content"
        }
      ]
    };
    const wrapper = shallow(<Accordion {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("mount_Accordion", () => {
    const props = {
      id: "formOne_AccordionOne",
      label: "Accordion Label",
      options: [
        {
          title: "Accordion One header",
          content: "Accordion One content"
        }
      ]
    };
    const wrapper = mount(<Accordion {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    wrapper.unmount();
  });
});
