import { createElement } from "../view/createElement.js";

function roundNum(input) {
  let roundedInput = parseFloat(input.toFixed(2));
  return roundedInput;
}

function setMultipleAttribute(element, attribute) {
  for (let key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

function createMultipleElement(amount, parent, element, attribute, text) {
  for (let i = 0; i < amount; i++) {
    createElement(parent, element, attribute, text);
  }
}

export { roundNum, setMultipleAttribute };
