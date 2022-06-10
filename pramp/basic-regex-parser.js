/*
input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbber", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true

input:  text = "abdddvdds", pattern = "ab.*.*.*.*"
output: false

0. Text iterator and pattern iterator
1. Check each letter at text and pattern, until we reach end of pattern
2. Check if next is "*", then take letter from text, it's can be 0 or multiple (while)
3. If we met ".", that mean, this pair is always equal
4. After all, return true, or return false if pointers dont point to the end

O(n), O(1)

*/

function isMatch(text, pattern) {
  if (text === pattern) {
    return true;
  }

  if (pattern.length === 0) {
    return false;
  }

  let textP = 0;
  let pattP = 0;

  while(pattP < pattern.length) {
    const isStar = pattern[pattP + 1] === "*";

    if (isStar) {
      const char = pattern[pattP] === '.' ? text[textP] : pattern[pattP];
      pattP++;

      let isEqual = true;

      while(isEqual) {
        if (text[textP] === char) {
          textP++;
        } else {
          isEqual = false;
        }
      }

      pattP++;
    } else {
      const char = pattern[pattP];

      if (char !== text[textP] && char !== '.') {
        return false;
      }

      textP++;
      pattP++;
    }
  }

  return (textP === text.length) && (pattP === pattern.length);
}
