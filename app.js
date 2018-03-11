var startScreen = document.querySelector('#game-start');
var startBtn = startScreen.querySelector('button');
var mainScreen = document.querySelector('#game');
var gameOver = document.querySelector('#game-over');
var restartBtn = gameOver.querySelector('button');

var functionTime = function() {
  var timer = 3;
  var interval = setInterval(function() {
    var textTimer = mainScreen.querySelector('.time');
    timer--;
    console.log(timer);
    textTimer.innerHTML = timer + 's';
    if (timer === 0) {
      clearInterval(interval);
      gameOver.style.display = 'block';
    };
  }, 1000);
}


 var functionRestart = function (){
   restartBtn.addEventListener('click', function(){
     gameOver.style.display = 'none';
    startScreen.style.display = 'block';
   })
 }






var functionStart = function(){
startBtn.addEventListener('click', function() {
  startScreen.style.display = 'none';
  functionTime();
});
}
functionStart();
functionRestart();
