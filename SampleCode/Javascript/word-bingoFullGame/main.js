import CentralStationV2 from './centralstation.js';
import {BUILD_DATE} from './BuildDate.js'
import $ from 'jquery';


$(document).ready(function () {
  App();
});

function App() {

  const selectors = {
  }

  const constants = {
    SQUARES_PER_BOARD: 25
  }

  var beginning = true;
  var otherTiles = [];
  var beginningArr = [];
  var expandedArr = []
  var randomLine = 0;
  var lineCorrect = [];
  var lineIncorrect = [];
  var correctTiles = [];
  var line5 = [];
  var GAME_ID = "whackword";
  var fiveInARow = true;
  var currentWord;
  var correctWord;
  var incorrectWord;
  var soundOfWord;
  var soundOfCurrentWord;
  var decrement = 11;
  var decrementArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];



  var allPossibleLines = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
  ];


  var centralStation = new CentralStationV2(CONFIG_ENV);
  var gameSession;

  function initializeCentralStation() {
    centralStation.installDates(GAME_ID, BUILD_DATE);
    showBuildDateWarning(centralStation.buildDates());

    centralStation.studentPortalAuth();
    centralStation.gameSession('whack-word').then(function (data) {
      gameSession = data.id;
      // document.querySelector("#student-name").innerHTML = centralStation.player.first_name + " " + centralStation.player.last_name;
      getQuestion(beginningArr, continueGame);

    })['catch'](function () {
      console.log("error getting game session");
    });
    centralStation.TTSSpeak("");
  }

  function showBuildDateWarning(buildDates) {
  }

