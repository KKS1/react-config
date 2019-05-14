import React, { Component } from "react";
import Label from "./Label";

const Radiotem = props => {
  const { enumOptions, option, onChange, value, id, index, label } = props;
  const checked = value === option.value;
  const classList = "js-multi-select__option c-multi-select__option c-radio";
  const optionId = `${id}_${index}`;
  const optionName = `${id}[0]`;

  return (
    <div className="col-12 col-md-10" role="listitem" htmlFor={optionId}>
      <label className={classList}>
        <input
          id={optionId}
          className="c-radio__input"
          name={optionName}
          type="radio"
          checked={checked}
          value={option.value}
          onChange={event => onChange(option.value)}
        />
        <i className="c-radio__icon" />
        <span className="c-radio__label">{option.label}</span>
      </label>
    </div>
  );
};

export default class RadioGroup extends Component {
  render() {
    const { enumOptions } = this.props.options;

    return (
      <React.Fragment>
        <Label {...this.props} />
        <fieldset
          id={this.props.id}
          className="js-multi-select c-multi-select row c-multi-select--condensed"
          role="list"
        >
          {enumOptions &&
            enumOptions.map((option, index) => {
              const newProps = { ...this.props, enumOptions, option, index };
              return <Radiotem key={index} {...newProps} />;
            })}
        </fieldset>
      </React.Fragment>
    );
  }
}
