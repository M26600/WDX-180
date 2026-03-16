'use strict';

/* Flip Five

  Data In:
The data that goes inside is only 5 characters long. It can be anything, but it has to be 5 characters. 
It can be even numbers as well.
  Data Out:
The final message that will be displayed, which is the input string reversed.

  Test Cases:
When the user enters "hello", the final message should be "olleh".
When the user enters "12345", the final message should be "54321".
when the user enters "abana", the final message should be "anaba".

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
