// Ratios

// Step 1
const firstRatio = document.getElementById("firstRatio");
const secondRatio = document.getElementById("secondRatio");
const stepOneButton = document.getElementById("stepOneButton");

// Step 2
const total = document.getElementById("total");
const stepTwoButton = document.getElementById("stepTwoButton");

// Step 3
const stepOneAnswer = document.getElementById("stepOneAnswer");
const answerForR1 = document.getElementById("answerForR1");
const answerForR2 = document.getElementById("answerForR2");

let answerOne;
let answerTwo;

stepOneButton.addEventListener("click", (e) => {
  stepOneAnswer.innerText =
    parseInt(firstRatio.value) + parseInt(secondRatio.value);
});

stepTwoButton.addEventListener("click", (e) => {
  answerOne =
    (parseInt(firstRatio.value) / stepOneAnswer.innerText) *
    parseInt(total.value);
  answerTwo =
    (parseInt(secondRatio.value) / stepOneAnswer.innerText) *
    parseInt(total.value);

  answerForR1.innerText = answerOne;
  answerForR2.innerText = answerTwo;
});

// Average Calculator

const firstAverageValue = document.getElementById("firstAverageValue");
const secondAverageValue = document.getElementById("secondAverageValue");
const averageButton = document.getElementById("averageButton");
const averageAnswer = document.getElementById("averageAnswer");

averageButton.addEventListener("click", (e) => {
  const answer =
    (parseInt(firstAverageValue.value) + parseInt(secondAverageValue.value)) /
    2;
  averageAnswer.innerText = answer + "%";
});

// Centemetre to metre converter

const centimetre = document.getElementById("centimetre");
const centimetreToMetreButton = document.getElementById(
  "centimetreToMetreButton"
);
const CMtoMAnswer = document.getElementById("CMtoMAnswer");

centimetreToMetreButton.addEventListener("click", () => {
  CMtoMAnswer.innerText = parseInt(centimetre.value) / 100;
});
