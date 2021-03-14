var content = document.querySelector(".card");
var question = document.querySelector(".banner");
var start = document.querySelector(".start");
var elements = document.getElementsByClassName("answer");
var save = document.querySelector(".save");
var highscorePage = document.querySelector(".highscores");
var playAgain = document.querySelector(".restart");
var again = document.querySelector(".try");
var log = document.querySelector(".finalLog");

// var list
var question, 
answer, 
options, 
answered,
highscore, 
initials, 
storeGame, 
loadScore, 
loadInitials, 
question_number,
timer

// let array Q & A
let quiz = [
    {
        question: "Commonly used data types DO Not Include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with ______.",
        options: ["Quotes", "Curly Brackets", "Square Brackets", "Parenthesis"],
        answer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For loops", "Console.log"],
        answer: "Console.log"
    },
];