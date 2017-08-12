	var arrayOfWords = ["harambe","gooch", "catalina", "boatsnhoes", "trump", "snicklefritz", "kimjongun", "charliesheen"];
    var pickedWord;
    var pickedWordArray = [];
    var pickedWordPlaceholders = [];
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var guessesLeft;

    function newGame() {
      guessesLeft = 15;
      lettersGuessed = [];
      pickedWord = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
      pickedWordArray = pickedWord.split("");
      pickedWordPlaceholders = [];


      for (var i = 0; i < pickedWordArray.length; i++) {
        pickedWordPlaceholders.push("_");

	var placeHolderString = pickedWordPlaceholders.join(' ');
	document.querySelector("#guessesRemaining").innerHTML ="Guesses Remaining: " + guessesLeft;
	document.querySelector("#placeholders").innerHTML = placeHolderString;
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
	document.querySelector("#losses").innerHTML = "Losses: " + losses;

	}	
		}

		document.onkeyup = function(event) {

					var userGuess = event.key;

				for(var i = 0; i <= lettersGuessed.length-1; i++){

    				if(lettersGuessed[i].indexOf(userGuess) != -1){
        				return false;
    				}
				}
						lettersGuessed.push(userGuess);
					
				for (var i = 0; i < pickedWordArray.length; i++) {
					if (userGuess === pickedWordArray[i]) {
						pickedWordPlaceholders[i] = userGuess;
					}
				}
						document.querySelector("#placeholders").innerHTML = pickedWordPlaceholders.join(" ");			
						document.querySelector("#pressedLetters").innerHTML = lettersGuessed;
					
					if (pickedWordPlaceholders.indexOf(userGuess) === -1) {
	          			guessesLeft--;
	          			
	          		}		
	          			document.querySelector("#guessesRemaining").innerHTML ="Guesses Remaining: " + guessesLeft;

	          		if (guessesLeft === 0){
	          			losses++;
	          			alert("You lose!");
	          			newGame();
	          		}	
	          			document.querySelector("#losses").innerHTML = "Losses: " + losses;
       	
	          		if (pickedWordPlaceholders.join("") === pickedWord){
	          			wins++;
	          			alert("You win!");
	          			newGame();
	          		}
	          			document.querySelector("#wins").innerHTML = "Wins: " + wins;	          		
		}


newGame();
