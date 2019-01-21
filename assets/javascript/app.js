var intervalId= 0;
var countDownNumber= 60;
var startButton = $('start').on('click', run);
var submitButton = $('done').on('click', stop);
var quizWrapper = $('sub-wrapper').on('click', run);
 
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
  answers: ["The Snuggly Duckling", "Monte Carlo", "Brothers Arms Pub", "Lagunitas"],
  correctAnswer: "The Snuggly Duckling"
}, {
    question: "How many acres is Disney World??",
    answers: ["why would I know this", "100 acres", "27,442 acres", "45,200 acres"],
    correctAnswer: "27,442 acres"
  },
];

// Set countdown timer for 60 secs
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
  function decrement() {
    if (startButton.on("click",run)){
    countDownNumber--;
    $("#show-countDownNumber").html("<h2>" + countDownNumber + "</h2>");
    }
    if (countDownNumber === 0) {
        stop();
        alert("Time Up!");
    }
}
function stop() {
    clearInterval(intervalId);
}
run();

// create onclick event for Start button
// $(document).on("click","#start", run, {
//     startButton.countDownNumber.();
//   });

// onclick START button activates sub-wrapper
// start.addEventListener('click', ()=>{
//     startButton.countDownNumber;
// });

// set function for each question 
// if answer === correctAnswer then add +1 to correct
// game.correct++;
//         }
//       else {
//         game.incorrect++;
//       }
// else if question is != +1 incorrect
// else if question is unanswered != +1 unanswered
// create loop for each question 
// for (var i = 0; i < questions.length; i++)


// create onllick event for Done button
$(document).on("click","#done",function() {
    game.done();
  });
  
// display results

 