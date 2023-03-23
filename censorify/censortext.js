var censorwords = ['bad', 'sad', 'mad']
var customcensorwords = [];
function censor(text){
	
	for(word in censorwords){
		text = text.replace(censorwords[word],"*****");
	}
	for(word in customcensorwords){
		text = text.replace(customcensorwords[word],"*****");
	}
	return text;
}
function addCensoredWord(word){
	customcensorwords.push(word);
}
function getCensoredWords(){
	return censorwords.concat(customcensorwords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;