let tipPer = 0;
let totalPer = 0;
let bill = 0;
let tip = 0;
let num = 1; 

let resetButton = document.getElementById("reset");
let tipPerAmt = document.getElementById("tip");
let totalPerAmt = document.getElementById("total");
let billAmt = document.getElementById("bill");
let numAmt = document.getElementById("num");
let tipButtons = document.querySelectorAll(".tip-buttons button");

function toggleResetButton() {
  if (bill > 0 || tip > 0 || num > 1) {
    resetButton.disabled = false;
    resetButton.classList.remove("disabled");
    resetButton.classList.add("enabled");
  } else {
    resetButton.disabled = true;
    resetButton.classList.remove("enabled");
    resetButton.classList.add("disabled");
  }
}

resetButton.addEventListener("click", function () {
  tipPer = 0;
  totalPer = 0;
  bill = 0;
  tip = 0;
  num = 1;
  tipPerAmt.innerHTML = "$0.00";
  totalPerAmt.innerHTML = "$0.00";
  billAmt.value = "";
  numAmt.value = "";
  toggleResetButton();
});

function calculatePerPerson() {
  if (num > 0) {
    tipPer = (bill * tip) / 100 / num;
    totalPer = (bill / num) + tipPer;
    tipPerAmt.innerHTML = "$" + tipPer.toFixed(2);
    totalPerAmt.innerHTML = "$" + totalPer.toFixed(2);
    toggleResetButton();
  }
}

tipButtons.forEach(button => {
  button.addEventListener("click", function () {
    tip = button.textContent.includes("%") ? parseInt(button.textContent) : 0;
    calculatePerPerson();
  });
});

billAmt.addEventListener("input", function () {
  bill = parseFloat(billAmt.value) || 0;
  calculatePerPerson();
});

numAmt.addEventListener("input", function () {
  num = parseInt(numAmt.value) || 1; 
  calculatePerPerson();
});

let customTipInput = document.createElement("input");
customTipInput.setAttribute("type", "number");
customTipInput.setAttribute("placeholder", "Custom");
customTipInput.classList.add("custom-tip-input");
tipButtons[5].replaceWith(customTipInput); 

customTipInput.addEventListener("input", function () {
  tip = parseFloat(customTipInput.value) || 0;
  calculatePerPerson();
});
