'use strict';

/* Reverse

  Data In:
The data that goes inside is any string that the user wants to reverse. It can be as long as they want, and it can be anything.
In the console, the user input will go through a loop that will reverse the string, and the final message will be the original string followed by an arrow and then the reversed string.    

  Data Out:
A pop up message showing the original string followed by an arrow and then the reversed string.

  Test Cases:
When the user enters "hello", the final message should be "hello -> olleh".
When the user enters "12345", the final message should be "12345 -> 54321".
When the user enters "abcde", the final message should be "abcde -> edcba".

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);
