/*
*
* A string of brackets is considered correctly matched if every opening bracket in the string can be paired up with a later closing bracket, and vice versa. For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t. For instance, “((” could become correctly matched by adding two closing brackets at the end, so you’d return 2.

Given a string that consists of brackets, write a function bracketMatch that takes a bracket string as an input and returns the minimum number of brackets you’d need to add to the input in order to make it correctly matched.

Explain the correctness of your code, and analyze its time and space complexities.
* */

function bracketMatch(text) {
  /*
  1. We have two counters
  2. When we met openning, increase
  3. When we met closing, decrease openning, if zero, increase closing
  4. Return sum

  O(n), O(1);
    */

  if (text.length === 1) {
    return 1;
  }

  let openningCounter = 0;
  let closingCounter = 0;

  for(let i = 0; i < text.length; i++) {
    const char = text[i];

    if (char === '(') {
      openningCounter++;
    } else {
      // closing
      if (openningCounter > 0) {
        openningCounter--;
      } else {
        closingCounter++;
      }
    }
  }

  return openningCounter + closingCounter;
}
