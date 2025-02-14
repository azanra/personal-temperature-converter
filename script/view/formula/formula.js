import { createElement } from "../createElement.js";
import { elementAttr } from "../elementAttribute.js";

function Formula() {
  createElement(
    elementAttr.formContainer.parent,
    elementAttr.formulaContainer.element,
    elementAttr.formulaContainer.attribute
  );
}

function FormulaText(formula) {
  createElement(
    elementAttr.formulaText.parent,
    elementAttr.formulaText.element,
    elementAttr.formulaText.attribute,
    formula
  );
}

export { Formula, FormulaText };
