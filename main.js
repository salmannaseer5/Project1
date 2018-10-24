console.log("Welcome to click on Play to start");
const geographyQuestion = [
  {
    question: "What is the capital of United States of America?",
    answers: {
      a: "New York",
      b: "Chicago",
      c: "Washington DC",
      d: "Boston"
    },
    correctAnswer: "c"
  },

  {
    question: "What are motorways called in France?",
    answers: {
      a: "Autoroutes",
      b: "AutoBahn",
      c: "Autostrada",
      d: "AutoPista"
    },
    correctAnswer: "a"
  },

  {
    question: "Which of these is the deepest?",
    answers: {
      a: "The Mponeng gold mine",
      b: "Lake Baikal",
      c: "Mariana Trench",
      d: "Krubera cave"
    },
    correctAnswer: "c"
  },

  {
    question: "Which tiny island country did Columbus discover on a Sunday?",
    answers: {
      a: "Dominica",
      b: "Montserrat",
      c: "Cuba",
      d: "Antigua"
    },
    correctAnswer: "a"
  },

  {
    question:
      "What North American mountain range is an apt anagram for 'o man, ski country'?",
    answers: {
      a: "Adirondack",
      b: "Cascades",
      c: "Rocky Mountains",
      d: "Appalachians"
    },
    correctAnswer: "c"
  },

  {
    question: "What is the highest point of Switzerland?",
    answers: {
      a: "Mont Blanc",
      b: "Zumsteinsptize",
      c: "Matterhorn",
      d: "Dufoursptize"
    },
    correctAnswer: "d"
  },

  {
    question: "Where is Romania?",
    answers: {
      a: "Europe",
      b: "Asia",
      c: "Africa",
      d: "South America"
    },
    correctAnswer: "a"
  },

  {
    question: "What is the Capital of Canada?",
    answers: {
      a: "Vancouver",
      b: "Toronto",
      c: "Ottawa",
      d: "Montreal"
    },
    correctAnswer: b
  },

  {
    question:
      "I'm standing in Red Square admiring the St. Basil's Cathedral in Europe's most populated city. Where am I ?",
    answers: {
      a: "Moscow",
      b: "Rome",
      c: "Cairo",
      d: "Paris"
    },
    correctAnswer: "a"
  }
];
// adding random() to select random question from array 

var randomQuestion =
  geographyQuestion[Math.floor(Math.random() * geographyQuestion.length)];

console.log(randomQuestion);

randomQuestion.question;

//make div tag inside quizbox,
//container for answers
//four more div for answers
//query the dom, insert the question in box
//query the dom, insert the ansers in box
//add quotes to html

let newQuestion = document.getElementById("questionB");
newQuestion.innerHTML = randomQuestion.question;

// element.innerHTML = htmlString;

// var randomAnswer =
// geographyQuestion[Math.floor(Math.random() * geographyQuestion.length)];
// randomAnswer.answers;

let newAnswera = document.getElementById("a");
newAnswera.innerHTML = randomQuestion.answers.a;
let newAnswerb = document.getElementById("b");
newAnswerb.innerHTML = randomQuestion.answers.b;
let newAnswerc = document.getElementById("c");
newAnswerc.innerHTML = randomQuestion.answers.c;
let newAnswerd = document.getElementById("d");
newAnswerd.innerHTML = randomQuestion.answers.d;

// add click event on each answers 

const aButton = document.querySelector('.answerA')

aButton.addEventListener('click', function () {
  console.log("button a was clicked")
})

const bButton = document.querySelector('.answerB')

bButton.addEventListener('click', function () {
  console.log("button b was clicked")
})

const cButton = document.querySelector('.answerC')

cButton.addEventListener('click', function () {
  console.log("button c was clicked")
})

const dButton = document.querySelector('.answerD')

dButton.addEventListener('click', function () {
  console.log("button a was clicked")
})

// add a function that cpmpares correct answer and user click on event listener 
function rightAnswer(){

}

//add event listener
//to object if its right or wrong 
// var a = document.getElementById("")
// var x = document.getElementById("myBtn");
// if (x.addEventListener) {
//     x.addEventListener("click", myFunction);
// } else if (x.attachEvent) {
//     x.attachEvent("onclick", myFunction);
// }

// function myFunction() {
//     alert("Hello World!");
// }