const number = document.querySelector("#number");
const buttonsCont = document.querySelector("#buttons");
const clear = document.querySelector("#clear-btn");

const buttons = buttonsCont.querySelectorAll("button");

console.log(number, buttons, clear);
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = number.textContent * 1;
    const id = btn.id.split("-");
    const btnVal = id[1] * 1;
    // console.log(id);
    const newVal =
      id[0] === "minus"
        ? value - btnVal < 0
          ? 0
          : value - btnVal
        : value + btnVal;

    number.textContent = newVal;
  });
});

clear.addEventListener("click", () => {
  number.textContent = 0;
});

const additionInput = document.querySelector("#addition-input");
const sum = document.querySelector("#sum");
const params = document.querySelector("#params");

additionInput.addEventListener("input", () => {
  console.log(additionInput.value);
  let values = additionInput.value.split(" ");
  values = values.filter((el) => !!el && el * 1).map((el) => el * 1);
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  params.textContent = values.join(" + ");
  sum.textContent = total;
});

document.addEventListener("keypress", (e) => {
  if (e.key !== "r") return;
  additionInput.value = "";
  params.textContent = "";
  sum.textContent = "";
});
