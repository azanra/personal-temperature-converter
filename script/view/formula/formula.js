import { createElement } from "../createElement.js";
import { elementAttr } from "../elementAttribute.js";

function Formula() {
  createElement(
    elementAttr.formulaContainer.parent,
    elementAttr.formulaContainer.element,
    elementAttr.formulaContainer.attribute
  );
}

function FormulaText() {
  createElement(
    elementAttr.formulaText.parent,
    elementAttr.formulaText.element,
    elementAttr.formulaText.attribute
  );
}

export { Formula, FormulaText };
