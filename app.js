var typeHere = document.getElementById('typeHere'); //typing area
var characters = document.getElementById('characters'); //counting characters below type area
var charactersRemaining = document.getElementById('charactersRemaining');
var words = document.getElementById('words'); //counting words below type area
var wordsRemaining = document.getElementById('wordsRemaining');
var displayCharacterLimit = document.getElementById('character-limit'); //character limit above type area
var displayWordLimit = document.getElementById('word-limit'); //word limit above type area

do {
	var characterLimit = prompt(
		'Please enter the character limit (numbers only)'
	);
} while (isNaN(characterLimit));

do {
	var wordLimit = prompt('Please enter the word limit (numbers only)');
} while (isNaN(wordLimit));

displayWordLimit.innerHTML = wordLimit;
displayCharacterLimit.innerHTML = characterLimit;

typeHere.addEventListener('keyup', (e) => {
	characters.innerHTML = typeHere.value.length;
	charactersRemaining.innerHTML = characterLimit - typeHere.value.length;

	if (typeHere.value.length > characterLimit - 1) {
		typeHere.value = typeHere.value.substring(0, characterLimit - 1);
	}

	function wordCount(str) {
		str = str.replace(/(^\s*)|(\s*$)/gi, '');
		str = str.replace(/[ ]{2,}/gi, ' ');
		str = str.replace(/\n /, '\n');

		if (typeHere.value === '') {
			words.innerHTML = 0;
		} else {
			words.innerHTML = str.split(' ').length;
		}
	}

	wordCount(typeHere.value);
	wordsRemaining.innerHTML = wordLimit - words.innerHTML;
});
