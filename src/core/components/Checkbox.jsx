import React, { Component } from "react";

const Checkbox = props => {
  const { value, label, onChange, name, id } = props;
  return (
    <label className="c-checkbox">
      <input
        id={id}
        className="c-checkbox__input"
        name={name}
        type="checkbox"
        checked={typeof value === "undefined" ? false : value}
        value={value}
        onChange={event => props.onChange(event.target.checked)}
      />
      <i className="c-checkbox__icon" />
      <span className="c-checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
