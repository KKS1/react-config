/* global google */
import React, { Component } from "react";
import Label from "./Label";
import LocationAutoComplete from "./LocationAutoComplete";

beforeAll(() => {
  $.R = {
    GooglePlaces: {
      autocomplete_init: false,
      autocompleteFocus: jest.fn(),
      reappendGoogleContainer: jest.fn()
    }
  };
});

describe("LocationAutoComplete", () => {
  test("render_LocationAutoComplete", () => {
    const props = {
      id: "formOne_labelOne"
    };
    const wrapper = shallow(<LocationAutoComplete {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("call_onChange_prop", () => {
    const changeHandler = jest.fn();

    $.R.GooglePlaces.autocomplete_init = true;

    const props = {
      id: "formOne_labelOne",
      value: "303 2nd st",
      onChange: changeHandler
    };
    const wrapper = shallow(<LocationAutoComplete {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();

    instance.changeHandler({ target: { value: "304 3rd St" } });

    expect(changeHandler).toHaveBeenCalledWith("304 3rd St");
  });

  test("call_onPlaceChange_prop", () => {
    const placeChangeHandler = jest.fn();

    const props = {
      id: "formOne_labelOne",
      value: "303 2nd St",
      onPlaceChange: placeChangeHandler
    };
    const wrapper = shallow(<LocationAutoComplete {...props} />);
    const instance = wrapper.instance();

    instance.autocomplete = jest.fn(() => {
      return {
        getPlace: () => ({
          formatted_address: "303 2nd St, San Francisco, CA 94107, USA"
        })
      };
    })();
    expect(instance).toMatchSnapshot();

    instance.handlePlaceChanged();

    expect(placeChangeHandler).toHaveBeenCalledWith({
      formatted_address: "303 2nd St, San Francisco, CA 94107, USA"
    });
  });

  test("focusHandler", () => {
    const props = {
      id: "formOne_labelOne",
      value: "303 2nd St"
    };
    const wrapper = mount(<LocationAutoComplete {...props} />);
    const instance = wrapper.instance();

    google = jest.fn(() => ({
      maps: {
        places: {
          Autocomplete: () => ({
            addListener: jest.fn()
          })
        }
      }
    }))();

    instance.focusHandler();

    expect(instance.autocomplete.addListener).toHaveBeenCalled();
    expect($.R.GooglePlaces.reappendGoogleContainer).toHaveBeenCalled();

    instance.focusHandler();

    wrapper.unmount();
  });
});
