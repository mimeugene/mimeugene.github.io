import {Howl, Howler} from 'howler';
import $ from 'jquery';

import CentralStationV2 from './js/centralstation.js';
import BUILD_DATE from './js/BuildDate'


$(document).ready(function () {
  // initialize Howler so that it unlocks audio on tap release in iOS
  Howler.volume(1.0);
  var s = new Howl({ src: ["nop"]});

  App();
});

function App() {


  var GAME_ID = "whackword";
  var centralStation = new CentralStationV2(CONFIG_ENV);


  const selectors = {
    CARROT_SCORE_BLOCK: "carrotscoreblock",
    SCORE_ID: "score",
    TIMER_ID: "timerPng",
    TIMER_COUNTER: ".timer"
  }

  const constants = {
    SQUARES_PER_BOARD: 9,
    SQUARES_PLUS_ONE: 10
  };

  var scoreID = document.getElementById(selectors.SCORE_ID);
  var carrotContainer = document.getElementById(selectors.CARROT_SCORE_BLOCK);
  var timerID = document.getElementById(selectors.TIMER_ID);
  var timerCounterID = document.getElementById(selectors.TIMER_COUNTER);
  var clickBool = true;
  var turnCounter = 1;
  var onlineArr =[];
  var splash = true;
  var sq = [];
  var arr = []; //shorter array
  var stimuliarr = []; //longer array
  var correctWord;
  var randomInt;
  var offlineWordBankLength = 895;
  var correctTile;
  var incorrectTiles = [];
  var wrongsound;
  var soundOfWord;
  var score = 10;
  var scoreCount = 0;
  var timerClock;
  var timerImage;
  var erase = 0;
  var removeTile = [];
  var topScore = 0;
  var roundCounter = 1;
  var roundSplash = false;
  var duplicateChecker = ""
  var goAhead = false;
  var countdown = 10;
  var sixtySeconds = false;
  var bothDone = false;

  function clearVariables(){
    clickBool = true;
    sq = [];
    onlineArr = [];
    arr = []; //shorter array
    stimuliarr = []; //longer array
    correctWord = undefined;
    randomInt = undefined;
    offlineWordBankLength = 895;
    correctTile = undefined;
    incorrectTiles = [];
    wrongsound = undefined;
    score = 10;
    erase = 0;
    removeTile = [];
    roundSplash = false;
    duplicateChecker = "";
    window.clearInterval(timerClock);
    window.clearInterval(timerImage);
    goAhead = false;
    countdown = 10;
    sixtySeconds = false;
    bothDone = false;

  }

  function initializeCentralStation() {
    var _this = this;
    centralStation.installDates(GAME_ID, BUILD_DATE);
    showBuildDateWarning(centralStation.buildDates());

    centralStation.studentPortalAuth();
    centralStation.gameSession('whack-word').then(function (data) {
      _this.gameSession = data.id;
      document.querySelector("#student-name").innerHTML = _this.centralStation.player.first_name + " " + _this.centralStation.player.last_name;
    })['catch'](function () {
    });
    centralStation.TTSSpeak("");
  }

  function showBuildDateWarning(buildDates) {
  }


  function getNewQuestion(array2, h){
    centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data99) {
      var x = array2.length;
      array2.push (data99);
      h = h + 1;
      checkDuplicate(array2, h);
    });
  }

  function checkDuplicate(array){
    var x = array.length -1;
    loop1:
    for (var t = 0; t < 3; t++){
      loop2:
      for (var z = array.length -2; z > -1; z--){
        loop3:
        for(var c = 0; c < 3; c++){
          if (array[x].stimuli[t].text.toUpperCase() == array[z].stimuli[c].text.toUpperCase()){
            array.pop();
            // console.log("DUPLICATE FOUND, REPLACING NOW at index: " + x);
            x = x - 1;
            getNewQuestion(array, x);
            break loop1;
          }
        }
      }
    }

      if (array.length == 3){
        bothDone = true;
      }
    }
  //fix this, it's terrible.
      function getQuestion(array1) {
          centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data1) {
            array1.push (data1);
            centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data2) {
              array1.push (data2);
              checkDuplicate(array1);
              centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data3) {
                array1.push (data3);
                checkDuplicate(array1);
                var checker = setInterval(function(){
                  if (bothDone == true){
                    loadAudio(array1);
                    continueNewGame();
                    clearInterval(checker);
                  }
                }, 200);
              });
            });
          });
        }

   function loadAudio(array) {
     for (var question = 0; question < array.length; question++) {
       for (var stimulus = 0; stimulus < array[question].stimuli.length; stimulus++) {
         array[question].stimuli[stimulus].howl = new Howl({
           src: [array[question].stimuli[stimulus].audio]/*,
            html5: true*/
         });
       }
     }
   }

