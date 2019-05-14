import React, { Component } from "react";
import MaskedInput from "./MaskedInput";
import Label from "./Label";

export default class CurrencyField extends Component {
  static defaultProps = {
    label: "Label",
    placeholder: "",
    name: "currencyFormField",
    onChange: () => {}
  };

  changeHandler = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const {
      label,
      placeholder,
      name,
      value,
      id,
      options,
      disabled
    } = this.props;
    const { maskconfig } = options || {};

    return (
      <div className="c-label-field">
        <Label {...this.props} />
        <div className="d-flex">
          <i className="far fa-dollar-sign c-label-field__icon c-label-field__icon--prepend" />
          <MaskedInput
            id={id}
            className="c-label-field__input c-label-field__input--icon-prefixed"
            type="text"
            inputMode="numeric"
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            value={value == null ? 0 : value}
            maskconfig={maskconfig}
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}
