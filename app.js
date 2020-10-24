// Variables set //
var quiz = document.querySelector("#quiz");
var timerCount = 100;
var timerEl = document.querySelector("#timer");
timerEl.textContent = "Time: " + timerCount;

// Starting Elements before Quiz //
var questionPrompt = document.createElement("h1");
questionPrompt.textContent = "Coding Quiz Challenge";
quiz.appendChild(questionPrompt);

var startBtn = document.createElement("button");
startBtn.setAttribute("class", "btn btn-info");
startBtn.textContent = "Start";
quiz.appendChild(startBtn);

var questions = [
    {
        q: "what is your name?", 
        choices: ["Kieran", "Kiki", "Karen"], 
        a: "A"},
    {
        q: "where is home?", 
        choices: ["San Francisco", "Oakland", "Los Angeles"], 
        a: "A"},
];
var questionsPointer = 0;
var question = document.querySelector("#question");
var optionA = document.querySelector("#optionA");


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
    
}



)