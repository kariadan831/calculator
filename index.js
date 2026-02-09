const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentValue = "";
      display.value = "";
    }
    else if (value === "=") {
      try {
        currentValue = currentValue
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");
        display.value = eval(currentValue);
        currentValue = display.value;
      } catch {
        display.value = "Error";
      }
    }
    else if (value === "√") {
      display.value = Math.sqrt(display.value);
      currentValue = display.value;
    }
    else if (value === "%") {
      display.value = display.value / 100;
      currentValue = display.value;
    }
    else if (value === "+/−") {
      display.value = display.value * -1;
      currentValue = display.value;
    }
    else if (!isNaN(value) || value === ".") {
      currentValue += value;
      display.value = currentValue;
    }
    else if (["+", "−", "×", "÷"].includes(value)) {
      currentValue += value;
      display.value = currentValue;
    }
  });
});
