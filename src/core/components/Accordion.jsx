import React, { Component } from "react";
import Label from "./Label";

const AccordionSection = props => {
  const { option, id, index } = props;
  const headerId = id + "_header_" + index;
  const contentId = id + "_content_" + index;

  return (
    <div className="c-accordion__group">
      <a
        className="col-12 c-accordion__heading p-0 collapsed"
        data-toggle="collapse"
        id={headerId}
        data-parent={`#${id}`}
        data-target={`#${contentId}`}
        aria-controls={contentId}
        href="#"
        aria-expanded="false"
      >
        {option.title}
        <i className="c-accordion__icon" />
      </a>
      <div
        className="col-12 c-accordion__body collapse"
        data-parent={`#${id}`}
        role="region"
        aria-labelledby={headerId}
        id={contentId}
      >
        {option.content}
      </div>
    </div>
  );
};

export default class Accordion extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, options, id = _.uniqueId('accordion_'), ...restProps } = this.props;

    return (
      <React.Fragment>
        <Label {...this.props} />

        <div className="c-accordion" id={id}>
          {options &&
            options.map((option, index) => {
              const newProps = {
                ...restProps,
                id,
                option,
                index
              };
              return <AccordionSection key={index} {...newProps} />;
            })}
        </div>
      </React.Fragment>
    );
  }
}
