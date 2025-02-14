import { createElement } from "../createElement.js";
import { elementAttr } from "../elementAttribute.js";

function History() {
  createElement(
    elementAttr.historyContainer.parent,
    elementAttr.historyContainer.element,
    elementAttr.historyContainer.attribute
  );
}

function HistoryText(convert) {
  createElement(
    elementAttr.historyText.parent,
    elementAttr.historyText.element,
    elementAttr.historyText.attribute,
    `${convert.temperature} ${convert.from} to ${convert.result} ${convert.to}`
  );
}

export { History, HistoryText };
