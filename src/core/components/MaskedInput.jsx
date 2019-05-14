import React, { Component } from "react";
import Inputmask from "inputmask";

const ref = React.createRef();

const defaultMaskconfig = {
  alias: "numeric",
  groupSeparator: ",",
  autoGroup: true,
  digits: 0,
  digitsOptional: true,
  rightAlign: false,
  min: 0
};

export default class MaskedInput extends Component {
  static defaultProps = {
    maskconfig: defaultMaskconfig
  };

  attachMask = () => {
    const maskconfig = { ...defaultMaskconfig, ...this.props.maskconfig };
    const mask = new Inputmask(maskconfig);
    this.mask = mask.mask(ref.current);
  };

  componentDidMount() {
    this.attachMask();
  }

  render() {
    return <input ref={ref} {...this.props} />;
  }
}
