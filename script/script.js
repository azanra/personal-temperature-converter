import { Convert } from "./model/convert.js";
import { Form } from "./view/form.js";
import { History, HistoryText } from "./view/history/history.js";
import { Formula, FormulaText } from "./view/formula/formula.js";
import { ConvertBtn } from "./view/input/button.js";
import { ConvertController } from "./controller/convertController.js";

let formElement = new Form();
let convertBtn = new ConvertBtn();
let history = new History();
let formula = new Formula();
let formulaText = new FormulaText();

let historyArr = [];

historyArr = ConvertController(historyArr);
