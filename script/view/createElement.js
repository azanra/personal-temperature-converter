import { setMultipleAttribute } from "../util/util.js";

function createElement(parent, element, attribute, text) {
  let parentElement = document.querySelector(parent);
  let newElement = document.createElement(element);
  newElement.textContent = text;
  setMultipleAttribute(newElement, attribute);
  parentElement.append(newElement);
}

export { createElement };
