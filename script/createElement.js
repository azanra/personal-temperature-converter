function createElement(parent, element, text, attribute) {
  let parentElement = document.querySelector(parent);
  let newElement = document.createElement(element);
  newElement.textContent = text;
  parentElement.append(newElement);
}

export { createElement };
