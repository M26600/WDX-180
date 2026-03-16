'use strict';

/* Remove Spaces

  Data In:
The data that goes inside is any string that the user wants to remove spaces from. It can be as long as they want, and it can be anything.

  Data Out:
The final message that will be displayed, which is the input string with all spaces removed.

  Test Cases:
When the user enters "hello world", the final message should be "helloworld".
When the user enters "  spaced  ", the final message should be "spaced".
When the user enters "noSpaces", the final message should be "noSpaces".

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = '';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
