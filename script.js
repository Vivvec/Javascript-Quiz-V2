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
// start 
function startGame () {

    document.getElementById("intro").style.display = "none"
    document.getElementById("questions").style.display = "block"
    time = 75;
    question_number = 0;
    load_question(question_number)

// For loop

for (var i = 0; i < elements.length; i++) {

    elements[i].addEventListener("click", answer_question);
}

}

// load Q 
function load_question(question_number) {
document.getElementById("question-text").innerHTML = quiz[question_number]["question"]
document.getElementById("option-01").innerHTML = quiz[question_number]["options"][0]
document.getElementById("option-02").innerHTML = quiz[question_number]["options"][1]
document.getElementById("option-03").innerHTML = quiz[question_number]["options"][2]
document.getElementById("option-04").innerHTML = quiz[question_number]["options"][3]
}

// timer

document.getElementById("start").addEventListener("click", function(){
    timer = setInterval(function function1(){
    
    document.getElementById("time").innerHTML = time + 
    "&nbsp"+"seconds remaining";
    time -=1;
    if(time <= 0){
        clearInterval(time);
        document.getElementById("time").innerHTML = "Game Over"
        document.getElementById("questions").style.display = "none"
    };
    }, 1000);

});
  

// answers

function answer_question (event) {

	answered = event.target.innerHTML
    
    if(answered == quiz[question_number]["answer"]) {
       
        time += 1 

	} else {

        time -= 10
    }
    question_number += 1
    if(question_number <= 4 ) { 
        load_question(question_number)
       } else {

    // load input initials page 
        document.getElementById("questions").style.display = "none"
   
        document.getElementById("time").style.display = "none"
   
        document.getElementById("log").style.display = "block"
   
        document.getElementById("highScore").innerHTML = time
       }     
       
}
function saveGame() {

    // scores

    document.getElementById("log").style.display = "none"

    document.getElementById("final").style.display = "block"

    // HS and Initial

    highscore = document.getElementById("highScore").innerHTML 
    

    initials = document.getElementById("initials").value

    if (initials <= 0){
        window.alert("Enter your initials")
        return;
    }
    let logScores = JSON.parse(localStorage.getItem("yourScores")) || [];
   
// push to array and save
    let numbers = {Initials: initials, Score: highscore} 
     logScores.push(numbers)
    console.log(logScores)
    setScore(logScores)
    localStorage.setItem("yourScores", JSON.stringify(logScores))
  
};
// display scores
    function setScore(logScores) {

    for (var i = 0; i < logScores.length; i++) {
        var logScore = document.getElementById("finalLog")
        var ulScores = document.createElement("li")
        
        ulScores.setAttribute('class', 'yourScores')
        ulScores.textContent = logScores[i].Score

        finalLog.appendChild(ulScores)

        var ulInitials = document.createElement('li')
        
        ulInitials.setAttribute('class', 'yourInitials')
        ulInitials.textContent = logScores[i].Initials;

        finalLog.appendChild(ulInitials)

        
    };
        
    };
 // bring up HS

function highscores() {

    document.getElementById("intro").style.display = "none"

    document.getElementById("finale").style.display = "block"

    var getScore = JSON.parse(localStorage.getItem("yourScores"));

    setScore(getScore)
    console.log(getScore)   
};
  

// reload

var reload = function() {
    location.href = "";
};

var tryAgain = function() {
location.href = "";
} 
// event listener
start.addEventListener("click", startGame)

save.addEventListener("click", saveGame)

highscorePage.addEventListener("click", highscores)

playAgain.addEventListener("click", reload)

again.addEventListener("click", reload)