function absSort(arr) {
  /**
   @param arr: integer[]
   @return: integer[]

   Sort this array,
   Compare absolute of num, if abs is equal, compare by sign
   O(n log(n)), O(1)

   */

  /*
  Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.


  input:  arr = [-2, -2, 0, 2, -7]
  output: [0, -2, -2, 2, -7]

  */
  // your code goes here

  if (arr.length < 2) {
    return arr;
  }

  return arr.sort((a,b) => {
    if (Math.abs(a) === Math.abs(b)) {
      return a < b ? -1 : 1;
    }

    return Math.abs(a) - Math.abs(b);
  });
}
