function Convert(tempInput, fromInput, toInput) {
  this.temperature = tempInput;
  this.from = fromInput;
  this.to = toInput;
  this.result;
}

Convert.prototype.celcToKel = function (input) {
  return input + 273.15;
};

Convert.prototype.celcToFah = function (input) {
  let result = input * (9 / 5) + 32;
  let roundedResult = parseFloat(result.toFixed(2));
  return roundedResult;
};

export { Convert };
