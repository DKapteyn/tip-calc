const billInput = document.getElementById("bill-input");
const numberPeople = document.getElementById("num-ppl-input");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyFive = document.getElementById("twentyfive");
const fifty = document.getElementById("fifty");
const custom = document.getElementById("custom");
const tipPerPerson = document.getElementById("tip-per-person-display");
const totalPerPerson = document.getElementById("total-per-person-display");
const reset = document.getElementById("reset");
const tipOptions = document.querySelectorAll(".tipoptions");
const strongCyan = "rgb(32, 162, 145)";
const veryDarkCyan = "rgb(0, 73, 77)";
const numberPeopleOuterBox = document.getElementById("bottom-display-left");
const noZeroText = document.getElementById("nozero");
let bill = 0;
let people = 0;
let tip = 0;

//Calc EventListeners
billInput.addEventListener("keyup", () => allPerPersonCalc());
numberPeople.addEventListener("keyup", () => {
  allPerPersonCalc(), checkforzero();
});
reset.addEventListener("click", () => {
  (tip = 0),
    (billInput.value = null),
    (numberPeople.value = null),
    (totalPerPerson.innerText = "$0.00"),
    (tipPerPerson.innerText = "$0.00"),
    (custom.value = null),
    resetColor(),
    (custom.style.backgroundColor = ""),
    checkforzero();
});

//Setting tip

five.addEventListener("click", () => {
  tip = 0.05;
  allPerPersonCalc();
});
ten.addEventListener("click", () => {
  tip = 0.1;
  allPerPersonCalc();
});
fifteen.addEventListener("click", () => {
  tip = 0.15;
  allPerPersonCalc();
});
twentyFive.addEventListener("click", () => {
  tip = 0.25;
  allPerPersonCalc();
});
fifty.addEventListener("click", () => {
  tip = 0.5;
  allPerPersonCalc();
});
custom.addEventListener("keyup", () => {
  tip = custom.value / 100;
  allPerPersonCalc();
});
custom.addEventListener("click", () => {
  tip = custom.value / 100;
  allPerPersonCalc();
});

//Total Calculations

function tipPerPersonCalc() {
  bill = parseInt(billInput.value);
  people = parseInt(numberPeople.value);
  return (tipPerPerson.innerText = "$" + ((bill * tip) / people).toFixed(2));
}

function totalPerPersonCalc() {
  bill = parseInt(billInput.value);
  people = parseInt(numberPeople.value);
  return (totalPerPerson.innerText =
    "$" + ((bill + bill * tip) / people).toFixed(2));
}

function allPerPersonCalc() {
  if (billInput.value != 0 && numberPeople.value != 0 && tip != 0) {
    totalPerPersonCalc();
    tipPerPersonCalc();
    resetColor();
  }
}

tipOptions.forEach((tip) =>
  tip.addEventListener("click", () => tipColorClear())
);

tipOptions.forEach((tip) =>
  tip.addEventListener("click", () => {
    (tip.style.backgroundColor = strongCyan), (tip.style.color = veryDarkCyan);
  })
);

//Color Changes

function resetColor() {
  if (totalPerPerson.innerText != "$0.00") {
    (reset.style.backgroundColor = strongCyan),
      (reset.style.filter = "blur(0px)");
  } else if (totalPerPerson.innerText == "$0.00") {
    tipColorClear();
    reset.style.backgroundColor = "";
  }
}

function checkforzero() {
  if (parseInt(numberPeople.value) == 0) {
    numberPeopleOuterBox.style.boxShadow = "0px 0px 4px 2px red";
    noZeroText.style.display = "inline";
  } else {
    numberPeopleOuterBox.style.boxShadow = "";
    noZeroText.style.display = "";
  }
}
function tipColorClear() {
  tipOptions.forEach((t) => {
    (t.style.backgroundColor = ""), (t.style.color = "");
  });

  if (custom.value != 0) {
    custom.style.color = "white";
    custom.style.backgroundColor = veryDarkCyan;
  } else {
    custom.style.backgroundColor = "";
    custom.style.color = "";
  }
}
custom.addEventListener("focusin", () => {
  tipColorClear();
});

custom.addEventListener("focusout", () => {
  if (custom.value != 0) {
    custom.style.backgroundColor = strongCyan;
    custom.style.color = veryDarkCyan;
  } else {
    custom.style.backgroundColor = "";
    custom.style.color = "";
  }
});
