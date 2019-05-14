import React, { Component } from "react";
import styled from "styled-components";
import MaskedInput from "./MaskedInput";
import Label from "./Label";

const WrapperDiv = styled.div`
  padding: 0px;
`;
const defaultMaskconfig = {
  rightAlign: true,
  digits: 2,
  max: 100
}

export default class PercentField extends Component {
  static defaultProps = {
    label: "Label",
    placeholder: "",
    name: "percentFormField",
    onChange: () => {}
  };

  changeHandler = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { placeholder, name, value, id, options } = this.props;
    const { maskconfig } = options;

    const inputMaskconfig = {
      ...defaultMaskconfig,
      ...maskconfig
    };

    return (
      <WrapperDiv className="c-label-field">
        <Label {...this.props} />
        <div className="d-flex">
          <MaskedInput
            id={id}
            className="c-label-field__input c-label-field__input--icon-suffixed"
            type="text"
            inputMode="numeric"
            placeholder={placeholder}
            name={name}
            maskconfig={inputMaskconfig}
            value={value == null ? 0 : value}
            onChange={this.changeHandler}
          />
          <i className="far fa-percent c-label-field__icon c-label-field__icon--append" />
        </div>
      </WrapperDiv>
    );
  }
}
