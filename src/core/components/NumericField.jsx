import React, { Component } from "react";
import MaskedInput from "./MaskedInput";
import Label from "./Label";

export default class NumericField extends Component {
  static defaultProps = {
    label: "Label",
    placeholder: "",
    name: "numericFormField",
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
        <MaskedInput
          id={id}
          className="c-label-field__input"
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
    );
  }
}
