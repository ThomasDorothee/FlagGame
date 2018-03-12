var startScreen = document.querySelector('#game-start');
var startBtn = startScreen.querySelector('button');
var mainScreen = document.querySelector('#game');
var gameOver = document.querySelector('#game-over');
var restartBtn = gameOver.querySelector('button');
var flagTitle = document.querySelector('.flagTitle');
var flagTitleAnswer = {};
var answers = document.querySelectorAll('.flag img');

var functionTime = function() {
  var timer = 5;
  var interval = setInterval(function() {
    var textTimer = mainScreen.querySelector('.time');
    timer--;
    textTimer.innerHTML = timer + 's';
    if (timer === 0) {
      clearInterval(interval);
      gameOver.style.display = 'block';
    };
  }, 1000);
}


var functionRestart = function() {
  restartBtn.addEventListener('click', function() {
    gameOver.style.display = 'none';
    startScreen.style.display = 'block';
  })
}

var functionStart = function() {
  startBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    functionTime();
    initilizeGame();
    functionRestart();
  });
}


var initilizeGame = function() {
  flagTitleAnswer = flags[Math.floor(Math.random()*102)];
  flagTitle.textContent = flagTitleAnswer.name;


  for (var i = 0; i < answers.length; i++) {
    var drapo = flags[Math.floor(Math.random()*flags.length+1)];
    do {
      var drapo = flags[Math.floor(Math.random()*flags.length+1)];
    } while (drapo.name === flagTitleAnswer.name);
    answers[i].src = "flags/" + drapo.code + ".svg";

  }


  var correctAnswer = [Math.floor(Math.random()*4)];
  answers[correctAnswer].src = "flags/" + flagTitleAnswer.code + ".svg";


}

functionStart();
