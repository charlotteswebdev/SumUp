const num1 = document.getElementById("userNum1");
const num2 = document.getElementById("userNum2");
const submitButton = document.getElementById("submitButton");
const resultDisplay = document.getElementById("resultDisplay");

const audio = new Audio('components/calculator sound.wav');
audio.load();


submitButton.addEventListener("click", function () {
    if (isNaN(num1.value) || isNaN(num2.value) || num1.value === "" || num2.value === "") {
        alert("Please enter valid numeric values.");
        return;
    }

    // Convert input values to numbers
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);

    const total = value1 + value2;
const formatTotal = total % 1 === 0 ? total.toFixed(0) : total.toFixed(2);

resultDisplay.textContent = formatTotal;
    playSoundOnClick();
});

function playSound() {
    audio.play();
}

function playSoundOnClick() {
    audio.play();
    calculateSum();
}

function restartCalculator() {
    document.getElementById("userNum1").value = "";
    document.getElementById("userNum2").value = "";
    document.getElementById("resultDisplay").innerHTML = "";
    document.getElementById("userNum1").focus();
    playSoundOnClick();
}


function calculateSum() {
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    console.log('Sum:', sum);
}
