var startScreen = document.querySelector('#game-start');
var startBtn = startScreen.querySelector('button');
var mainScreen = document.querySelector('#game');
var gameOver = document.querySelector('#game-over');
var restartBtn = gameOver.querySelector('button');
var flagTitle = document.querySelector('.flagTitle');
var answers = document.querySelectorAll('.flag img');
var lifes = document.querySelectorAll('.lives img');
var addscore = document.querySelector('.score');
var timer = 20;
var flagTitleAnswer;
var textScore = document.querySelector('.score strong');
var score = 0;

var addscore = function() {
  score++;
  textScore.innerHTML = score;

}

var functionTime = function() {
  var interval = setInterval(function() {
    var textTimer = mainScreen.querySelector('.time');
    timer--;
    textTimer.innerHTML = timer + 's';
    if (timer === 0) {
      clearInterval(interval);
      gameOver.style.display = 'block';
    };
  }, 1000);
} // DEFINITION DE LA FONCTION QUI PERMET D'AFFICHER LE TIMER


var functionRestart = function() { // FONCTION POUR RESTART LA PARTIE EN CAS D'ECHEC
  restartBtn.addEventListener('click', function() {
    gameOver.style.display = '';
    startScreen.style.display = 'flex';
  })
}

var functionStart = function() { // FONCITON QUI LANCE LE JEU
  startBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    functionTime();
    initilizeGame();
    functionRestart();
    Gameeeeee();
  });
}

var initilizeGame = function() { // INITIALISATION DES DRAPEAUX

  flagTitleAnswer = flags[Math.floor(Math.random() * flags.length)]; // CHOISIE UN PAYS AU HASARD PARMIS LA LISTE
  flagTitle.innerHTML = flagTitleAnswer.name;


  for (var i = 0; i < answers.length; i++) { // CHOISIE DES DRAPEAUX DANS LE DATA
    var drapo = flags[Math.floor(Math.random() * flags.length)];
    do {
      var drapo = flags[Math.floor(Math.random() * flags.length)];
    } while (drapo.name === flagTitleAnswer.name);
    answers[i].src = "flags/" + drapo.code + ".svg"; // CHANGE SRC DES DRAPEAUX

  }


  var correctAnswer = [Math.floor(Math.random() * 4)]; // AJOUTE LA BONNE RéPONSE CORRESPONDANT AU TITRE flagTitleAnswer DANS LES 4 DRAPEAUX
  answers[correctAnswer].src = "flags/" + flagTitleAnswer.code + ".svg"; // CHANGE LA SRC DE LA BONNE REPONSE
}

var Gameeeeee = function() { // FONCTION POUR LANCER LE JEU
  for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function() { // VERIFICATION AU CLIC SI LA SRC CORRESPOND AU .CODE DU DATA
      console.log(this.src[51] + this.src[52]);
      console.log(flagTitleAnswer.code);
      var correctAnswerVerify = this.src[51] + this.src[52];
      if (correctAnswerVerify == flagTitleAnswer.code) {
        timer = timer + 4; // AJOUE DU TEMPS SI IL Y A CORRESPONDANCE
        if (timer > 20) { // SI TEMPS > A 20 ALORS ON RESTE A 20
          timer = 21;
        }
        textTimer = timer; // ON CHANGE LE TEXT DE LA DIV POUR METTRE LA VALEUR DU TIMER
        initilizeGame(); // ON RE INITIALISE LES DRAPEAUX ALEATOIREMENT
        addscore();

      }
    })
  }

}

functionStart(); // LANCE TOUT BEBE
