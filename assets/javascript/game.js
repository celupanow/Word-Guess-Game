
//Declaring the variables - breakfastFoods array for the list of words, alphabet array to keep track of
//letters already guessed, letterArray currently empty but exists to create the blank spaces,
//guessesLeft counter, guessedLetters an empty array that will have the user's incorrect guesses pushed to it,
//wins counter, and letter for the guess

var breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
"biscuits", "cereal", "quiche", "crepes", "bagels", "donuts", "sausage", "muffins", "toast"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];
var letterArray = [];
var guessesLeft = 9;
var guessedLetters = [];
var wins = 0;
var letter = 0;

// newGame function starts the game

newGame();

// taking input from the user with the onkeyup event, then checking to see if that letter is in the word,
//how many times it's in the word, and then displaying to the equivalent index in the letterArray, then checking
//to see if the letter is in the not in the word and is still in the alphabet array, if letter meets those conditions,
//then it gets pushed the guessedLetters array, guessesLeft decreases, and the letter is removed from the alphabet
//array. Also the guessedLetters array and the guessesLeft int are displayed.

document.onkeyup = function (event) {
    letter = event.key;

    for (var j = 0; j < word.length; j++) {
        if (word[j] === letter) {
            letterArray[j] = letter;
            document.getElementById("word").textContent = letterArray.join(" ");
        } else if ((word.includes(letter) === false) && (alphabet.includes(letter) === true)) {
            guessedLetters.push(letter);
            document.getElementById("guessed-letters").textContent = guessedLetters.join(" ");
            guessesLeft--;
            document.getElementById("guesses-left").textContent = guessesLeft;
            var index = alphabet.indexOf(letter.toLowerCase());
            if (index > -1) {
                alphabet.splice(index, 1);
                console.log(alphabet);
            }
        }

    //If guessesLeft is 0, reset the game. Else if there are no blanks left in the letterArray,
    //increment wins, and reset the game.

        if (guessesLeft === 0) {
            newGame();
        } else if (letterArray.indexOf("_") === -1) {
            wins++;
            newGame();
        }

    }

}

//newGame function resets all of our variables, chooses a random word out of the breakfastFoods array,
//creates the letterArray to have as many blanks as needed for the word, and
//displays the letterArray, guessedLetters, guessesLeft, and wins.


function newGame() {
    breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
    "biscuits", "cereal", "quiche", "crepes", "bagels", "donuts", "sausage", "muffins", "toast"];
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"];
    letterArray = [];
    guessesLeft = 9;
    guessedLetters = [];
    letter = 0;

    word = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];
    console.log(word);

    for (var i = 0; i < word.length; i++) {
        letterArray[i] = "_";
    }

    document.getElementById("word").textContent = letterArray.join(" ");
    document.getElementById("guessed-letters").textContent = guessedLetters;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;

}




