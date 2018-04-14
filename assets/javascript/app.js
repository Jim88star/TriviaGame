$("#start").on("click", function () {
    game.start();
})

$(document).on("click", "#end", function () {
  game.done();

})


var questions = [
  {
    question: "What power ballad did Faster Pussycat release in 1989?",
    answers: ["House of Pain", "Ballad of Jayne", "Wthout You", "In My Dreams"],
    correctAnswer: "House of Pain"
  },
  {
    question: "In what year did Styx release the album 'Caught in the Act'?",
    answers: ["1980", "1986", "1982", "1984"],
    correctAnswer: "1984"
  },
  {
    question: "During Johnny and Baby's final stage dance of the movie 'Dirty Dancing', what song is playing?",
    answers: ["Overload", "Be My Baby", "(I've Had) The Time Of My Life", "Hungry Eyes"],
    correctAnswer: "(I've Had) The Time Of My Life"
  },
  {
    question: "In what year was the popular '867-5309-Jenny' from Tommy Tutone released?",
    answers: ["1980", "1981", "1978", "1986"],
    correctAnswer: "1981"
  },
  {
    question: "What song did Lita Ford and Ozzy Osbourne record together?",
    answers: ["Don't Close Your Eyes", "Almost Paradise", "Eyes Without a Face", "Close My Eyes Forever"],
    correctAnswer: "Close My Eyes Forever"
  },
  {
    question: "Name the REO Speedwagon album that produced the single 'Keep on Lovin' You'?",
    answers: ["Good Trouble", "Nine Lives", "Wheels Are Turnin", "Hi Infidelity"],
    correctAnswer: "Hi Infidelity"
  },
  {
    question: "Who is the lead singer for Foreigner?",
    answers: ["Kevin Cronin", "Lou Gramm", "Joe Elliot", "Mick Jones"],
    correctAnswer: "Lou Gramm"
  },
  {
    question: "The .38 Special song 'Back to Paradise' was the theme from which movie?",
    answers: ["Cocktails", "Revenge of the Nerds II", "Gremlins", "The Goonies"],
    correctAnswer: "Revenge of the Nerds II"
  },
  {
    question: "The ZZ Top single 'Rough Boy' is off of which album?",
    answers: ["Afterburner", "Recycler", "Eliminator", "El Loco"],
    correctAnswer: "Afterburner"
  },
  {
    question: "Who was the lead singer of Warrant?",
    answers: ["Jani Lane", "Jamie Lee", "Kip Winger", "Blackie Lawless"],
    correctAnswer: "Jani Lane"
  },
  {
    question: "What year was Poison's 'Every Rose Has Its Thorn' released?",
    answers: ["1987", "1986", "1988", "1989"],
    correctAnswer: "1988"
  },
  {
    question: "What group released 'I'll Never Let You Go (Angel Eyes)'?",
    answers: ["Kix", "Sheriff", "Steelheart", "Bad English"],
    correctAnswer: "Steelheart"
  },
  {
    question: "Finish this line from Don Henely's 'Dirty Laundry': 'Get the _____ on the set, we need dirty laundry.'",
    answers: ["widow", "stripper", "killer", "loser"],
    correctAnswer: "widow"
  },
  {
    question: "Who released the single 'Turn Up The Radio'?",
    answers: ["White Lion", "Giant", "Autograph", "Sheriff"],
    correctAnswer: "Autograph"
  },
  {
    question: "Which of these songs was released by Vixen?",
    answers: ["'Touch Me'", "'Kiss Me Deadly'", "'Edge Of A Broken Heart'", "'Little Liar'"],
    correctAnswer: "'Edge Of A Broken Heart'"
  },
  {
    question: "The David Lee Roth single 'Yankee Rose' was on what album?",
    answers: ["'Heat Of The Night'", "'Eat 'em and Smile'", "'Just A Gigolo'", "'Running With The Devil'"],
    correctAnswer: "'Eat 'em and Smile'"
  }
];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function () {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      console.log("Time is up!");
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend("<h2 id=freeze>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append('<h2>' + questions[i].question + '</h2 >');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
      }
    }
    $("#subwrapper").append("<br><button id='end'>DONE</button>");

  },

  done: function () {
    $.each($("input[name = 'question-0']:checked"), function () {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function () {
    clearInterval(timer);
    $("#subwrapper h2").remove();

    $("#subwrapper").html("<h2>All Done!</h2>");
    $("#subwrapper").append("<h3> Correct Answers: " + this.correct + "</h3>");
    $("#subwrapper").append("<h3> Incorrect Answers: " + this.incorrect + "</h3>");
    $("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.correct + this.incorrect)) + "</h3>");


  }
}