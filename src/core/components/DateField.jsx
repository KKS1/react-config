import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Label from "./Label";

/** TODOS:
 * - use moment.js for date management and generation ( moment.months() / moment("2019-Feb", "YYYY-MMM").daysInMonth() )
 **/

const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getDefaultYearsRange = () => {
  const currentYear = new Date().getFullYear();
  return [currentYear - 50, currentYear];
};

const pad = (num, size) => {
  let s = String(num);
  while (s.length < size) {
    s = "0" + s;
  }
  return s;
};

const rangeOptions = ({ range, defaultOption, labelFn, sortDesc = false }) => {
  let options = [];
  const start = range[0];
  const stop = range[1];

  const optionLabelFn = labelFn || (val => val.toString());

  for (let i = start; i <= stop; i++) {
    options.push({ value: parseInt(i), label: optionLabelFn(i) });
  }

  options = sortDesc
    ? [...options, defaultOption].reverse()
    : [defaultOption, ...options];

  return options;
};

const months = rangeOptions({
  range: [1, 12],
  defaultOption: { value: 0, label: "Month" },
  labelFn: i => MONTH_LABELS[i - 1]
});

const days = rangeOptions({
  range: [1, 31],
  defaultOption: { value: 0, label: "Day" },
  labelFn: i => pad(i, 2)
});

const dropdownClasses = {
  month: "mr-3 w-50",
  day: "mr-3 w-25",
  year: "mr-3 w-25"
};

export default class DateField extends Component {
  static defaultProps = {
    formData: {}
  };

  constructor(props) {
    super(props);
  }

  propogateOnChange = (prop, value) => {
    this.props.onChange({ ...this.props.formData, [prop]: value });
  };

  changeHandler = (prop, val) => {
    this.propogateOnChange(prop, parseInt(val));
  };

  render() {
    const {
      schema,
      uiSchema = {},
      placeholder,
      name,
      formData,
      idSchema
    } = this.props;
    const { $id: id } = idSchema;
    const { title: label } = schema;
    const { "ui:options": options = {} } = uiSchema;
    const {
      yearsRange = getDefaultYearsRange(),
      hiddenFields = [],
      prefix = ""
    } = options;

    const dropdownData = {
      month: { enumOptions: months },
      day: { enumOptions: days },
      year: {
        enumOptions: rangeOptions({
          range: yearsRange,
          defaultOption: { value: 0, label: "Year" },
          sortDesc: true
        })
      }
    };

    return (
      <div className="c-label-field">
        <label className="control-label" id={id}>
          {label}
        </label>
        <div className="d-flex">
          {Object.keys(dropdownData).map((key, index) => {
            const dropdownId = id + "_" + key;
            const fieldProp = prefix + key;
            return (
              !hiddenFields.includes(key) && (
                <Dropdown
                  id={dropdownId}
                  key={index}
                  customClasses={dropdownClasses[key]}
                  options={dropdownData[key]}
                  value={formData[fieldProp]}
                  labelby={id}
                  onChange={val => this.changeHandler(fieldProp, val)}
                />
              )
            );
          })}
        </div>
      </div>
    );
  }
}
