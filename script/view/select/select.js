import {
  elementAttr,
  selectFromOption,
  selectToOption,
} from "../elementAttribute.js";
import { createMultipleElement } from "../../util/util.js";
import { createElement } from "../createElement.js";

function Select() {
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
}

export { Select };
