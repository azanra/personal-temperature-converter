import { elementAttr, selectOption } from "./elementAttribute.js";
import { createElement } from "./createElement.js";
import { createMultipleElement } from "../util/util.js";

function Form() {
  createElement(
    elementAttr.form.parent,
    elementAttr.form.element,
    elementAttr.form.attribute
  );
  createElement(
    elementAttr.formContainer.parent,
    elementAttr.formContainer.element,
    elementAttr.formContainer.attribute
  );
  createElement(
    elementAttr.fromSelect.parent,
    elementAttr.fromSelect.element,
    elementAttr.fromSelect.attribute
  );
  createMultipleElement(selectOption);
}

export { Form };
