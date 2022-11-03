var startBtn = document.getElementById("startButton");
var introPage = document.getElementById("intro");
var questionAreaElement = document.getElementById("question-area");

startBtn.addEventListener("click", startGame);

function startGame() {
  console.log("started");
  startBtn.classList.add("hide");
  introPage.classList.add("hide");
  questionAreaElement.classList.remove("hide");
}

function goToNextQuestion() {}

function clickOnAnswer() {}

// var questions = [
//   {
//     question: "what is my name",
//     choices: ["matt", "dyland", "bob", "sal"],
//     answer: "matt",
//   },
//   {
//     question: "what is my name",
//     choices: ["matt", "dyland", "bob", "sal"],
//     answer: "matt",
//   },
// ];

// var index = 0;

// for (var i = 0; i < questions.length; i++) {}
// questions[0].question = document.getElementById("word");
