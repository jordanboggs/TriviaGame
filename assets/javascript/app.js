/*
 * S T A R   T R E K   T R I V I A
 * Jordan Boggs - Dec 3 2017 
 */

$("#start").click(function() {
  $("#start-screen").hide();
  $("#gameboard").show();

  // Let's start the show
  game.start();
});

var game = {
  time: 30,

  correctAnswers: 0,
  
  incorrectAnswers: 0,

  answeredQuestions: 0,

  totalQuestions: 5,

  intervalId: "",

  start: function() {
    // Start the timer
    game.time = 30;
    $("#timer").text(game.timeConverter(game.time));
    game.intervalId = setInterval(game.count, 1000);

    // Display the question and answers, if there are still
    // questions left
    game.displayQuestion();
    
    // Wait for a selection from user
    $("#answer-a").click(function(){game.check("a")});
    $("#answer-b").click(function(){game.check("b")});
    $("#answer-c").click(function(){game.check("c")});
    $("#answer-d").click(function(){game.check("d")});
  },

  count: function() {
    if (game.time > 0) {
      // Decrement time by 1
      game.time--;
      
      // Get the current time and format it
      let currentTime = game.timeConverter(game.time);

      // Display time in #timer
      $("#timer").text(currentTime);
    }
    else if (time === 0) {
      clearInterval(game.intervalId);       

      // Player loses this round
      game.timeOut();

      // go to next question
      game.questionBank.currentQuestion++;
      
      if (game.answeredQuestions <= game.totalQuestions) {
        game.start();
      }
    }
  },

  timeConverter: function(t) {
    // Takes the current time in seconds and converts it to
    // minutes and seconds (mm:ss)
    let minutes = Math.floor(t / 60);
    let seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  },

  timeOut: function() {
    // Time's up message
    $("#question").text("Sorry, time's up!");
    
    // Highlight the correct answer
  },

  displayQuestion: function() {
    // Display the question based on what the currentQuestion
    // counter is
    $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["text"]);

    $("#answer-a").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerA"]["text"]);

    $("#answer-b").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerB"]["text"]);

    $("#answer-c").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerC"]["text"]);

    $("#answer-d").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerD"]["text"]);
  },

  check: function(pick) {
    clearInterval(game.intervalId);

    console.log("Current question:",game.questionBank.currentQuestion,"User pick",pick);

    if (pick === "a") {
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answerA"]["correct"] === true) {
        // Display feedback
        $("#question").text("Correct!");

        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          } 
          else {
            game.end();
          }
        }, 2000);
      } else {
        // Display feedback
        $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]);

        // Update score
        game.incorrectAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      }
    }
    else if (pick ==="b") {
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answerB"]["correct"] === true) {
        // Display feedback
        $("#question").text("Correct!");

        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      } else {
        // Display feedback
        $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]);

        // Update score
        game.incorrectAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      }      
    }
    else if (pick ==="c") {
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answerC"]["correct"] === true) {
        // Display feedback
        $("#question").text("Correct!");

        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      } else {
        // Display feedback
        $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]);

        // Update score
        game.incorrectAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      }      
    }
    else if (pick ==="d") {
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answerD"]["correct"] === true) {
        // Display feedback
        $("#question").text("Correct!");

        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      } else {
        // Display feedback
        $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]);

        // Update score
        game.incorrectAnswers++;
        game.answeredQuestions++;

        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions <= game.totalQuestions) {
            game.start();
          }
        }, 2000);
      }      
    }
  },

  questionBank: {
    currentQuestion: 1,

    question1: {
      text: "Which ship was Captain Jean-Luc Picard the captain of?",
      answerA: {
        text: "USS Enterprise-A",
        correct: false,
      },
      answerB: {
        text: "USS Enterprise-B",
        correct: false
      },
      answerC: {
        text: "USS Enterprise-C",
        correct: false
      },
      answerD: {
        text: "USS Enterprise-D",
        correct: true
      },
      feedback: "Sorry, the correct answer was USS Enterprise-D"
    },

    question2: {
      text: "What is the name of Data's older sibling?",
      answerA: {
        text: "Soong Unit 1A",
        correct: false
      },
      answerB: {
        text: "RAM",
        correct: false
      },
      answerC: {
        text: "Lore",
        correct: true
      },
      answerD: {
        text: "Vore",
        correct: false
      },
    },

    question3: {
      text: "Which character has appeared in the most Star Trek episodes, across all series?",
      answerA: {
        text: "Chief O'Brien",
        correct: false
      },
      answerB: {
        text: "Worf",
        correct: true
      },
      answerC: {
        text: "Spock",
        correct: false
      },
      answerD: {
        text: "Jean-Luc Piccard",
        correct: false
      },
    },

    question4: {
      text: "What is the name of the god-like being who first antagonizes the crew in the first episode of Star Trek: The Next Generation?",
      answerA: {
        text: "Q",
        correct: true
      },
      answerB: {
        text: "X",
        correct: false
      },
      answerC: {
        text: "The Joker",
        correct: false
      },
      answerD: {
        text: "The Continuum",
        correct: false
      },
    },

    question5: {
      text: "What is the name of the room on the Enterprise that allows crewmembers to simulate different environments in 3D space?",
      answerA: {
        text: "The Occulus",
        correct: false
      },
      answerB: {
        text: "The Holochamber",
        correct: false
      },
      answerC: {
        text: "The Simulacrum",
        correct: false
      },
      answerD: {
        text: "The Holodeck",
        correct: true
      },
    },
  },

  end: function() {
    $("#timer").hide();
    $("#answers").hide();
    $("#question").html("<h2>Here's how you did!</h2>" + 
      "<p>Correct answers: " + game.correctAnswers + "</p>" +
      "<p>Incorrect answers: " + game.incorrectAnswers + "</p>");
  }
};

/*
 * TO DO
 * ----------
 * FIX BUG
 * Questions advance as follows: 1, 2, 4, 8
 */