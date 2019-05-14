import React, { Component } from "react";
import Label from "./Label";

const selectValue = (value, selected = [], all) => {
  const at = all.indexOf(value);
  const updated = selected.slice(0, at).concat(value, selected.slice(at));
  return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b));
};

const deselectValue = (value, selected) => {
  return selected.filter(v => v !== value);
};

const CheckboxItem = props => {
  const { enumOptions, option, onChange, value, id, index, label } = props;
  const checked = value ? value.indexOf(option.value) !== -1 : false;
  const classList = "js-multi-select__option c-multi-select__option c-checkbox";
  const optionId = `${id}_${index}`;
  const optionName = `${id}[0]`;

  const changeHandler = ({ event, option, value }) => {
    const all = enumOptions.map(({ value }) => value);
    const newValue = event.target.checked
      ? selectValue(option.value, value, all)
      : deselectValue(option.value, value);

    onChange(newValue);
  };

  return (
    <div className="col-12 col-md-10" role="listitem" htmlFor={optionId}>
      <label className={classList}>
        <input
          id={optionId}
          className="c-checkbox__input"
          name={optionName}
          type="checkbox"
          checked={checked}
          value={option.value}
          onChange={event => changeHandler({ event, option, value })}
        />
        <i className="c-checkbox__icon" />
        <span className="c-checkbox__label">{option.label}</span>
      </label>
    </div>
  );
};

export default class CheckboxList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const label = this.props.label
      ? this.props.label
      : this.props.schema && this.props.schema.title
      ? this.props.schema.title
      : "";
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
              const newProps = {
                ...this.props,
                enumOptions,
                option,
                index,
                label
              };
              return <CheckboxItem key={index} {...newProps} />;
            })}
        </fieldset>
      </React.Fragment>
    );
  }
}
