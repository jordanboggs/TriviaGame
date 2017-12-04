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

  start: function() {
    intervalId = setInterval(game.count, 1000);
    clockRunning = true;
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
      // Player loses this round
      game.timeOut();
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

  questionBank: {
    question1: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
    question2: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
    question3: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
    question4: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
    question5: {
      text: "",
      answerA: {
        text: "",
        correct: false
      },
      answerB: {
        text: "",
        correct: false
      },
      answerC: {
        text: "",
        correct: false
      },
      answerD: {
        text: "",
        correct: false
      },
    },
  }
};

/*
 * TO DO
 * ----------
 * 1. Build objects for each question
 * 2. Method for displaying correct answers
 */