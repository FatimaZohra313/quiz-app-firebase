var questions = [
    {
        question: "Indepedence Day of Pakistan",
        options: ["14 august", "15 august", "16 august"],
        correctAnswer : "14 august"
    },
    {
        question:"CSS stands for",
        options: ["Cascading Style Sheet","CSS", "html"],
        correctAnswer: "Cascading Style Sheet"

    },
    {
        question: "JS stands for",
        options:["Java Script","JS","CSS"],
        correctAnswer: "Java Script"
    },
    {
        question:"JS is case sensitive",
        options:["True","False"],
        correctAnswer:"True"
    },
    {
        question: "HTML stand for",
        options :["Hyper Text Markup Language","Java Script","Cascading Style Sheet"],
        correctAnswer:"Hyper Text Markup Language"
    }

];

var quest= document.getElementById("quest");
var currentQuestion= document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;

function Proceed(){
    quest.innerHTML= questions[indexNumber].question;
    answerParent.innerHTML= "";

    for (var i = 0 ; i < questions[indexNumber].options.length ; i++){
        document.getElementById("answerParent").innerHTML += `<div class="col-md-6 py-2">
        <button onclick= "checkQuestion(this,'${questions[indexNumber].correctAnswer}')" class="btn-dark text-white btn w-100 ">${questions[indexNumber].options[i]}</button></div>`
    }
    totalQuestion.innerHTML = questions.length;
    currentQuestion.innerHTML = indexNumber + 1;
}

Proceed();        //  main

function nextQuestion(){
    if (indexNumber  == questions.length - 1){
        alert("Quiz Completed");
    }
    else{
        indexNumber++;
        Proceed();
    }
}

function checkQuestion(elem, correctOption){
    var userOption = elem.innerHTML;
    if (userOption == correctOption){
        score = score + 1;     
        
    }
    else{
        alert("Your Answer is Wrong");
    }
    
    console.log(score);
    var allOptionBtns = answerParent.getElementsByTagName("BUTTON");
    for(var i = 0 ; i < allOptionBtns.length; i++){
         allOptionBtns[i].disabled=true;
        if (allOptionBtns[i].innerHTML == correctOption){
            allOptionBtns[i].className += "bg-dark";
        }
        else{
            allOptionBtns[i].className += "bg-secondary";
        }

        
     
    
        
    }
}
    
    

