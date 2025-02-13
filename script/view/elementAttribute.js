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
