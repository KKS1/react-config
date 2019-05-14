import React, { Component } from "react";
import Utils from "../../core/helpers/utils";
import _ from "lodash";

//Internal utility method to generate button markup
const footerButtonTemplate = buttonConfig => {
  const {
    text,
    handler,
    classes,
    buttonClasses,
    iconClasses,
    hasPreTextIcon
  } = buttonConfig;
  const NavIcon = iconClasses ? (
    <div className={iconClasses} aria-hidden="true" />
  ) : null;
  const key = _.uniqueId();
  const className = `${classes} form-group`;
  const buttonClassName = `btn btn--block btn--ghost js-substep-nav ${buttonClasses}`;

  return (
    <div className={className} key={key}>
      <button type="button" className={buttonClassName} onClick={handler}>
        {hasPreTextIcon && NavIcon}
        {text}
        {!hasPreTextIcon && NavIcon}
      </button>
    </div>
  );
};

// Generates template for application release footer
const releaseTemplate = props => {
  const releaseButtonConfig = {
    text: "Save and return to review",
    handler: props.onBackToReview,
    classes: "col-12 col-md-4"
  };
  return footerButtonTemplate(releaseButtonConfig);
};

// Generates template for the default footer with back and next buttons
const defaultTemplate = props => {
  const defaultIconClasses = "btn__icon btn__icon--lg";
  const defaultButtonsConfig = {
    next: {
      text: "Next",
      handler: props.onNextClick,
      classes: "col-6 col-md-2",
      buttonClasses: "js-form-footer-next",
      iconClasses: `${defaultIconClasses} btn__icon--pad-left far fa-chevron-right c-icon`
    },
    back: {
      text: "Back",
      hasPreTextIcon: true,
      handler: props.onBackClick,
      classes: "col-6 col-md-2",
      buttonClasses: "js-form-footer-back",
      iconClasses: `${defaultIconClasses} btn__icon--pad-right far fa-chevron-left c-icon`
    }
  };
  return [
    footerButtonTemplate(defaultButtonsConfig.next),
    footerButtonTemplate(defaultButtonsConfig.back)
  ];
};

export default class Footer extends Component {
  nextClick() {
    this.props.onNextClick();
  }

  backClick() {
    this.props.onBackClick();
  }

  static defaultProps = {
    onNextClick: () => {},
    onBackClick: () => {}
  };

  render() {
    const template = Utils.isRedirectedFromRelease()
      ? releaseTemplate(this.props)
      : defaultTemplate(this.props);
    return (
      <div className="c-loan-application__footer component row">{template}</div>
    );
  }
}
