
let rungTotal = 0;
let buffer = "0";
let prev;

const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }

  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = '0';
      rungTotal = 0;
      break;
    case "=":
      if (prev === null) {
        return;
      }
      flushoperation(parseFloat(buffer));
      prev = null;
      buffer = rungTotal;
      rungTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '+':
    case '-':
    case '×':
    case '÷':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === '0') {
    return;
  }
  const innn = parseInt(buffer);

  if (rungTotal === 0) {
    rungTotal = innn;
  } else {
    flushoperation(innn);
  }
  prev = symbol;
  buffer = '0';
}

function flushoperation(innn) {
  if (prev === '+') {
    rungTotal += innn;
  } else if (prev === '-') {
    rungTotal -= innn;
  } else if (prev === '×') {
    rungTotal *= innn;
  } else if (prev === '÷') {
    rungTotal /= innn;
  }
}

function handleNumber(handleNumber) {
  if (buffer === "0") {
    buffer = handleNumber;
  } else {
    buffer += handleNumber;
  }
}

function init() {
  document
    .querySelector('.calc-buttons')
    .addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}

init();



