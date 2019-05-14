import React, { Component } from "react";
import Utils from "./utils";

describe("Utils", () => {

  test("addSubStepSpinner", () => {
    const subStepElem = document.createElement("div");
    subStepElem.className = "js-substep-nav";
    document.body.appendChild(subStepElem);

    expect(subStepElem.hasAttribute("disabled")).toBe(false);

    Utils.addSubStepSpinner(true);

    expect(subStepElem.hasAttribute("disabled")).toBe(true);

    document.body.innerHTML = "";
  });

  test("removeSubStepSpinner", () => {
    const subStepElem = document.createElement("div");
    subStepElem.className = "js-substep-nav";
    document.body.appendChild(subStepElem);

    subStepElem.setAttribute("disabled", true);

    expect(subStepElem.hasAttribute("disabled")).toBe(true);

    Utils.removeSubStepSpinner();

    expect(subStepElem.hasAttribute("disabled")).toBe(false);

    document.body.innerHTML = "";
  });

  test("#getFormQuestionIndex", () => {
    const elem = document.createElement("div");
    elem.setAttribute("data-question-index", 3);
    elem.className = "js-elem-question-index";
    document.body.appendChild(elem);

    expect(Utils.getFormQuestionIndex('.js-elem-question-index')).toBe(3);
  });

  test("#isRedirectedFromRelease", () => {
    const elem = document.createElement("div");
    elem.className = "js-heloc-container";
    document.body.appendChild(elem);

    expect(Utils.isRedirectedFromRelease()).toBe(false);
    
    $(".js-heloc-container").data({questionIndex : 4});
    expect(Utils.isRedirectedFromRelease()).toBe(true);
  });

  test("#loadWithQueryStrings", () => {
    const protocol = "http:",
          host = "localhost:3000",
          pathname = "/la/12345/apply",
          url = `${protocol}//${host}${pathname}`,
          queryStringsObj = { q1: 3, q2: 4, q3: 5 };
    Object.defineProperty(window, 'location', {
      value: {
       protocol,
       host,
       pathname
      },
      writable: true
    });
    Utils.loadWithQueryStrings(queryStringsObj);

    expect(window.location.href).toBe(`${url}?q1=3&q2=4&q3=5`);
  });

  test("updateStepCounter", () => {
    const counterElem = document.createElement("div");
    counterElem.className = "js--step-progress";
    document.body.appendChild(counterElem);

    counterElem.innerHTML = "Step 2 of 3";

    Utils.updateStepCounter();

    expect(counterElem.innerHTML).toBe("Step 2 of 3");

    Utils.updateStepCounter("Step 3 of 4");

    expect(counterElem.innerHTML).toBe("Step 3 of 4");

    document.body.innerHTML = "";
  });
});
