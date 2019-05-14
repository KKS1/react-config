import React, { Component } from "react";
import Label from "./Label";
/* global google */

const ref = React.createRef();

export default class LocationAutoComplete extends Component {
  static defaultProps = {
    placeholder: "",
    onChange: () => {},
    onPlaceChange: () => {}
  };

  constructor(props) {
    super(props);
    this.autocomplete = null;
    this.hasFocused = false;
  }

  componentDidMount() {
    this.hasFocused = false;

    if (!$.R.GooglePlaces.autocomplete_init) {
      $.R.GooglePlaces.autocompleteFocus();
    }
  }

  componentWillUnmount() {
    this.hasFocused = false;
  }

  focusHandler = () => {
    if (this.hasFocused) return;

    this.hasFocused = true;

    this.autocomplete = new google.maps.places.Autocomplete(ref.current, {
      types: ["geocode"]
    });

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
    $.R.GooglePlaces.reappendGoogleContainer(ref.current.parentElement, 0);
  };

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChange(place);
  };

  changeHandler = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { placeholder, value, options, id, name } = this.props;
    return (
      <div className="c-label-field">
        <Label for={id} {...this.props} />
        <input
          ref={ref}
          id={id}
          placeholder={placeholder}
          type="text"
          className="address"
          aria-haspopup="true"
          role="combobox"
          aria-autocomplete="both"
          aria-label="Type your text here to display the list of address choices."
          name={name}
          value={value == null ? "" : value}
          onFocus={this.focusHandler}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
