let tipPer = 0;
let totalPer = 0;
let bill = 0;
let tip = 0;
let num = 0;

let resetButton = document.getElementById("reset");
let tipPerAmt = document.getElementById("tip");
let totalPerAmt = document.getElementById("total");
let billAmt = document.getElementById("bill");
let numAmt = document.getElementById("num");

resetButton.addEventListener("click", function() {
    tipPer = 0;
    totalPer = 0;
    tipPerAmt.innerHTML = "$" + tipPer.toFixed(2);
    totalPerAmt.innerHTML = "$" + totalPer.toFixed(2);
    billAmt.value = "";
    numAmt.value = "";
  });


billAmt.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    bill = Number(billAmt.value);
    tipPerAmt.innerHTML = "$" + bill.toFixed(2);
    totalPerAmt.innerHTML = "$" + bill.toFixed(2);
    }
 });

 numAmt.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        num = numAmt.value;
        if ((bill != 0) && (num != 0)){
            calculatePer();
        }
        }
     });

function calculatePer(){
    totalPer = bill / num;
    totalPerAmt.innerHTML = "$" + totalPer.toFixed(2);
}