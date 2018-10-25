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
    correctAnswer:  "Washington DC"
  },

  {
    question: "What are motorways called in France?",
    answers: {
      a: "Autoroutes",
      b: "AutoBahn",
      c: "Autostrada",
      d: "AutoPista"
    },
    correctAnswer: "Autoroutes"
  },

  {
    question: "Which of these is the deepest?",
    answers: {
      a: "The Mponeng gold mine",
      b: "Lake Baikal",
      c: "Mariana Trench",
      d: "Krubera cave"
    },
    correctAnswer: "Mariana Trench"
  },

  {
    question: "Which tiny island country did Columbus discover on a Sunday?",
    answers: {
      a: "Dominica",
      b: "Montserrat",
      c: "Cuba",
      d: "Antigua"
    },
    correctAnswer: "Dominica"
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
    correctAnswer: "Rocky Mountains"
  },

  {
    question: "What is the highest point of Switzerland?",
    answers: {
      a: "Mont Blanc",
      b: "Zumsteinsptize",
      c: "Matterhorn",
      d: "Dufoursptize"
    },
    correctAnswer: "Dufoursptize"
  },

  {
    question: "Where is Romania?",
    answers: {
      a: "Europe",
      b: "Asia",
      c: "Africa",
      d: "South America"
    },
    correctAnswer: "Europe"
  },

  {
    question: "What is the Capital of Canada?",
    answers: {
      a: "Vancouver",
      b: "Toronto",
      c: "Ottawa",
      d: "Montreal"
    },
    correctAnswer: "Toronto"
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
    correctAnswer: "Moscow"
  },

{
    question: "The Great Victoria Desert is located in?",
    answers: {
      a: "Asia",
      b: "South America",
      c: "Australia",
      d: "North America"
    },
    correctAnswer: "Australia"
  },

{
    question: "Which city is not in Italy?",
    answers: {
      a: "Florence",
      b: "Cannes",
      c: "Turin",
      d: "Genoa"
    },
    correctAnswer: "Cannes"
  },

  {
    question: "Which Italian explorer arrived in the 'New world' while seeking passage to Asia via the Atlantic?",
    answers: {
      a: "Vasco da Gama",
      b: "Marco Polo",
      c: "James Cook",
      d: "Christopher Columbus"
    },
    correctAnswer: "Christopher Columbus"
  },

  {
    question: "Which place has the most volcanoes?",
    answers: {
      a: "Indonesia",
      b: "Japan",
      c: "Antarctica",
      d: "Philippines"
    },
    correctAnswer: "Indonesia"
  },

{
    question: "What country's national game is kabaddi, a group version of tag where players must evade the opposing team while holding a single breath of air?",
    answers: {
      a: "Afghanistan",
      b: "Pakistan",
      c: "India",
      d: "Bangladesh"
    },
    correctAnswer: "Bangladesh"
  },

  {
    question: "What Arizona river shares its name with a native venomous lizard?",
    answers: {
      a: "Gila River",
      b: "Slitherine River",
      c: "Komodo River",
      d: "Iguana River"
    },
    correctAnswer: "Gila River"
  },

  {
    question: "Which sea lies between Australia and New Zealand?",
    answers: {
      a: "Arafura Sea",
      b: "Tasman Sea",
      c: "Coral Sea",
      d: "Timor Sea"
    },
    correctAnswer: "Coral Sea"
  },

  {
    question: "In terms of area, which is the world’s largest landlocked country?",
    answers: {
      a: "Egypt",
      b: "Paraguay",
      c: "Zaire",
      d: "Kazakhstan"
    },
    correctAnswer: "Kazakhstan"
  },

  {
    question: "What kind of leaf appears on the Canadian flag?",
    answers: {
      a: "White",
      b: "Sycamore",
      c: "Maple",
      d: "Oak"
    },
    correctAnswer: "Maple"
  },

  {
    question: "What is the Capital of Jordan",
    answers: {
      a: "Ankara",
      b: "Bairut",
      c: "Baghdad",
      d: "Amman"
    },
    correctAnswer: "Amman"
  },
  {
    question: "If a strong Tropical Cyclone occurs in the northwest Pacific Ocean, what is it likely to be called?",
    answers: {
      a: "Tropical depression",
      b: "Tornado",
      c: "Typhoon",
      d: "Hurricane"
    },
    correctAnswer: "Typhoon"
  },

];


