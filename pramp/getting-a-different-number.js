function getDifferentNumber(arr) {
  // your code goes here

  /*
  1. Create a hash of elements
  2. iterate by length of array and check if value exist in hash
  3. If its not presented - return result
  4. if every at place - return next of arr.length

  O(2n), O(n)
  */

  if (arr.length === 0) {
    return 0;
  }


  const hash = {};

  for(let i = 0; i < arr.length; i++) {
    hash[arr[i]] = true;
  }


  for(let i = 0; i <= arr.length - 1; i++) {
    console.log({hash, length: arr.length});
    if (!hash[i]) {
      return i;
    }
  }

  return arr.length;
}

