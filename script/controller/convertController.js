import { Convert } from "../model/convert.js";
import { HistoryText } from "../view/history/history.js";
import { updateText } from "../util/util.js";

function ConvertController() {
  const convertBtn = document.querySelector(".convert-btn");
  convertBtn.addEventListener("click", () => {
    let fromSelect = document.querySelector("#from-select").value;
    let toSelect = document.querySelector("#to-select").value;
    let tempInput = document.querySelector("#input-temp").value;
    tempInput = Number(tempInput);
    let convertEntry = new Convert(tempInput, fromSelect, toSelect);
    convertEntry = convertTemp(convertEntry);
    updateResultText(convertEntry.result);
    HistoryText(convertEntry);
    updateText(".formula-text", convertEntry.formula);
  });
}

function convertTemp(convertObj) {
  if (convertObj.from === "celcius" && convertObj.to === "kelvin") {
    convertObj.result = convertObj.celcToKel();
    return convertObj;
  } else if (convertObj.from === "celcius" && convertObj.to === "fahrenheit") {
    convertObj.result = convertObj.celcToFah();
    return convertObj;
  } else if (convertObj.from === "kelvin" && convertObj.to === "celcius") {
    convertObj.result = convertObj.kelToCel();
    return convertObj;
  } else if (convertObj.from === "kelvin" && convertObj.to === "fahrenheit") {
    convertObj.result = convertObj.kelToFah();
    return convertObj;
  } else if (convertObj.from === "fahrenheit" && convertObj.to === "celcius") {
    convertObj.result = convertObj.fahToCel();
    return convertObj;
  } else if (convertObj.from === "fahrenheit" && convertObj.to === "kelvin") {
    convertObj.result = convertObj.fahToKel();
    return convertObj;
  } else {
    const formulaText = document.querySelector(".formula-text");
    formulaText.textContent = "Select proper temperature to convert from!";
  }
}

function updateResultText(resultValue) {
  const outputElement = document.querySelector("#output-temp");
  outputElement.value = resultValue;
}

export { ConvertController };
