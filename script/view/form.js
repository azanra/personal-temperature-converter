import { elementAttr } from "./elementAttribute.js";
import { createElement } from "./createElement.js";
import { Select } from "./select/select.js";
import { Input } from "./input/input.js";

function Form() {
  createElement(
    elementAttr.form.parent,
    elementAttr.form.element,
    elementAttr.form.attribute
  );
  const select = new Select();
  const input = new Input();
}

export { Form };
