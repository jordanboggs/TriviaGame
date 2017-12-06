/*
 * S T A R   T R E K   T R I V I A
 * Jordan Boggs - Dec, 2017 
 */
$(document).ready(function() {
  var acceptInput = false;

  var game = {
    time: 30,
  
    correctAnswers: 0,
    
    incorrectAnswers: 0,
  
    answeredQuestions: 0,
  
    totalQuestions: 5,
  
    intervalId: "",
  
    start: function() {
      // Accept input
      acceptInput = true;

      // Clear feedback
      $("#feedback").html("");

      // Start the timer
      game.time = 30;
      $("#timer").text(game.timeConverter(game.time));
      game.intervalId = setInterval(game.count, 1000);
      
      // Display the question and answers, if there are still
      // questions left
      game.displayQuestion();
    }, // End game.start()
  
    count: function() {
      if (game.time > 0) {
        // Decrement time by 1
        game.time--;
        
        // Get the current time and format it
        let currentTime = game.timeConverter(game.time);
  
        // Display time in #timer
        $("#timer").text(currentTime);
      }
      else if (game.time === 0) {
        clearInterval(game.intervalId);       
  
        // Player loses this round
        game.timeOut();
  
        setTimeout(function() {
          // Reset highlight
          let arr = ['A', 'B', 'C', 'D'];
          for (let i = 0; i < 4; i++) {
            if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answer" + arr[i]]["correct"]) {
              $("#answer-" + arr[i].toLowerCase()).toggleClass("hovered");
            }
          }
  
          // go to next question
          game.questionBank.currentQuestion++;
        
          if (game.answeredQuestions < game.totalQuestions) {
            game.start();
          }
        }, 4000);
      }
    }, // End game.count()
  
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
    }, // End game.timeConverter()
  
    timeOut: function() {
      // Time's up message
      $("#feedback").html("<h3>Time's up! " +
      game["questionBank"]["question" + 
      game.questionBank.currentQuestion]["feedback"] + 
      "</h3><br/><img class='center-block img-responsive' src='./assets/images/b4.gif'/>");
      
      // Highlight the correct answer
      let arr = ['A', 'B', 'C', 'D'];
      for (let i = 0; i < 4; i++) {
        if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answer" + arr[i]]["correct"]) {
          $("#answer-" + arr[i].toLowerCase()).toggleClass("hovered")
        }
      }
      
      // Update score
      game.incorrectAnswers++;
      game.answeredQuestions++;
    }, // End game.timeOut()
  
    displayQuestion: function() {
      // Display the question based on what the currentQuestion
      // counter is
      $("#question").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["text"]);
  
      $("#answer-a").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerA"]["text"]);
  
      $("#answer-b").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerB"]["text"]);
  
      $("#answer-c").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerC"]["text"]);
  
      $("#answer-d").text(game["questionBank"]["question" + game.questionBank.currentQuestion]["answerD"]["text"]);
    }, // End game.displayQuestion()
  
    check: function(pick) {
      clearInterval(game.intervalId);
  
      // if answer is correct
      if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answer" + pick]["correct"] === true) {
        // Display feedback
        $("#feedback").html("<h2>Correct!</h2><br/><img class='center-block img-responsive' src='" + game["questionBank"]["question" + game.questionBank.currentQuestion]["gif"] + "'/>");
  
        // Update score
        game.correctAnswers++;
        game.answeredQuestions++;
  
        // go to next question
        setTimeout(function() {
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions < game.totalQuestions) {
            game.start();
          } 
          else {
            game.end();
          }
        }, 4000);
      } 
      else {
        // Display feedback
        $("#feedback").html("<h2>" + game["questionBank"]["question" + game.questionBank.currentQuestion]["feedback"]
          + '</h2><br/><img class="center-block img-responsive" src="./assets/images/facepalm.gif"/>');
  
        // Highlight the correct answer
        let arr = ['A', 'B', 'C', 'D'];
        for (let i = 0; i < 4; i++) {
          if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answer" + arr[i]]["correct"]) {
            $("#answer-" + arr[i].toLowerCase()).toggleClass("hovered");
          }
        }
        
        setTimeout(function() {
          // reset highlighted answer
          let arr = ['A', 'B', 'C', 'D'];
          for (let i = 0; i < 4; i++) {
            if (game["questionBank"]["question" + game.questionBank.currentQuestion]["answer" + arr[i]]["correct"]) {
              $("#answer-" + arr[i].toLowerCase()).toggleClass("hovered");
            }
          }
  
          // Update score
          game.incorrectAnswers++;
          game.answeredQuestions++;
  
          // go to next question
          game.questionBank.currentQuestion++;
          
          if (game.answeredQuestions < game.totalQuestions) {
            game.start();
          }
          else {
            game.end();
          }
        }, 4000);
      }
      acceptInput = false;
    }, // End game.check()
  
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
        feedback: "Sorry, the correct answer was USS Enterprise-D",
        gif: "./assets/images/picard.gif"
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
        feedback: "Sorry, the correct answer was Lore.",
        gif: "./assets/images/lore.gif"
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
          text: "Jean-Luc Picard",
          correct: false
        },
        feedback: "Sorry, the correct answer was Worf.",
        gif: "./assets/images/worf.gif"
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
        feedback: "Sorry, the correct answer was Q.",
        gif: "./assets/images/q.gif"
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
        feedback: "Sorry, the correct answer was The Holodeck",
        gif: "./assets/images/holodeck.gif"
      },
    }, // End game.questionBank
  
    end: function() {
      $("#timer").hide();
      $("#answers").hide();
      $("#feedback").html("");

      // Embed a video
      if (game.correctAnswers > game.incorrectAnswers) {
        $("#feedback").html("<h2>Here's how you did!</h2>");
        $("#question").html("<p>Correct answers: " + game.correctAnswers + "</p>" +
        "<p>Incorrect answers: " + game.incorrectAnswers + "</p>" +
        '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/PiyZEbGSHnY?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>' + 
        '<p><button id="restart" class="btn btn-lg">Play again!</button></p>');
      }
      else {
        $("#question").html("<h2>Here's how you did!</h2>" + 
        "<p>Correct answers: " + game.correctAnswers + "</p>" +
        "<p>Incorrect answers: " + game.incorrectAnswers + "</p>" +
        '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/29-iFOEOgIM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>' + 
        '<p><button id="restart" class="btn btn-lg">Play again!</button></p>');
      }
  
      $("#restart").click(function() {
        // Reset variables
        game.correctAnswers = 0;
        game.incorrectAnswers = 0;
        game.answeredQuestions = 0;
        game.intervalId = "";
        game.questionBank.currentQuestion = 1;
      
        // Let's restart the show
        game.start();
        $("#timer").show();
        $("#answers").show();
      });
    } // End game.end()
  }; // End game
  
  $("#start").click(function() {
    $("#start-screen").hide();
    $("#gameboard").show();
  
    // Let's start the show
    game.start();
  });
  
  // Wait for a selection from user
  $("#answer-a").click(function(){
    // validate that user SHOULD be giving an input
    if (acceptInput) {
      game.check("A");      
    }
  });
  $("#answer-b").click(function(){
    // validate that user SHOULD be giving an input
    if (acceptInput) {
      game.check("B");      
    }
  });
  $("#answer-c").click(function(){
    // validate that user SHOULD be giving an input
    if (acceptInput) {
      game.check("C");      
    }
  });
  $("#answer-d").click(function(){
    // validate that user SHOULD be giving an input
    if (acceptInput) {
      game.check("D");      
    }
  });
});
