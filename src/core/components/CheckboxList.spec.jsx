import React, { Component } from "react";
import CheckboxList from "./CheckboxList";

describe("CheckboxList", () => {
  test("render_CheckboxList", () => {
    const props = {
      id: "formOne_CheckboxListOne",
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
      onChange: arr => {}
    };

    const wrapper = shallow(<CheckboxList {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });

  test("render_CheckboxList_with_schema", () => {
    const props = {
      id: "formOne_CheckboxListOne",
      schema: {
        title: "CheckboxList Label"
      },
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
      onChange: arr => {}
    };

    const wrapper = shallow(<CheckboxList {...props} />);
    const instance = wrapper.getElement();
    expect(instance).toMatchSnapshot();
  });

  test("click_CheckboxList_should_call_onChange_with_selectedValues", () => {
    let selectedValues = [];
    const props = {
      id: "formOne_CheckboxListOne",
      label: "CheckboxList Label",
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
      value: selectedValues,
      onChange: arr => (selectedValues = arr)
    };

    const wrapper = mount(<CheckboxList {...props} />);
    const instance = wrapper.instance();

    expect(instance).toMatchSnapshot();

    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { checked: true }
      });

    expect(selectedValues).toEqual(["1"]);

    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { checked: false }
      });

    expect(selectedValues).toEqual([]);

    wrapper.unmount();
  });
});
