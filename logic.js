var creedslist = ["brotherhd", "blackflag", "rouge"]

var chosenword = "";

var lettersInChosenword = [];

var numlacks = 0;

var blanksAndSuccuesses = [];

var wrongGuesses = [];

var letterGuessed = '';

var winCounter = 0;
var loseCounter = 0;
var numGuesses = 0;










function startgame() {
	numGuesses = 9

	chosenword = creedslist[Math.floor(Math.random() = creedslist.length];

	lettersInChosenword = chosenword.split("");

	numlacks = lettersInChosenword.length
}