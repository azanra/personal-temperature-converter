import {
  elementAttr,
  selectFromOption,
  selectToOption,
} from "./elementAttribute.js";
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
  createMultipleElement(selectFromOption);
  createElement(
    elementAttr.toText.parent,
    elementAttr.toText.element,
    elementAttr.toText.attribute,
    elementAttr.toText.text
  );
  createElement(
    elementAttr.toSelect.parent,
    elementAttr.toSelect.element,
    elementAttr.toSelect.attribute
  );
  createMultipleElement(selectToOption);
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

export { Form };
