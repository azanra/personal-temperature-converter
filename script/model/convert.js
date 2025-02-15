import { roundNum } from "../util/util.js";
function Convert(tempInput, fromInput, toInput) {
  this.temperature = tempInput;
  this.from = fromInput;
  this.to = toInput;
  this.result;
}

Convert.prototype.celcToKel = function () {
  this.formula = "temperature + 273.15";
  return (this.result = roundNum(this.temperature + 273.15));
};

Convert.prototype.celcToFah = function () {
  this.formula = "temperature * (9 / 5) + 32";
  return (this.result = roundNum(this.temperature * (9 / 5) + 32));
};

Convert.prototype.kelToCel = function () {
  this.formula = "temperature - 273.15";
  return (this.result = roundNum(this.temperature - 273.15));
};

Convert.prototype.kelToFah = function () {
  this.formula = "(temperature - 273.15) * (9 / 5) + 32)";
  return (this.result = roundNum((this.temperature - 273.15) * (9 / 5) + 32));
};

Convert.prototype.fahToCel = function () {
  this.formula = "(temperature - 32) * (5 / 9)";
  return (this.result = roundNum((this.temperature - 32) * (5 / 9)));
};

Convert.prototype.fahToKel = function () {
  this.formula = "(temperature - 32) * (5 / 9) + 273.15)";
  return (this.result = roundNum((this.temperature - 32) * (5 / 9) + 273.15));
};

export { Convert };
