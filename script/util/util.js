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

function createMultipleElement(array) {
  for (let i = 0; i < array.length; i++) {
    createElement(
      array[i].parent,
      array[i].element,
      array[i].attribute,
      array[i].text
    );
  }
}

export { roundNum, setMultipleAttribute, createMultipleElement };
