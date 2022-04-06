//
//Declaring DOM variables
//
const tip5 = $(".5");
const tip10 = $(".10");
const tip15 = $(".15");
const tip25 = $(".25");
const tip50 = $(".50");
const tipcustom = $("#custom");
const tips = [tip5, tip10, tip15, tip25, tip50, tipcustom];
const resetBtn = $(".reset");
const buttons = document.getElementsByClassName("box");
const customButton = $(".custom-button");

let customPercent = 0;

//
//Custom Percent DIV Logic
//
tipcustom.on("click", function() {
  document.querySelector(".custom").style.visibility = "visible"
})
customButton.on("click", function() {
  document.querySelector(".custom").style.visibility = "hidden"
  customPercent = document.querySelector(".custom-input").value;
  customTip(customPercent);
})

//
//Reset Button Logic
//
resetBtn.on("click", function() {
  $("#tip-output-display").text("$0.00");
  $("#total-amount-display").text("$0.00");
  document.getElementById("bill").value = "";
  document.querySelector(".people-input").value = "1";
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("clicked") === true) {
      buttons[i].classList.remove("clicked");
    }


  }
})

//
//Calculating Custom Tip if selected
//
function customTip(num) {
  let bill = document.getElementById("bill").value;
  let peopleAmount = document.querySelector(".people-input").value;
  let tipPercentSelected = num / 100;
  let tipAmount = (bill * tipPercentSelected) / peopleAmount;
  tipAmount = Math.round((tipAmount + Number.EPSILON) * 100) / 100;
  let totalAmount = (parseInt(bill) + (tipAmount * parseInt(peopleAmount))) / parseInt(peopleAmount);
  totalAmount = Math.round((totalAmount + Number.EPSILON) * 100) / 100;

  $("#tip-output-display").text("$" + tipAmount);
  if (bill == 0) {
    return;
  } else {
    $("#total-amount-display").text("$" + totalAmount);
  }

}

//
//Main Logic for Tip Buttons
//
for (let i = 0; i < tips.length; i++) {
  tips[i].on("click", function() {
    let bill = document.getElementById("bill").value;
    let peopleAmount = document.querySelector(".people-input").value;
    let tipPercentSelected = this.value / 100;

    if (customPercent > 0) {
      tipPercentSelected = customPercent / 100;
    }

    let tipAmount = (bill * tipPercentSelected) / peopleAmount;
    tipAmount = Math.round((tipAmount + Number.EPSILON) * 100) / 100;
    let totalAmount = (parseInt(bill) + (tipAmount * parseInt(peopleAmount))) / parseInt(peopleAmount);
    totalAmount = Math.round((totalAmount + Number.EPSILON) * 100) / 100;

    $("#tip-output-display").text("$" + tipAmount);
    if (bill == 0) {
      return;
    } else {
      $("#total-amount-display").text("$" + totalAmount);
    }
    toggleClass(this);
  })
}

//
//Toggle between which button is selected
//
function toggleClass(el) {
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("clicked") === true) {
      buttons[i].classList.remove("clicked");
    }
  }
  el.classList.toggle("clicked");
}
