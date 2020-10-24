// Variables //
var quiz = document.querySelector("#quiz");
var timerCount = 100;
var timerEl = document.querySelector("#timer");
timerEl.textContent = "Time: " + timerCount;

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
var optionA = document.createElement("button");
optionA.setAttribute("class", "btn btn-info");
optionA.setAttribute("data-answer", "A");
var optionB = document.createElement("button");
optionB.setAttribute("class", "btn btn-info");
optionB.setAttribute("data-answer", "B");
var optionC = document.createElement("button");
optionC.setAttribute("class", "btn btn-info");
optionC.setAttribute("data-answer", "C");

// Function that sets up the quiz questions // 
function setQuestions() {
    quiz.appendChild(optionA);
    quiz.appendChild(optionB);
    quiz.appendChild(optionC);

    if (questionsPointer === questions.length){
        clearInterval(timer);
        alert("You are done with " + timerCount + " seconds left");
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

// Button or Answer Functions // 
optionA.addEventListener("click", function() {
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
}});
optionB.addEventListener("click", function() {
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
}});
optionC.addEventListener("click", function() {
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
    console.log("this is correct");
    questionsPointer++;
    setQuestions()
} else { 
    console.log("this is wrong");
    timerCount -=10;
}});

