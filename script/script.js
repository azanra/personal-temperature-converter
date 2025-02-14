import { Convert } from "./model/convert.js";
import { Form } from "./view/form.js";
import { History, HistoryText } from "./view/history/history.js";

let firstConvert = new Convert(21, "celcius", "kelvin");
firstConvert.fahToKel();
console.log(firstConvert);
let formElement = new Form();
let history = new History();
let historyText = new HistoryText(firstConvert);
