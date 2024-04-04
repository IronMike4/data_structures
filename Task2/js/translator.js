/* This is the translator.js file that asks the user to input an English word then translates it into Shona.
If a user enters a word that is not in the dictionary it will display an alert and prompt the user to enter a word that exists in the dictionary.
Before displaying the translation I format both words to use Title case.
The following links helped me understand the topic and how to solve the problem:
 - https://www.w3schools.com/jsref/jsref_map.asp
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 - https://www.freecodecamp.org/news/three-ways-to-title-case-a-sentence-in-javascript-676a9175eb27/
For more information about this please visit https://github.com/IronMike4/data_structures */

// Translation dictionary with English words as keys and their translated words as values
const translationMap = new Map([
  ["run", "mhanya"],
  ["walk", "famba"],
  ["water", "mvura"],
  ["cry", "chema"],
  ["read", "verenga"],
  ["meat", "nyama"],
  ["book", "bhuku"],
  ["school", "chikoro"],
  ["car", "mota"],
  ["tree", "muti"],
]);

// Prompt the user to enter an English word to be translated
let inputWord = prompt("Enter an English word you want to translate:");

// Check if the word exists in the translation dictionary
let translatedWord = translationMap.get(inputWord.toLowerCase());

// If the word is not found, keep prompting the user until they enter a valid word
while (!translatedWord) {
  alert(
    "The word you entered does not exist in the translation dictionary. Please try again."
  );
  inputWord = prompt("Enter an English word you want to translate:");
  translatedWord = translationMap.get(inputWord.toLowerCase());
}

// Format the word to use Title case
const formattedInputWord =
  inputWord.charAt(0).toUpperCase() + inputWord.slice(1).toLowerCase();
const formattedTranslatedWord =
  translatedWord.charAt(0).toUpperCase() +
  translatedWord.slice(1).toLowerCase();

// Display the translation on the HTML page
document.write(
  `<p>${formattedInputWord} in Shona is ${formattedTranslatedWord}</p>`
);
