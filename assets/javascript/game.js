



//first we'll need an array of words

var breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];
var letterArray = [];
var guessesLeft = 9;
var guessedLetters = [];
var wins = 0;


//choosing a random word from the array
var word = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)]

console.log(word);

//display the blanks with an array

for (var i = 0; i < word.length; i++) {
    letterArray[i] = "_";
}
document.getElementById("word").textContent = letterArray.join(" ");

document.getElementById("guessed-letters").textContent = guessedLetters;
document.getElementById("guesses-left").textContent = guessesLeft;
document.getElementById("wins").textContent = wins;



//getting a letter from the user and checking if it's in the string


document.onkeyup = function (event) {
    var letter = event.key;

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

        var check = letterArray.indexOf("_");

        if (guessesLeft === 0) {
            newGame();
        } else if (check === -1) {
            wins++;
            document.getElementById("wins").textContent = wins;
            newGame();
        }

    }

}


function newGame() {
    breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns"];
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



}




