import React, { Component } from "react";
import classNames from "classnames";
import Label from "./Label";

const ButtonItem = props => {
  const { enumOptions, option, onChange, value, id, index } = props;
  const isActive = value === option.value;
  const btnClassName = classNames("btn", { active: isActive });

  return (
    <button
      type="button"
      className={btnClassName}
      onClick={event => onChange(option.value)}
    >
      {option.label}
    </button>
  );
};

export default class ButtonGroup extends Component {
  static defaultProps = {
    name: "btnGroup",
    onChange: () => {}
  };

  render() {
    const { name, value, id, options, label } = this.props;
    const { enumOptions } = this.props.options;

    return (
      <div className="c-label-field">
        <Label for={id} {...this.props} />
        <div
          className="btn-group"
          role="group"
          id={id}
          name={name}
          aria-label={label}
        >
          {enumOptions &&
            enumOptions.map((option, index) => {
              const newProps = { ...this.props, enumOptions, option, index };
              return <ButtonItem key={index} {...newProps} />;
            })}
        </div>
      </div>
    );
  }
}
