const displayResult = document.querySelector(".display-result");
const buttons = document.querySelector(".buttons");
const operations = ["%", "+", "*", "-", "/", "="];
let result = "";

//Define function with argument btnValue
const calculate = (btnValue) => {
  displayResult.focus();

  if (btnValue === "=" && result !== "") {
    // If result has %, replace with /100
    result = eval(result.replace("%", "/100"));
  } else if (btnValue === "AC") {
    result = "";
  } else if (btnValue === "C") {
    //remove the last character with slice(0, -1)
    result = result.toString().slice(0, -1);
    
  } else {
    if (result === "" && operations.includes(btnValue)) return;
    result += btnValue;
  }
  displayResult.innerHTML = result;
};

// add event Listener to button and if match with "button", call calculate()
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    calculate(e.target.dataset.value);
  }
});
