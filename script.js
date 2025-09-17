let display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  // Clears only the current entry (last number)
  let text = display.innerText;
  let match = text.match(/.*[\+\-\*\/]/);
  if (match) {
    display.innerText = match[0];
  } else {
    display.innerText = "0";
  }
}

function allClear() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "" || display.innerText === "-") {
    display.innerText = "0";
  }
}

function calculateResult() {
  try {
    let expression = display.innerText.replace(/%/g, "/100");
    display.innerText = Function('"use strict"; return (' + expression + ')')();
  } catch {
    display.innerText = "Error";
  }
}
