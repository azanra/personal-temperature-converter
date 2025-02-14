import { createElement } from "../createElement.js";
import { elementAttr } from "../elementAttribute.js";

function ConvertBtn() {
  createElement(
    elementAttr.convertBtn.parent,
    elementAttr.convertBtn.element,
    elementAttr.convertBtn.attribute,
    elementAttr.convertBtn.text
  );
}

export { ConvertBtn };
