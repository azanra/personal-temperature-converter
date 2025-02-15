import { Convert } from "../model/convert.js";
import { HistoryText } from "../view/history/history.js";

function ConvertController(arr) {
  const convertBtn = document.querySelector(".convert-btn");
  convertBtn.addEventListener("click", () => {
    let fromSelect = document.querySelector("#from-select").value;
    let toSelect = document.querySelector("#to-select").value;
    let tempInput = document.querySelector("#input-temp").value;
    tempInput = Number(tempInput);
    let convertEntry = new Convert(tempInput, fromSelect, toSelect);
    convertEntry = convertTemp(convertEntry);
    updateText(convertEntry.result);
    HistoryText(convertEntry);
    return arr.push(convertEntry);
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
  }
}

function updateText(resultValue) {
  const outputElement = document.querySelector("#output-temp");
  outputElement.value = resultValue;
}

export { ConvertController };
