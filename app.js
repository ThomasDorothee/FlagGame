var startScreen = document.querySelector('#game-start');
var startBtn = startScreen.querySelector('button');
var mainScreen = document.querySelector('#game');
var gameOver = document.querySelector('#game-over');
var restartBtn = gameOver.querySelector('button');


var flagTitle = document.querySelector('.flagTitle');
var flagTitleAnswer;
var answers = document.querySelectorAll('.flag img');

var textScore = document.querySelector('.score strong');
var score = 0;

var timer = 21;

var lifesCounter = 3;
var lifes = document.querySelectorAll('.lives img');

var functionStart = function() { // FONCITON QUI LANCE LE JEU
  startBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';

    functionRestart();
    functionTime();
    initilizeGame();
    Gameeeeee();
  });
}

var functionTime = function() { // DEFINITION DE LA FONCTION QUI PERMET D'AFFICHER LE TIMER
  var interval = setInterval(function() {
    var textTimer = mainScreen.querySelector('.time');
    timer--; // DECREMENTATION DU TEMPS
    textTimer.innerHTML = timer + 's'; // AFFICHAGE DU TEMPS
    if (timer === 0) { // SI TEMPS = 0
      clearInterval(interval); // CLEAR DE L'INTERVAL
      gameOver.style.display = 'flex'; // AFFICHAGE DE L'ECRAN GAME OVER
    };
  }, 1000);
}
var functionRestart = function() { // FONCTION POUR RESTART LA PARTIE EN CAS D'ECHEC
  restartBtn.addEventListener('click', function() {
    gameOver.style.display = '';
    timer = 20;
    lifesCounter = 3;
    score = 0;
    textScore.innerHTML = score;
  })
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
      var correctAnswerVerify = this.src[51] + this.src[52];
      if (correctAnswerVerify === flagTitleAnswer.code) {
        timer = timer + 4; // AJOUE DU TEMPS SI IL Y A CORRESPONDANCE
        if (timer > 20) { // SI TEMPS > A 20 ALORS ON RESTE A 20
          timer = 21;
        }
        textTimer = timer; // ON CHANGE LE TEXT DE LA DIV POUR METTRE LA VALEUR DU TIMER
        initilizeGame(); // ON RE INITIALISE LES DRAPEAUX ALEATOIREMENT
        addscore();

      } else if (correctAnswerVerify !== flagTitleAnswer.code) {
        removeslife();

      }
    })
  }

}

var removeslife = function() { // FONCTION DE LA PERTE DE VIE
  lifesCounter--;
  lifes[lifesCounter].classList.toggle('is-active'); // AJOUT DE LA CLASS IS-ACTIVE
  if (lifesCounter === 0) { // SI LE NOMBRE DE VIE = 0

    gameOver.style.display = 'flex'; // AFFICHAGE DE L'ECRAN GAME OVER
    for (var i = 0; i < lifes.length; i++) { // ON ENLEVE LA CLASS IS-ACTIVE A TOUTE LES IMGS (BOUCLE PSK TABLEAU)
      lifes[i].classList.remove('is-active');
    }

  }
}






var addscore = function() { // FONCTION D'AJOUT DU SCORE
  score++; //INCREMENTATION DU SCORE
  textScore.innerHTML = score; // AFFICHAGE DU SCORE


}

window.onload = functionStart(); // LANCE TOUT BEBE
