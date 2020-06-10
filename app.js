var typeHere = document.getElementById('typeHere');
var characters = document.getElementById('characters');
var charactersRemaining = document.getElementById('charactersRemaining');
var words = document.getElementById('words');
var wordsRemaining = document.getElementById('wordsRemaining');

typeHere.addEventListener('keyup', (e) => {
	characters.innerHTML = typeHere.value.length;
	charactersRemaining.innerHTML = 100 - typeHere.value.length;

	if (typeHere.value.length > 99) {
		typeHere.value = typeHere.value.substring(0, 99);
	}

	function wordCount(str) {
		str = str.replace(/(^\s*)|(\s*$)/gi, '');
		str = str.replace(/[ ]{2,}/gi, ' ');
		str = str.replace(/\n /, '\n');

		words.innerHTML = str.split(' ').length;
	}

	wordCount(typeHere.value);
	wordsRemaining.innerHTML = 50 - words.innerHTML;
});
