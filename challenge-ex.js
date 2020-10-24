var timerCount = 100;
var timerEl = document.querySelector("#timer");

timerEl.textContent = "Time: " + timerCount;

var timer = window.setInterval ( function(){
    timerCount--;
    timerEl.textContent = "Time: " + timerCount;
    if (timerCount === 0){
        clearInterval(timer)
    }
},1000);

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
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");

function setQuestions() {
    if (questionsPointer === questions.length){
        clearInterval(timer);
        alert("You are done with " + timerCount + " seconds left");
        return;
    }
    question.textContent = questions[questionsPointer].q
    optionA.textContent = questions[questionsPointer].choices[0];
    optionB.textContent = questions[questionsPointer].choices[1];
    optionC.textContent = questions[questionsPointer].choices[2];

}

setQuestions();

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