//function to calculate the score by adding each round's score to the previous score to create the total score
  function findScore(){
    if (score > 0){
      if (score < 11){
        scoreCount = scoreCount + score;
      }
      else if (score == 11){
        scoreCount = scoreCount + 10;
      }
    }
    $("#score").html(scoreCount);
  };

//copies array that jumps index
  function createArr(){
   for (var i = 0; i < incorrectTiles.length; i++)
    removeTile[i] = incorrectTiles[i]+1;
  }

  function one (){
    $("#square" + ((removeTile[0])-1).toString()).addClass("game__tile bunny__miss");
  }
  function two () {
    $("#square" + ((removeTile[1])-1).toString()).addClass("game__tile bunny__miss");
  }

//when timer gets down to zero, no points are awarded.
  function timeOut(){
    if (clickBool == false){
      one();
      window.setTimeout(two ,850);
      timeOutDelay();
      // timerID.style.backgroundImage = "url(/images/timer__0.png"
      score = 0;
    }
  }

  function timeOutDelay(i){
    for (var i = 0; i < removeTile.length; i++){
      $("#square" + (removeTile[i]).toString() + "text").html("");
    }
  }

//array that splices garbage from arrays
  function cleanArray(arr){
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i] == "null1") || (arr[i] == "null")) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }

//while loop to say that while the correct tile hasnt been clicked, the decrement score function should be called every second
  function scoreTimer(){
    createArr();
    shuffleArray(removeTile);
    cleanArray(removeTile)
    timerClock = setInterval(decrementScore, 1000);
    timerImage = setInterval(decrementClockImage, 1000);
    score = 10;
  };

//function to decrement the score (reloaded at each round-- supposed to be 10 each time)
  function decrementScore(){
    if (roundSplash == false){
      if (score > 4){
        removeWord();
      }
      if (score == 4){
        window.setTimeout(timeOut, 2000);
      }
    }
  }

  function decrementClockImage (){
    if (countdown > -1){
      decrementTimer(countdown);
      countdown = countdown -1;
    }
  }

  function decrementTimer(countdown) {
    if (clickBool == false){
      $(selectors.TIMER_COUNTER).removeClass("_10 _9 _8 _7 _6 _5 _4 _3 _2 _1");
      $(selectors.TIMER_COUNTER).addClass("_"+countdown);
      // timerID.style.backgroundImage = "url(/images/timer__" + (countdown)  + ".png"
    }
  }

//remove word every 1 second function
  function removeWord()
  {
    if (clickBool == false){
      score = score - 1;
      $("#square" + ((removeTile[score-2])-1).toString()).addClass("game__tile bunny__miss");      //add the class to the clicked element
      window.setTimeout(slightPause, 650)
    }
  }

  function slightPause(){
    $("#square" + (removeTile[score-2]).toString() + "text").html("");
  }

//function to create array with random numbers (1-895, the number of unique "questions" in the questionBank.js file)
  function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
      return Math.round(Math.random() * max);
    });
  }

//function to choose random block from 3x3 block
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//replay audio button
  $ ('#play').on('click', function() {
    if(centralStation.offline){
      centralStation.TTSSpeak(correctWord.text);
    }else{
      soundOfWord.play();
    }
  })


//shuffles array for grid placement.
  function shuffleArray(shuffled){
    var j, x;
    for (var i = shuffled.length; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        x = shuffled[i - 1];
        shuffled[i - 1] = shuffled[j];
        shuffled[j] = x;
    }
  }

//changes the 3 unit array to a 9 unit array for accessibility and ease of use.
  function expandArray(smallarray){
    for (var i = 0; i < 3; i++) {
      for (var y = 0; y < 3; y++) {
        stimuliarr.push(smallarray[i].stimuli[y])
      }
    }
  }

