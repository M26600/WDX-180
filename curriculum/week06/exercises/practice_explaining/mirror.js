'use strict';

/* Mirror

  Data In:
The data that goes inside is any string that the user wants to mirror. It can be as long as they want, and it can be anything.

  Data Out:
The final message that will be displayed, which is the input string mirrored.

  Test Cases:
When the user enters "hello", the final message should be "oellh | oellh".
When the user enters "12345", the final message should be "54321 | 54321".
When the user enters "lol", the final message should be "lol | lol".

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
