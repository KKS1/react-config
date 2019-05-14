import React, { Component } from "react";
import Zillow from "./Zillow";

describe("Zillow", () => {
  test("render_Zillow", () => {
    const wrapper = shallow(<Zillow />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });

  test("attach_props", () => {
    const props = {
      zestimate: '103948954',
      zillowId: '103293',
      homeDetailsUrl: 'https://www.zillow.com',
      address: '1568 Alabama St.'
    };
    const wrapper = shallow(<Zillow {...props} />);
    const instance = wrapper.instance();
    expect(instance).toMatchSnapshot();
  });
});
