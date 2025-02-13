import { createElement } from "../createElement.js";
import { elementAttr } from "../elementAttribute.js";

function Input() {
  createElement(
    elementAttr.inputContainer.parent,
    elementAttr.inputContainer.element,
    elementAttr.inputContainer.attribute
  );
  createElement(
    elementAttr.inputSection.parent,
    elementAttr.inputSection.element,
    elementAttr.inputSection.attribute
  );
  createElement(
    elementAttr.inputTemp.parent,
    elementAttr.inputTemp.element,
    elementAttr.inputTemp.attribute
  );
  createElement(
    elementAttr.inputLabel.parent,
    elementAttr.inputLabel.element,
    elementAttr.inputLabel.attribute,
    elementAttr.inputLabel.text
  );
}

export { Input };
