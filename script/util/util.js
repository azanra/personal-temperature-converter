function roundNum(input) {
  let roundedInput = parseFloat(input.toFixed(2));
  return roundedInput;
}

function setMultipleAttribute(element, attribute) {
  for (let key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}

export { roundNum, setMultipleAttribute };
