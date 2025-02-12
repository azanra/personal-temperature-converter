import { Convert } from "./model/convert.js";
import { Form } from "./view/form.js";

let firstConvert = new Convert(21, "celcius", "kelvin");
firstConvert.fahToKel();
console.log(firstConvert);
let formElement = new Form();
