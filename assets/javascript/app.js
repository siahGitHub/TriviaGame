$(document).ready(function () {

var triviaArray = [
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which of the following sports is not part of the triathlon?",
    "correct_answer": "Horse-Riding",
    "incorrect_answers": [
    "Cycling",
    "Swimming",
    "Running"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In golf, what name is given to a hole score of two under par?",
    "correct_answer": "Eagle",
    "incorrect_answers": [
    "Birdie",
    "Bogey",
    "Albatross"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "How many soccer players should be on the field at the same time?",
    "correct_answer": "22",
    "incorrect_answers": [
    "20",
    "24",
    "26"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In baseball, how many fouls are an out?",
    "correct_answer": "0",
    "incorrect_answers": [
    "5",
    "3",
    "2"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which country is hosting the 2018 FIFA World Cup?",
    "correct_answer": "Russia",
    "incorrect_answers": [
    "Germany",
    "United States",
    "Saudi Arabia"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which driver has been the Formula 1 world champion for a record 7 times?",
    "correct_answer": "Michael Schumacher",
    "incorrect_answers": [
    "Ayrton Senna",
    "Fernando Alonso",
    "Jim Clark"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "How many points did LeBron James score in his first NBA game?",
    "correct_answer": "25",
    "incorrect_answers": [
    "19",
    "69",
    "41"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What team won the 2016 MLS Cup?",
    "correct_answer": "Seattle Sounders",
    "incorrect_answers": [
    "Colorado Rapids",
    "Toronto FC",
    "Montreal Impact"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What year did the New Orleans Saints win the Super Bowl?",
    "correct_answer": "2009",
    "incorrect_answers": [
    "2008",
    "2010",
    "2011"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which team has won the most Stanley Cups in the NHL?",
    "correct_answer": "Montreal Canadians",
    "incorrect_answers": [
    "Chicago Blackhawks",
    "Toronto Maple Leafs",
    "Detroit Red Wings"
    ]
}
];

function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var timeUp = function(){
    $("#timer").text("times Up");
  };

var counter = 25;

function timer(){
    //for (var counter = 25; counter)
 if(counter < 1){
    $("#timer").text("times Up");
 }
 else{
     counter--;
     $("#timer").text(counter);
 }
}

function buildQandA(triviaObj){

    counter =25;
    $("#question1").text(triviaObj.question);
    pos = getRandNum(0,triviaObj.incorrect_answers.length);
    console.log(pos);
    triviaObj.incorrect_answers.splice(pos,0,triviaObj.correct_answer);
    //triviaObj.incorrect_answers.push(triviaObj.correct_answer);
    sortedChoices = triviaObj.incorrect_answers;
    console.log(sortedChoices);
    /*for(var i =0; i<triviaObj.incorrect_answers.length; i++){*/
    for(var i =0; i<sortedChoices.length; i++){
        var myDiv = $("<div>");
        var myInput = $("<input>");
        var myLabel = $("<label>");
        myDiv.addClass("form-check radio-green");
        myInput.addClass("form-check-input");
        myInput.attr("name","group1");
        myInput.attr("type","radio");
        myInput.attr("id","radio"+i+1);
        myLabel.addClass("form-check-label");
        myLabel.attr("id","opt"+i+1);
        myInput.attr("for","radio");
        myInput.attr("choice-value",sortedChoices[i]);
        myLabel.text(sortedChoices[i]);
        $("#choices").append(myDiv).append(myInput).append(myLabel);
    }
    timer();
    setTimeout(timeUp, 2000);
}
/*
$("#question1").text(triviaArray[0].question);
$("#opt1").text(triviaArray[0].incorrect_answers[0]);
$("#opt2").text(triviaArray[0].incorrect_answers[1]);
$("#opt3").text(triviaArray[0].incorrect_answers[2]);
$("#opt4").text(triviaArray[0].correct_answer);
*/

var randTrivia = getRandNum(0,9);
var rightChoice = triviaArray[randTrivia].correct_answer;
buildQandA(triviaArray[randTrivia]);


$("input").on("click", function (event) {
    event.preventDefault();
    console.log("before choice");
    var value = $(this).attr("choice-value")
    console.log("after choice "+ value);
    if (value === rightChoice){
        alert("You win");
    }
    else{
        alert("You loose");
    }
});

});