//fix this, it's terrible.
    function getQuestion(array1, cb) {
        centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data1) {
          array1.push (data1);
          centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data2) {
            array1.push (data2);
            centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data3) {
              array1.push (data3);
              centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data4) {
                array1.push (data4);
                centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data5) {
                  array1.push (data5);
                  centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data6) {
                    array1.push (data6);
                    centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data7) {
                      array1.push (data7);
                      centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data8) {
                        array1.push (data8);
                        centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data9) {
                          array1.push (data9);
                          centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data10) {
                            array1.push (data10);
                            centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data11) {
                              array1.push (data11);
                              centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then(function (data12) {
                                array1.push (data12);
                                cb();
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      }

    //make this work eventually
    // function getQuestion(array, cb) {
    //     for (var i = 0; i < 9; i++){
    //       centralStation.randomQuestion(centralStation.player.id, centralStation.player.reading_stage, centralStation.questionSkill).then((i) => {
    //         array.push (i);
    //     }
    //     cb();
    //   });
    //   }



    function checkForLine(){
      for (var i = 0; i < 12; i++){
        for (var x = 0; x < 5; x++){
          var element = document.getElementById('tile' + (allPossibleLines[i][x]).toString());
          if (element.classList.contains("bingo") == false){
            fiveInARow = false;
          }
        }
        console.log(fiveInARow);
        if (fiveInARow == true){
          winSequence();
        }
        fiveInARow = true;
      }
    }

    function winSequence(){
      alert("You formed a line, OMG!")
    }

    function allPossibleLineGenerator(){
      for (var i = 0; i < 12; i++){
        assignCorrectTiles(i);
        for (var z = 0; z < 5; z++){
        }
      }
    }

    function lineCorrectIncorrect(array){
      for (var i = 11; i > -1; i--) {
        var z = (Math.floor(Math.random() * (i - 0 + 1)) + 0);
        line5.push (array[z]);
        array.splice(z, 1);
        // console.log(line5[0].stimuli[1]);
      }
      for (var b = 0; b < 12; b++){
        var x = (Math.floor(Math.random() * (2 - 0 + 1)) + 0);
        lineCorrect.push(line5[b].stimuli[x]);
        line5[b].stimuli.splice(x, 1);
        for (var c = 0; c < 2; c++){
        lineIncorrect.push(line5[b].stimuli[c])
        }
      }
    }

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function correctClick(x, e){
      correctWord = lineCorrect[x];
      if (currentWord == correctWord){
        $(e.currentTarget).addClass("bingo"); //add the class to the clicked element
        soundOfWord = new Audio(correctWord.audio);
        soundOfWord.play();
        $('#foodBlock').append('<div  + class="food__score"></div>');
        window.setTimeout(playCorrectAudio, 2000)
      }
      if (currentWord != correctWord){
        $(e.currentTarget).addClass("stolen"); //add the class to the clicked element
        soundOfWord = new Audio(correctWord.audio);
        soundOfWord.play();

        setTimeout(function(){
          soundOfCurrentWord.play();
          $(e.currentTarget).removeClass("stolen");
        }, 1500);
        // setTimeout(incorrectCorrect(e), 2000);
      }
      window.setTimeout(checkForLine, 50);
    }

    function incorrectCorrect(e){
      soundOfCurrentWord.play();
      $(e.currentTarget).removeClass("stolen"); //add the class to the clicked element
    }

    function incorrectClick(y, e){
      $(e.currentTarget).addClass("stolen"); //add the class to the clicked element
      incorrectWord = lineIncorrect[y];
      soundOfWord = new Audio(incorrectWord.audio);
      soundOfWord.play();
      window.setTimeout(checkForLine, 50);
      setTimeout(function(){soundOfCurrentWord.play();}, 1500);
    }

    function clickers() {
      for (var x = 0; x < 12; x++){
        $('#tile' + (correctTiles[x]).toString()).click(correctClick.bind( App, x ) );//John's implementation
      }
      for (var y = 0; y < 13; y++){
        $('#tile' + (otherTiles[y]).toString()).click(incorrectClick.bind( App, y ) );
        };
        $('#replayButton').click(function () {
          soundOfCurrentWord = new Audio(currentWord.audio);
          soundOfCurrentWord.play();
        })
    };


    function assignCorrectTiles(ct){
      switch (ct)
        {
          case 0: correctTiles = [0, 1, 2, 3, 4];
                  otherTiles   = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
          break;
          case 1: correctTiles = [5, 6, 7, 8, 9];
                  otherTiles   = [0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
          break;
          case 2: correctTiles = [10, 11, 12, 13, 14];
                  otherTiles   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
          break;
          case 3: correctTiles = [15, 16, 17, 18, 19];
                  otherTiles   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24];
          break;
          case 4: correctTiles = [20, 21, 22, 23, 24];
                  otherTiles   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
          break;
          case 5: correctTiles = [0, 5, 10, 15, 20];
                  otherTiles   = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24];
          break;
          case 6: correctTiles = [1, 6, 11, 16, 21];
                  otherTiles   = [0, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24];
          break;
          case 7: correctTiles = [2, 7, 12, 17, 22];
                  otherTiles   = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24];
          break;
          case 8: correctTiles = [3, 8, 13, 18, 23];
                  otherTiles   = [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24];
          break;
          case 9: correctTiles = [4, 9, 14, 19, 24];
                  otherTiles   = [0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22, 23];
          break;
          case 10: correctTiles = [0, 6, 12, 18, 24];
                  otherTiles   = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23];
          break;
          case 11: correctTiles = [4, 8, 12, 16, 20];
                   otherTiles   = [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19, 21, 22, 23, 24];
          break;
        }
    }

    function setBoard() {
        for (var z = 0; z < 5; z ++){
          $("#tile" + correctTiles[z] + "text").html(lineCorrect[z].text);
        }
        for (var i = 0; i < 10; i++) {
          $("#tile" + (otherTiles[i]).toString() + "text").html(lineIncorrect[i].text);
        }
        for (var y = 10; y < 20; y++) {
          if (y < 13){
            $("#tile" + (otherTiles[y]).toString() + "text").html(lineIncorrect[y].text);
          }
          if (y > 12){
            //y-8 is basically saying correctTiles [5-12]
            $("#tile" + (otherTiles[y]).toString() + "text").html(lineCorrect[y-8].text);
            correctTiles.push (otherTiles[y]);
          }
        }
    }

    function expandArray(smallarray){
      for (var i = 0; i < 9; i++) {
        for (var y = 0; y < 3; y++) {
          expandedArr.push(smallarray[i].stimuli[y])
        }
      }
    }

    function shuffleArray(shuffled){
      var j, x;
      for (var i = shuffled.length; i > 0; i--) {
          j = Math.floor(Math.random() * i);
          x = shuffled[i - 1];
          shuffled[i - 1] = shuffled[j];
          shuffled[j] = x;
      }
    }

    function printArr(arr){
      for (var i = 0; i < arr.length; i++){
        console.log (arr[i]);
      }
    }

  $('body').click(function () {
    if (beginning == true){
      beginning = false
      newGame();
    }
  });

  function newGame(){
    initializeCentralStation();
  }
  function continueGame(){
    lineCorrectIncorrect(beginningArr);
    console.log("Correct is: " + lineCorrect.length);
    console.log("Incorrect is " + lineIncorrect.length);
    // restCorrect(beginningArr);

    // expandArray(beginningArr);
    // shuffleArray(expandedArr);
    randomLine = randomNumber(0,11);
    assignCorrectTiles(randomLine);
    shuffleArray(otherTiles);
    setBoard();
    // allPossibleLineGenerator();
    shuffleArray(decrementArr);
    playCorrectAudio();
    clickers();

    // shuffleArray(correctTiles);
  }

  function playCorrectAudio(){
    console.log("x is : " + decrement)
    currentWord = lineCorrect[decrementArr[decrement]];
    decrementArr.splice (decrement, 1);
    soundOfCurrentWord = new Audio(currentWord.audio);
    soundOfCurrentWord.play();
    decrement = decrement - 1;
  }
};

// soundOfWord = new Audio(correctWord.audio);
// soundOfWord.play();
