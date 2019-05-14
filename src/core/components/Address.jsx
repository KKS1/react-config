import React, { Component } from "react";
import styled from "styled-components";
import Label from "./Label";
import LocationAutoComplete from "./LocationAutoComplete";
import TextField from "./TextField";
import Dropdown from "./Dropdown";

const STATES = [
  "",
  "AK",
  "AL",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
];

const dropdownOptions = {
  enumOptions: STATES.map(state => ({
    value: state,
    label: state ? state : "Please select one"
  }))
};

const zipTextFieldOptions = {
  inputProps: { className: "w-50" }
};

const addressProps = {
  ADDRESS_1: "address1",
  ADDRESS_2: "address2",
  CITY: "city",
  STATE: "state",
  ZIP: "zip"
};

const AddressContainer = styled.div`
  & > * {
    margin-bottom: 1rem;
  }
`;

export default class Address extends Component {
  static defaultProps = {
    label: "Address",
    placeholder: "",
    name: "addressWidget",
    onChange: () => {}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  propogateOnChange = (prop, value) => {
    this.props.onChange({ ...this.props.formData, [prop]: value });
  };

  changeHandler = (prop, val) => {
    this.propogateOnChange(prop, val);
  };

  placeChangeHandler = ({ formatted_address }) => {
    if (!formatted_address) {
      return;
    }

    const placesArr = formatted_address.split(", ");
    const [country, stateAndZip, city, ...rest] = placesArr.reverse();
    const address1 = rest && rest.join(", ");
    const [state, zip] = stateAndZip.split(" ");

    const updatedDetails = {
      address1,
      city,
      state,
      zip
    };

    Object.keys(updatedDetails).forEach(prop =>
      this.changeHandler(prop, updatedDetails[prop])
    );
  };

  render() {
    const { placeholder, name, value, formData, idSchema } = this.props;
    const { address1, address2, city, state, zip } = formData;
    const { $id: id } = idSchema;

    return (
      <AddressContainer>
        <LocationAutoComplete
          id={`${id}_${addressProps.ADDRESS_1}`}
          label="Address"
          value={address1}
          onChange={val => this.changeHandler(addressProps.ADDRESS_1, val)}
          onPlaceChange={this.placeChangeHandler}
        />

        <TextField
          id={`${id}_${addressProps.ADDRESS_2}`}
          label="Address Line 2"
          value={address2}
          onChange={val => this.changeHandler(addressProps.ADDRESS_2, val)}
        />

        <TextField
          id={`${id}_${addressProps.CITY}`}
          label="City"
          value={city}
          onChange={val => this.changeHandler(addressProps.CITY, val)}
        />

        <Dropdown
          id={`${id}_${addressProps.STATE}`}
          label="State"
          customClasses="w-50"
          options={dropdownOptions}
          value={state}
          onChange={val => this.changeHandler(addressProps.STATE, val)}
        />

        <TextField
          id={`${id}_${addressProps.ZIP}`}
          label="Zip"
          options={zipTextFieldOptions}
          value={zip}
          onChange={val => this.changeHandler(addressProps.ZIP, val)}
        />
      </AddressContainer>
    );
  }
}