//score function
var scoreContainer = document.createElement('div');
var score = 0

scoreContainer.innerHTML = score;

var newScoreBoard = document.getElementById('scoreBoard');
newScoreBoard.appendChild(scoreContainer);


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


// adding a event listener to go to the next question by click on submit button
// 
// const nextQuestion = document.getElementById('submit');
// nextQuestion.addEventListener('click', showNextQuestion)
// console.log("submit button was clicked " + nextQuestion)


function newRandomQuestion () {
  randomQuestion =
  geographyQuestion[Math.floor(Math.random() * geographyQuestion.length)]
}

function showNextQuestion() {
  newRandomQuestion()
  newAnswera.style.backgroundColor = "";
  newAnswerb.style.backgroundColor = "";
  newAnswerc.style.backgroundColor = "";
  newAnswerd.style.backgroundColor = "";
  newQuestion.innerText = randomQuestion.question
  newAnswera.innerText = randomQuestion.answers.a
  newAnswerb.innerText = randomQuestion.answers.b
  newAnswerc.innerText = randomQuestion.answers.c
  newAnswerd.innerText = randomQuestion.answers.d

  // if (randomQuestion.correctAnswer === randomQuestion.answers.a) {
  //     newScoreBoard += 1;
  // } else {
  //     score += 0;
  // }


  // if (randomQuestion.correctAnswer === randomQuestion.answers.b) {
  //  newAnswera.style.backgroundColor = "green";
  // } else {
  //   newAnswera.style.backgroundColor = "red";
  // }


  // check if the correct answer, the button, (correctAnswer) has a color of green
  // if the correct answer has the color of green, increment the score value
  // then add the score to innerhtml of the score container

  /*
  scoreContainer.innerHTML = score;

  var newScoreBoard = document.getElementById('scoreBoard');
  newScoreBoard.innerHTML = scoreContainer.innerHTML 
  */
}

function restart(){
  location.reload();
}

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
// turn green if answer is correct otherwise turn red
// const start = document.querySelector('.')


const aButton = document.querySelector('.answerA')

aButton.addEventListener('click', function () {
  if (randomQuestion.correctAnswer === randomQuestion.answers.a) {
   newAnswera.style.backgroundColor = "green";
  } else {
    newAnswera.style.backgroundColor = "red";
  }

  console.log("button a was clicked")
})

const bButton = document.querySelector('.answerB')

bButton.addEventListener('click', function () {
  if (randomQuestion.correctAnswer === randomQuestion.answers.b) {
   newAnswerb.style.backgroundColor = "green";
  } else {
    newAnswerb.style.backgroundColor = "red";
  }
  console.log("button b was clicked")
})

const cButton = document.querySelector('.answerC')

cButton.addEventListener('click', function () {
  if (randomQuestion.correctAnswer === randomQuestion.answers.c) {
   newAnswerc.style.backgroundColor = "green";
  } else {
    newAnswerc.style.backgroundColor = "red";
  }
  console.log("button c was clicked")
})

const dButton = document.querySelector('.answerD')

dButton.addEventListener('click', function () {
  if (randomQuestion.correctAnswer === randomQuestion.answers.d) {
   newAnswerd.style.backgroundColor = "green";
  } else {
    newAnswerd.style.backgroundColor = "red";
  }
   console.log("button d was clicked")
})



// go to the next question
// add score in score board
//show summary at the end of quiz
