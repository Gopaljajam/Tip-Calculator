/// selecting the inputs btns and show calculation
const billAmount = document.querySelector("#bill-amount");
const inputNOP = document.querySelector("#input-nop");
const tipPercent = document.querySelectorAll(".tip-per");
const manualTip = document.querySelector('#manual-tip');
const nan = document.querySelector('.nan');
const tipAmountShow = document.querySelector("#tip-amount");
const totalPeopleShow = document.querySelector("#total-peo");
const resetBtn = document.querySelector("#reset-btn");


tipPercent.forEach((tipPer) => {
    tipPer.addEventListener("click", tipPerFunc);
});

manualTip.addEventListener("input", tipPerFunc);

resetBtn.addEventListener('click', () => {
    tipAmountShow.innerHTML = "0.00";
    totalPeopleShow.innerHTML = "0.00";
    billAmount.value = null;
    inputNOP.value = null;
})

function tipPerFunc() {
    this.classList.toggle("active-class")
    if (this.value) {
        let bill = billAmount.value;
        const totalTip = bill * this.value / 100;
        inputNOP.addEventListener("input", () => {
            if (inputNOP.value == 0 || inputNOP.value == null) {
                tipAmountShow.innerHTML = "0.00";
            } else if (inputNOP.value) {
                const tip = totalTip / inputNOP.value;
                tipAmountShow.innerHTML = tip.toString().split("").splice(0, 4).join("");
            }
            if (inputNOP.value == 0 || inputNOP.value == null) {
                totalPeopleShow.innerHTML = "0.00";
            } else if (inputNOP.value) {
                const totalPer = bill / inputNOP.value;
                totalPeopleShow.innerHTML = totalPer.toString().split("").splice(0, 4).join("")
            }
        });
    }
}
