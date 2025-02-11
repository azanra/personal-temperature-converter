import { Convert } from "./model/convert.js";

let convert = new Convert(21, "celcius", "kelvin");
convert.fahToKel();
console.log(convert);
