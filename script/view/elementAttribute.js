const elementAttr = {
  form: {
    parent: ".container",
    element: "form",
    attribute: {
      class: "form-container",
    },
  },
  formContainer: {
    parent: ".form-container",
    element: "div",
    attribute: {
      class: "convert-container",
    },
  },
  fromSelect: {
    parent: ".convert-container",
    element: "select",
    attribute: {
      id: "from-select",
    },
  },
  fromOption: {
    kelvin: {
      parent: "#from-select",
      element: "option",
      attribute: {
        value: "kelvin",
      },
      text: "kelvin",
    },
    fahrenheit: {
      parent: "#from-select",
      element: "option",
      attribute: {
        value: "fahrenheit",
      },
      text: "fahrenheit",
    },
    celcius: {
      parent: "#from-select",
      element: "option",
      attribute: {
        value: "celcius",
      },
      text: "celcius",
    },
  },
  toText: {
    parent: ".convert-container",
    element: "label",
    attribute: {
      class: "to-label",
    },
    text: "To",
  },
  toSelect: {
    parent: ".convert-container",
    element: "select",
    attribute: {
      id: "to-select",
    },
  },
  toOption: {
    kelvin: {
      parent: "#to-select",
      element: "option",
      attribute: {
        value: "kelvin",
      },
      text: "kelvin",
    },
    fahrenheit: {
      parent: "#to-select",
      element: "option",
      attribute: {
        value: "fahrenheit",
      },
      text: "fahrenheit",
    },
    celcius: {
      parent: "#to-select",
      element: "option",
      attribute: {
        value: "celcius",
      },
      text: "celcius",
    },
  },
  inputContainer: {
    parent: ".form-container",
    element: "div",
    attribute: {
      class: "input-container",
    },
  },
  inputSection: {
    parent: ".input-container",
    element: "div",
    attribute: {
      class: "input-section",
    },
  },
  inputTemp: {
    parent: ".input-section",
    element: "input",
    attribute: {
      type: "number",
      id: "input-temp",
      name: "input-temp",
      placeholder: "input your temperature here",
    },
  },
  inputLabel: {
    parent: ".input-section",
    element: "p",
    attribute: {
      class: "input-label",
    },
    text: "input",
  },
  outputContainer: {
    parent: ".input-container",
    element: "div",
    attribute: {
      class: "output-section",
    },
  },
  outputTemp: {
    parent: ".output-section",
    element: "input",
    attribute: {
      type: "number",
      id: "output-temp",
      name: "output-temp",
      readonly: "",
    },
  },
  outputLabel: {
    parent: ".output-section",
    element: "p",
    attribute: {
      class: "output-label",
    },
    text: "output",
  },
  historyContainer: {
    parent: ".container",
    element: "div",
    attribute: {
      class: "history-container",
    },
  },
  historyText: {
    parent: ".history-container",
    element: "p",
    attribute: {
      class: "history-text",
    },
  },
  formulaContainer: {
    parent: ".container",
    element: "div",
    attribute: {
      class: "formula-container",
    },
  },
  formulaText: {
    parent: ".formula-container",
    element: "p",
    attribute: {
      class: "formula-text",
    },
  },
  convertBtn: {
    parent: ".input-container",
    element: "button",
    attribute: {
      class: "convert-btn",
    },
    text: "Convert",
  },
};

const selectFromOption = [];
const selectToOption = [];

for (let key in elementAttr.fromOption) {
  selectFromOption.push(elementAttr.fromOption[key]);
}

for (let key in elementAttr.toOption) {
  selectToOption.push(elementAttr.toOption[key]);
}

console.log(selectFromOption, selectToOption);

export { elementAttr, selectFromOption, selectToOption };
