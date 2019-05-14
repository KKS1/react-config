import BaseSchema from "./baseSchema";

describe("BaseSchema", () => {
  const widgetKeys = [
    "checkboxes",
    "BaseInput",
    "checkbox",
    "currency",
    "dropdown",
    "radios",
    "location",
    "percent",
    "btnGroup",
    "numeric"
  ];

  const fieldKeys = ["address", "date", "header", "paragraph"];

  test("contains_widgets_and_fields", () => {
    const { widgets, fields } = BaseSchema;

    expect(widgets).toBeDefined();
    expect(fields).toBeDefined();

    widgetKeys.forEach(key => {
      expect(widgets[key]).toBeDefined();
    });

    fieldKeys.forEach(key => {
      expect(fields[key]).toBeDefined();
    });
  });
});
