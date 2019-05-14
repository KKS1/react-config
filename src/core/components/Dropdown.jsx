import React, { Component } from "react";
import styled from "styled-components";
import Label from "./Label";

const WrapperDiv = styled.div`
  padding: 0px;
`;

const HiddenLabel = styled.label`
  display: none;
`;

const OptionItem = ({ optionData }) => {
  const { value, label } = optionData;
  return <option value={value}>{label}</option>;
};

export default class Dropdown extends Component {
  changeHandler = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { name, value, id, options, labelby, customClasses } = this.props;
    const { enumOptions } = options;

    return (
      <WrapperDiv className={`c-label-field ${customClasses}`}>
        {!labelby && <Label {...this.props} />}
        <div className="c-select">
          <select
            id={id}
            name={name}
            value={typeof value === "undefined" ? "" : value}
            className="c-select__menu"
            aria-labelledby={labelby}
            onChange={this.changeHandler}
          >
            {enumOptions.map((optionData, index) => (
              <OptionItem key={index} optionData={optionData} />
            ))}
          </select>
        </div>
      </WrapperDiv>
    );
  }
}
