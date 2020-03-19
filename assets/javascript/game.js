
//array of words
var breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
    "cereal", "bagels", "donuts", "sausage", "toast"];
//array of images
var images = ["assets/images/img1.jpg", "assets/images/img2.jpg", "assets/images/img3.jpg", "assets/images/img4.jpg",
    "assets/images/img5.jpg", "assets/images/img6.jpg", "assets/images/img7.jpg", "assets/images/img8.jpg",
    "assets/images/img9.jpg", "assets/images/img10.jpg", "assets/images/img11.jpg", "assets/images/img12.jpg",
    "assets/images/img13.jpg"];
//array for the alphabet
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z"];
//empty letterArray to create dashes
var letterArray = [];
//guessesLeft variable
var guessesLeft = 9;
//empty guessedLetters array for already guessed letters
var guessedLetters = [];
//wins variable
var wins = 0;
//letter variable
var letter = 0;
//imageIndex variable
var imageIndex = 0;

//a function that resets the variables, picks a new word, creates the dash array, and displays the new info
function newGame() {
    breakfastFoods = ["pancakes", "bacon", "syrup", "waffles", "oatmeal", "hashbrowns", "coffee", "overeasy",
        "cereal", "bagels", "donuts", "sausage", "toast"];
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
        "s", "t", "u", "v", "w", "x", "y", "z"];
    letterArray = [];
    guessesLeft = 9;
    guessedLetters = [];
    letter = 0;
    imageIndex = 0;

    word = breakfastFoods[Math.floor(Math.random() * breakfastFoods.length)];

    for (var i = 0; i < word.length; i++) {
        letterArray[i] = "_";
    }

    document.getElementById("word").textContent = letterArray.join(" ");
    document.getElementById("guessed-letters").textContent = guessedLetters;
    document.getElementById("guesses-left").textContent = guessesLeft;
    document.getElementById("wins").textContent = wins;
}

// newGame function starts the game
newGame();

//taking input from the user with the onkeyup event
document.onkeyup = function (event) {
    letter = event.key;

    //a for loop that checks to see if the letter is in the word and how many times
    for (var j = 0; j < word.length; j++) {
        //if the letter is in the word, then replace the dash in the letterArray that corresponds with the index in word
        if (word[j] === letter) {
            letterArray[j] = letter;
            document.getElementById("word").textContent = letterArray.join(" ");
        }
        //if the letter is not in the word, but is in the alphabet array
        if ((word.includes(letter) === false) && (alphabet.includes(letter) === true)) {
            //push the letter to the guessedLetters array and display it
            guessedLetters.push(letter);
            document.getElementById("guessed-letters").textContent = guessedLetters.join(" ");
            //decrement guessesLeft and display
            guessesLeft--;
            document.getElementById("guesses-left").textContent = guessesLeft;
            //find the index of the letter in the alphabet and splice it out of the alphabet array
            //so the player can't guess the same letter twice
            var index = alphabet.indexOf(letter.toLowerCase());
            if (index > -1) {
                alphabet.splice(index, 1);
            }
        }
        //if guessesLeft is 0, reset the game.
        if (guessesLeft === 0) {
            newGame();
        }

        //if there are no dashes left in the letterArray, increment wins, display a picture, and reset the game
        if (letterArray.indexOf("_") === -1) {
            wins++;
            imageIndex = breakfastFoods.indexOf(word);
            document.getElementById("image").setAttribute('src', images[imageIndex]);
            newGame();
        }

    }

}






