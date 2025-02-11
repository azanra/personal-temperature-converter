import { roundNum } from "../util/util.js";
function Convert(tempInput, fromInput, toInput) {
  this.temperature = tempInput;
  this.from = fromInput;
  this.to = toInput;
  this.result;
}

Convert.prototype.celcToKel = function () {
  return (this.result = roundNum(this.temperature + 273.15));
};

Convert.prototype.celcToFah = function () {
  return (this.result = roundNum(this.temperature * (9 / 5) + 32));
};

Convert.prototype.kelToCel = function () {
  return (this.result = roundNum(this.temperature - 273.15));
};

Convert.prototype.kelToFah = function () {
  return (this.result = roundNum((this.temperature - 273.15) * (9 / 5) + 32));
};

export { Convert };
