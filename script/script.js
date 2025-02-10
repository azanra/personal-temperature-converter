import { Convert } from "./model/convert.js";

let convert = new Convert(21, "celcius", "kelvin");
let result = convert.celcToFah(convert.temperature);
convert.result = result;
console.log(convert);
