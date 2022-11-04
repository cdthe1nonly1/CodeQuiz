var startBtn = document.getElementById("startButton");
var introPage = document.getElementById("intro");
var questionAreaElement = document.getElementById("question-area");

var ans0CLick = document.getElementById("ans0");
var ans1CLick = document.getElementById("ans1");
var ans2CLick = document.getElementById("ans2");
var ans3CLick = document.getElementById("ans3");

var questionTracker = 0;

// Array of questions to put into question area.
var questionsArr = [
  {
    question: "History: On what day was Pearl Harbor attacked?",
    choices: [
      "December 7, 1941",
      "June 22, 1941",
      "October 6, 1939",
      "September 11, 2001",
    ],
    answer: "December 7, 1941",
  },
  {
    question: "Science: What is the 6th planet in our solar system?",
    choices: ["Mars", "Jupiter", "Saturn", "Venus"],
    answer: "Jupiter",
  },
  {
    question: "English: ___ is the study of the meaning of languages",
    choices: ["Phonetics", "Syntax", "Semantics", "Linquistics"],
    answer: "Semantics",
  },
  {
    question: "Social Studies: What do meterologists study?",
    choices: ["Humans", "Animals", "Chemistry", "The Weather"],
    answer: "The Weather",
  },
];
//create a start button event listener
startBtn.addEventListener("click", startGame);

// event listner for answers
ans0CLick.addEventListener("click", clickOnAnswer);
ans1CLick.addEventListener("click", clickOnAnswer);
ans2CLick.addEventListener("click", clickOnAnswer);
ans3CLick.addEventListener("click", clickOnAnswer);

// this starts the game
function startGame() {
  startBtn.classList.add("hide");
  introPage.classList.add("hide");
  questionAreaElement.classList.remove("hide");
  goToNextQuestion();
}

function goToNextQuestion() {
  var title = document.getElementById("questions");
  var answerOne = document.getElementById("ans0");
  var answerTwo = document.getElementById("ans1");
  var answerThree = document.getElementById("ans2");
  var answerFour = document.getElementById("ans3");

  var currentQuestion = questionsArr[questionTracker];
  title.textContent = currentQuestion.question;
  answerOne.textContent = currentQuestion.choices[0];
  answerTwo.textContent = currentQuestion.choices[1];
  answerThree.textContent = currentQuestion.choices[2];
  answerFour.textContent = currentQuestion.choices[3];
}

function clickOnAnswer() {
  console.log("test click on answer function");
}

//function setNextQuestion() {}

// var index = 0;

// for (var i = 0; i < questions.length; i++) {}
// questions[0].question = document.getElementById("word");
