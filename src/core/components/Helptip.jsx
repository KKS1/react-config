import React, { Component } from "react";
import Paragraph from "./Paragraph";
import Accordion from "./Accordion";

const componentsMap = {
  paragraph: Paragraph,
  accordion: Accordion
};

export default class Helptip extends Component {
  componentDidMount() {
    $.R.CallOutBoxes.init();
  }

  render() {
    const { componentProps } = this.props;

    return (
      <React.Fragment>
        <a
          aria-expanded="false"
          data-target="help_tip__rsform"
          aria-controls="help_tip__rsform"
          id="toggler_help_tip_rsform"
          className="c-alert__icon--title-icon c-alert__icon--info js-toggle-help far fa-question-circle c-icon is-active"
          href="#"
          aria-label="help tip link, toggles help tip"
        />

        <div
          aria-label="help tip"
          className="c-alert c-alert--block c-alert--info js-help-tip is-hidden"
          id="help_tip__rsform"
          role="region"
        >
          <div className="d-flex">
            <div className="c-alert__icon--big c-alert__icon--big--inline c-alert__icon--info">
              <div
                className="fal fa-question-circle c-icon"
                aria-hidden="true"
              />
            </div>
            <div
              aria-live="polite"
              className="c-alert__text c-alert__text--help-tip"
            >
              <h3>Help Tip</h3>
              {componentProps &&
                componentProps.map((componentProp, index) => {
                  const { type, ...restProps } = componentProp;
                  const UnderlyingComponent = componentsMap[type];
                  return <UnderlyingComponent key={index} {...restProps} />;
                })}
            </div>
          </div>
          <div className="c-alert__close js-help-close">
            <a
              aria-label="Close"
              className="btn btn--circle btn--disguised btn--close close"
              href="#"
            >
              <div
                className="icon--utility__close fal fa-times c-icon"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
