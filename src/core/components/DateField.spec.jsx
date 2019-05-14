import React, { Component } from "react";
import Label from "./Label";
import DateField from "./DateField";

describe("DateField", () => {
  test("render_DateField", () => {
    const props = {
      idSchema: { $id: "formOne_DateOne" },
      schema: { title: "Date Selector" },
      customClasses: "col-6"
    };
    const wrapper = shallow(<DateField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("render_DateField_with_custom_yearsRange", () => {
    const props = {
      idSchema: { $id: "formOne_DateOne" },
      schema: { title: "Date Selector" },
      customClasses: "col-6",
      uiSchema: {
        "ui:options": {
          yearsRange: [1950, 2019]
        }
      }
    };
    const wrapper = shallow(<DateField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("render_DateField_with_hiddenFields", () => {
    const props = {
      idSchema: { $id: "formOne_DateOne" },
      schema: { title: "Date Selector" },
      customClasses: "col-6",
      uiSchema: {
        "ui:options": {
          yearsRange: [1950, 2019],
          hiddenFields: ["day", "month"]
        }
      }
    };
    const wrapper = shallow(<DateField {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("DateField_should_call_onPropChange_onChange", () => {
    let formData;
    const changeHandler = _formData => {
      formData = _formData;
    };
    const props = {
      idSchema: { $id: "formOne_DateOne" },
      schema: { title: "Date Selector" },
      uiSchema: {
        "ui:options": {
          prefix: "some_prefix_"
        }
      },
      customClasses: "col-6",
      formData: formData,
      onChange: changeHandler
    };
    const wrapper = shallow(<DateField {...props} />);
    const instance = wrapper.instance();

    wrapper
      .find("Dropdown")
      .first()
      .simulate("change", 4);

    expect(instance).toMatchSnapshot();
    expect(formData).toEqual({ some_prefix_month: 4 });
  });
});
