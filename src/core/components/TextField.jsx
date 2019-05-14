import React, { Component } from "react";
import Label from "./Label";

export default class TextField extends Component {
  static defaultProps = {
    label: "Label",
    placeholder: "",
    name: "textField",
    onChange: () => {}
  };

  changeHandler = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { placeholder, name, value, id, options } = this.props;
    const inputProps = options ? options.inputProps : {};
    return (
      <div className="c-label-field">
        <Label {...this.props} />
        <input
          id={id}
          placeholder={placeholder}
          type="text"
          name={name}
          value={value == null ? "" : value}
          {...inputProps}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
