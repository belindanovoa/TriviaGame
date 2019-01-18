var game = {
    correct: 0,
    incorrect: 0,
    counter: 60,
  };
var questions = [{
  question: "In The Sword in the Stone, what does Merlin call The Greatest Force on Earth?",
  answers: ["Magic", "Science", "Love", "Music"],
  correctAnswer: "Love"
}, {
  question: "What was the name of the whale in Pinocchio?",
  answers: ["Monstro", "Moby Dick", "Wilfred", "Jerry"],
  correctAnswer: "Monstro"
}, {
  question: "In 'The Little Mermaid', who is NOT one of Triton’s daughter?",
  answers: ["Andrina", "Adora", "Attina", "Alana"],
  correctAnswer: "Adora"
}, {
  question: "In 'Sleeping Beauty', what is the name of Maleficent’s pet raven?",
  answers: ["Diablo", "Mauvis", "Ganon", "Gambling"],
  correctAnswer: "Boxing"
}, {
  question: "Which hand is Captain Hook missing?",
  answers: ["Left", "Right"],
  correctAnswer: "Left"
}, {
  question: "What kind of dog is Pongo?",
  answers: ["Lab", "Spaniel", "Mut", "Dalmation"],
  correctAnswer: "Dalmation"
}, {
  question: "In the Disney movie 'The Rescuers', what kind of animal is Bernard?",
  answers: ["Dog", "Cat", "Mouse", "Seagul"],
  correctAnswer: "Mouse"
}, {
  question: "Who was the first Disney princess?",
  answers: ["Snow White", "Cinderella", "Elsa", "Aurora"],
  correctAnswer: "Snow White"
}, {
  question: "What is the name of the pub that Flynn brings Rapunzel?",
  answers: ["The Snuggly Duckling", "Monte Carlo", "Brothers Arms Pub", "The Watering Hole"],
  correctAnswer: "The Snuggly Duckling"
}, {
    question: "How many acres is Disney World??",
    answers: ["why would I know this", "100 acres", "27,442 acres", "45,200 acres"],
    correctAnswer: "27,442 acres"
  },
];
var game = $("#quiz"); 

// create onclick event for Start button
$(document).on("click","#start", run, function() {
    timer.start();
  });
// onclick START button activates sub-wrapper
function start(subwrapper){
}

// Set countdown timer for 60 secs
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 60000);
}
  function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        alert("Time Up!");
    }
}
// 
// set function for each question 
// if answer === correct answer then add +1 to correct
game.correct++;
        }
      else {
        game.incorrect++;
      }
// else if question is != +1 incorrect
// else if question is unanswered != +1 unanswered
// create loop for each question 
for (var i = 0; i < questions.length; i++)

// alert("Times UP!")

// create onllick event for Done button
$(document).on("click","#done",function() {
    game.done();
  });
  

 