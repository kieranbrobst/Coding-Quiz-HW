// Main Variables //
var quiz = document.querySelector("#quiz");
var timerCount = 100;
var timerEl = document.querySelector("#timer");
timerEl.textContent = "Time: " + timerCount;
var option1Div = document.querySelector("#option1");
var option2Div = document.querySelector("#option2");
var option3Div = document.querySelector("#option3");

// var answerDiv = document.querySelector("#answer");
// var answerP = document.createElement("p");
// answerDiv.appendChild(answerP);

// Score //
var score = localStorage.getItem("score");


// Question and Start Prompt //
var questionPrompt = document.createElement("h1");
questionPrompt.textContent = "Coding Quiz Challenge";
quiz.appendChild(questionPrompt);

// Start Button //
var startBtn = document.createElement("button");
startBtn.setAttribute("class", "btn btn-info");
startBtn.textContent = "Start";
option1Div.appendChild(startBtn);

// Quiz Questions //
var questions = [
    {
        q: "Inside which HTML element do we put the JavaScript?", 
        choices: ["<js>", "<script>", "<javascript>"], 
        a: "B"},
    {
        q: "Where is the correct place to insert a JavaScript?", 
        choices: ["The <head> section", "The <body> section", "Both the <head> and the <body>"], 
        a: "B"},
    {
        q: "The external JavaScript file must contain the <script> tag.", 
        choices: ["False", "True", "Neither"], 
        a: "A"},
    {
        q: "How do you create a function in JavaScript?", 
        choices: ["function:myFunction()", "Function=myfunction()", "function myFunction()"], 
        a: "C"},
    {
        q: "Which below doesn't belong?", 
        choices: ["Programming", "Booleans", "My Sanity"], 
        a: "C"},
];

var questionsPointer = 0;

// Quiz Option Buttons //
var optionA = document.createElement("button");
optionA.setAttribute("class", "btn btn-info");
optionA.setAttribute("data-answer", "A");
var optionB = document.createElement("button");
optionB.setAttribute("class", "btn btn-info");
optionB.setAttribute("data-answer", "B");
var optionC = document.createElement("button");
optionC.setAttribute("class", "btn btn-info");
optionC.setAttribute("data-answer", "C");

// Clear & Start Over Buttons //
var clearBtn = document.createElement("button");
clearBtn.setAttribute("class", "btn btn-light");
var startOver = document.createElement("button");
clearBtn.setAttribute("class", "btn btn-danger");


// Function for finishing the quiz or running out of time //
function quizOver() {
    questionPrompt.textContent = "All done with " + timerCount + " seconds left. Your score = " + score + ".";
    optionA.style.display = "none";
    optionB.style.display = "none";
    optionC.style.display = "none";
    clearInterval(timer);
}

// Function that sets up the quiz questions // 
function setQuestions() {
    option1Div.appendChild(optionA);
    option2Div.appendChild(optionB);
    option3Div.appendChild(optionC);

    if (questionsPointer === questions.length || timerCount === 0){
        clearInterval(timer);
        quizOver();
        return;
    }
    questionPrompt.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0];
    optionB.textContent = questions[questionsPointer].choices[1];
    optionC.textContent = questions[questionsPointer].choices[2];
}

// Event Listener Starts the Quiz //
startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    var timer = window.setInterval ( function(){
        timerCount--;
        timerEl.textContent = "Time: " + timerCount;
        if (timerCount === 0){
            clearInterval(timer)
        }
    },1000);
    setQuestions();
    }
);

// Button or Answer Event Listeners // 
optionA.addEventListener("click", function() {
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    score++;
    localStorage.setItem("score", score);
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
    score--;
    localStorage.setItem("score", score);
}});
optionB.addEventListener("click", function() {
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    score++;
    localStorage.setItem("score", score);
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
    score--;
    localStorage.setItem("score", score);
}});
optionC.addEventListener("click", function() {
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    score++;
    localStorage.setItem("score", score);
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
    score--;
    localStorage.setItem("score", score);
}});

