import { elementAttr } from "../elementAttribute.js";
import { createElement } from "../createElement.js";

function Output() {
  createElement(
    elementAttr.outputContainer.parent,
    elementAttr.outputContainer.element,
    elementAttr.outputContainer.attribute
  );
  createElement(
    elementAttr.outputTemp.parent,
    elementAttr.outputTemp.element,
    elementAttr.outputTemp.attribute
  );
  createElement(
    elementAttr.outputLabel.parent,
    elementAttr.outputLabel.element,
    elementAttr.outputLabel.attribute,
    elementAttr.outputLabel.text
  );
}

export { Output };
