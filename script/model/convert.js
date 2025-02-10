import { roundNum } from "../util/util.js";
function Convert(tempInput, fromInput, toInput) {
  this.temperature = tempInput;
  this.from = fromInput;
  this.to = toInput;
  this.result;
}

Convert.prototype.celcToKel = function (input) {
  return roundNum(input + 273.15);
};

Convert.prototype.celcToFah = function (input) {
  return roundNum(input * (9 / 5) + 32);
};

Convert.prototype.kelToCel = function (input) {
  return roundNum(input - 273.15);
};

export { Convert };
