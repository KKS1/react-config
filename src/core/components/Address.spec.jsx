import React, { Component } from "react";
import Label from "./Label";
import Address from "./Address";

describe("Address", () => {
  test("render_Address", () => {
    const props = {
      label: "Address Label",
      formData: {},
      idSchema: { $id: "formOne_AddressOne" }
    };

    const wrapper = shallow(<Address {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("changeHandler_should_call_propogateOnChange", () => {
    const props = {
      label: "Address Label",
      formData: {},
      idSchema: { $id: "formOne_AddressOne" },
      onChange: () => {}
    };

    const wrapper = shallow(<Address {...props} />);
    const instance = wrapper.instance();

    jest.spyOn(instance, "propogateOnChange");

    instance.changeHandler("city", "SF");

    expect(instance.propogateOnChange).toHaveBeenCalledWith("city", "SF");
  });

  test("propogateOnChange_should_call_propOnChange", () => {
    let addressObj;
    const props = {
      label: "Address Label",
      formData: {},
      idSchema: { $id: "formOne_AddressOne" },
      onChange: _addressObj => (addressObj = _addressObj)
    };

    const wrapper = shallow(<Address {...props} />);
    const instance = wrapper.instance();

    instance.changeHandler("city", "SF");

    expect(addressObj).toBeDefined();
    expect(addressObj).toEqual({ city: "SF" });
  });

  test("placeChangeHandler_should_call_propOnChange_with_addressObject", () => {
    let addressObj;
    const props = {
      label: "Address Label",
      formData: {},
      idSchema: { $id: "formOne_AddressOne" },
      onChange: _addressObj => (addressObj = { ...addressObj, ..._addressObj })
    };

    const wrapper = shallow(<Address {...props} />);
    const instance = wrapper.instance();

    instance.placeChangeHandler({});

    expect(addressObj).not.toBeDefined();

    instance.placeChangeHandler({
      formatted_address: "303 2nd St, San Francisco, CA 94107, USA"
    });

    expect(addressObj).toBeDefined();
    expect(addressObj).toEqual({
      address1: "303 2nd St",
      city: "San Francisco",
      state: "CA",
      zip: "94107"
    });
  });

  test("change_simulations", () => {
    let addressObj;
    const props = {
      formData: {},
      idSchema: { $id: "formOne_AddressOne" },
      onChange: _addressObj => (addressObj = { ...addressObj, ..._addressObj })
    };

    const wrapper = shallow(<Address {...props} />);
    const instance = wrapper.instance();

    wrapper.find("LocationAutoComplete").simulate("change", "303 2nd St");

    wrapper
      .find("TextField")
      .at(0)
      .simulate("change", "Suite 325");

    wrapper
      .find("TextField")
      .at(1)
      .simulate("change", "San Francisco");

    wrapper.find("Dropdown").simulate("change", "CA");

    wrapper
      .find("TextField")
      .at(2)
      .simulate("change", "94107");

    expect(addressObj).toBeDefined();

    expect(addressObj).toEqual({
      address1: "303 2nd St",
      address2: "Suite 325",
      city: "San Francisco",
      state: "CA",
      zip: "94107"
    });
  });
});
