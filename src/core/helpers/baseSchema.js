import React, { Component } from "react";
import Atomic from "../../core/components";

export const widgets = {
  checkboxes: Atomic.CheckboxList,
  BaseInput: Atomic.TextField,
  checkbox: Atomic.Checkbox,
  currency: Atomic.CurrencyField,
  dropdown: Atomic.Dropdown,
  radios: Atomic.RadioGroup,
  location: Atomic.LocationAutoComplete,
  percent: Atomic.PercentField,
  btnGroup: Atomic.ButtonGroup,
  numeric: Atomic.NumericField
};

export const fields = {
  zillow: Atomic.Zillow,
  address: Atomic.Address,
  date: Atomic.DateField,
  header: Atomic.Header,
  paragraph: Atomic.Paragraph
};

export default {
  widgets,
  fields
};
