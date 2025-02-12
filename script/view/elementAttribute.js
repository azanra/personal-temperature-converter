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
};

const selectOption = [];
for (let key in elementAttr.fromOption) {
  selectOption.push(elementAttr.fromOption[key]);
}
console.log(selectOption);

export { elementAttr, selectOption };