//Assign correct word to array object for later use.
  function assignCorrectWord(){
    randomInt = getRandomInt(0,8);
    while (correctWord == null){
      if (stimuliarr[randomInt].isCorrect == true){
        correctWord = stimuliarr[randomInt];
        correctTile = randomInt;
      }
      else if (stimuliarr[randomInt].isCorrect == false){
        randomInt = getRandomInt(0,8);
      }
    }
  }

//sets board with the longer, 9 count array
  function setBoard() {
    if (roundSplash == false){
      timerID.style.display = "block";
      for (var i = 0; i < constants.SQUARES_PER_BOARD; i++) {
        $("#square" + (i+1).toString() + "text").html(stimuliarr[i].text);
        score = 10;
        clickBool = false;
      }
    }
  }
//final alerts (with score placeholder)
  function resetBoard() {
      $("*").unbind();
      newGame();
    }

  function winAlert() {
    resetBoard();
  }

//clears the board of color
  function clearBoard(){
    for (var i=1; i <constants.SQUARES_PLUS_ONE; i++){
      removeClasses();
      $("#square" + (i).toString() + "text").html("");
      document.getElementById("square" + i.toString() + "text").style.color = "white";
    }
  }

//clears the board of text
  function clearText(){
    for (var i=1; i <constants.SQUARES_PLUS_ONE; i++){
      $("square" + i.toString() + "text").html("");
    }
  }

// lose sequence
  function loseSequence(i) {
    if (clickBool == false){
      incorrectAudio(i)
      // document.getElementById("square"+i.toString()).style.color = "red";
      window.setTimeout(correctAudio, 2000);
      window.setTimeout(resetBoard, 3000);
      clickBool = true;
    }
  }

// win sequence
  function checkWin() {
    winAlert();
    correctAudio();
  }

//play audio function
  function playAudio() {
    if (roundSplash == false){
      $(selectors.TIMER_COUNTER).removeClass("_10 _9 _8 _7 _6 _5 _4 _3 _2 _1");
      $(selectors.TIMER_COUNTER).addClass("_10");
      // timerID.style.backgroundImage = "url(/images/timer__10.png"
      if(centralStation.offline){
        centralStation.TTSSpeak(correctWord.text);
      } else {
        // soundOfWord = new Audio (correctWord.audio);
        // const soundOfWord = new Howl({
        //   src: [correctWord.audio],
        //   html5: true
        // });
        correctWord.howl.play();
      }
    }
    setTimeout(scoreTimer, 2200);

  }

//assigning correct audio
  function correctAudio() {
    document.getElementById("square" + (correctTile +1)+ "text").style.color = "green";
    if(centralStation.offline){
      centralStation.TTSSpeak(correctWord.text);
    } else {
      // soundOfWord = new Audio(correctWord.audio);
      // const soundOfWord = new Howl({
      //   src: [correctWord.audio],
      //   html5: true
      // });
      correctWord.howl.play();
    }
  }

//assigning incorrect audio
  function incorrectAudio(i){
    document.getElementById("square"+(i+1).toString()+"text").style.color = "red";
    var wrongWord = stimuliarr[i];
    if(centralStation.offline){
      centralStation.TTSSpeak(wrongWord.text);
    } else {
      // wrongsound = new Audio(stimuliarr[i].audio)
      // const wrongsound = new Howl({
      //   src: [stimuliarr[i].audio],
      //   html5: true
      // });
      stimuliarr[i].howl.play();
    }
    document.getElementById("square"+i.toString()).style.color = "white";
  }

//removes animation syling between rounds
  function removeClasses(){
    for (var i = 0; i < constants.SQUARES_PER_BOARD; i++) {
      $('#square' + (i)).removeClass("correct__word");
      $('#square' + (i)).removeClass("bunny__miss");
    }
  }

//assigning incorrect tiles
  function assignIncorrect() {
    incorrectTiles = []
    for (var i = 0; i < constants.SQUARES_PER_BOARD; i++){
      if (i == correctTile){
        incorrectTiles.push ("null");
      }
      else if (i != correctTile){
        incorrectTiles.push (i);
      }
    }
  }

//displays correct tile animation
function displayAnimation(cb){
  return function(){
    if (clickBool == false){
      $(this).addClass("game__tile correct__word");
    }
  }
}

//Callback for square clicks.
  function createCallback( i ){
    return function(){
      if (clickBool == false){
        $(this).addClass("game__tile bunny__miss");      //add the class to the clicked element
        loseSequence(i);
      }
    }
  }

//square miss function
  function negativeFlow(i, e){
    if (clickBool == false){
      $(e.currentTarget).addClass("game__tile bunny__miss"); //add the class to the clicked element
      loseSequence(i);
    }
  }

//Creating callback function for square clicks.
  function clickers() {
    assignIncorrect();
    $('#replayButton').click(function () {
      window.location.replace("/")
    });
    $('#quitButton').click(function () {
      window.location.replace(centralStation.studentPortalUrl)
    });

    $('#square' + (correctTile+1)+"text").click(function () {
      if (clickBool == false){
        findScore();
      }
    });
    $('#square' + (correctTile+1)+"text").click(function () {
      if (clickBool == false){
        clearInterval(timerClock);
        clearInterval(timerImage);
        $(carrotContainer).append('<div  + class="carrot__score"></div>')
        correctAudio();
        $('#square' + (correctTile)).addClass("game__tile correct__word");
        setTimeout(winAlert.bind(this), 1000)
        clickBool=true;
      }
    });
    // cleanArray(incorrectTiles);
    for (var i = 0; i < incorrectTiles.length; i++){
      // printArray(incorrectTiles);
      $('#square' + incorrectTiles[i].toString()).click(negativeFlow.bind( App, i ) );//John's implementation
    }
  }

//for troubleshooting purposes
function printArray(arr){
  for (var i = 0; i < arr.length; i++){
    console.log (arr[i]);
  }
}

//start sequence (audio)
function startGame(cb) {
  setTimeout(playAudio.bind(this), 1000)
  setTimeout((setBoard).bind(this), 2500)
  cb();
}

//initializing game
  function newGame(){
    initializeCentralStation();
    if (sixtySeconds == true){
      window.setTimeout(endRound, 1500);
      // console.log("roundcounter = " + roundCounter);
    }
    if (sixtySeconds == false){
      clearVariables();
      window.setTimeout(clearBoard, 800);
      window.setTimeout(clearText, 800);
      getQuestion(arr);
    }
    sixtySeconds = false;
  }

//continuing new game after get question pause
  function continueNewGame() {
    expandArray(arr);
    shuffleArray(stimuliarr);
    assignCorrectWord();
    if ($('#overlay').length > 0) {
      startGame(clickers);
    }
  }

//Starts the 60 second round counter, calls function after 60s
  function oneMinute () {
    $("#scoreText").html(roundCounter);
    window.setTimeout(triggerEndRound, 60000);
  }

  function triggerEndRound(){
    sixtySeconds = true;
  }

//Ends round after 60 seconds.
  function endRound() {
    if (topScore < scoreCount) {
      topScore = scoreCount;
    }
    roundCounter = roundCounter + 1;

    if (roundCounter < 4){
      roundSplash = true;
      clearBoard();
      clearText();
      $(selectors.TIMER_COUNTER).removeClass("_10 _9 _8 _7 _6 _5 _4 _3 _2 _1");
      $(selectors.TIMER_COUNTER).addClass("_10");

      // timerID.style.backgroundImage = "url(/images/timer__10.png";
      document.getElementById("overlay").style.display = "block";
      $("#roundScoreText").html(scoreCount);
      $('#overlay').click(function() {
        startNextRound();
      });
      $('.carrot__score').remove();
    }

    if (roundCounter == 4){
      // window.alert("Thank you for playing! Your best score was: " + topScore);
      window.location.replace("/win.html")
    }
  }

  function startNextRound() {
    document.getElementById("overlay").style.display = "none";
    clearInterval(endRound);
    clearInterval(timerClock);
    clearInterval(timerImage);
    scoreCount = 0;
    $("#score").html(scoreCount);
    oneMinute();
    clickBool=false;
    roundSplash = false;
    newGame();
    window.clearTimeout(endRound);
  }

  $('body').click(function () {
    if (splash == true){

      $('#splashscreen').fadeOut(500);
      splash = false;
      newGame();
      oneMinute();
    }
  });

};
