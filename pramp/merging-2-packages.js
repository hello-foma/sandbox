/*
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.


input:  arr = [4, 6, 10, 15, 16],  lim = 21 - 6 = 15

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21

hash = {} [val: index]
We go for each value
Find delta betwen num and lim
check if hash have this target
save to hash value

O(n), O(n)
*/

function getIndicesOfItemWeights(arr, limit) {
  if (arr.length === 0) {
    return [];
  }

  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const delta = limit - val;

    if(typeof hash[delta] === 'number') {
      return [i, hash[delta]];
    }

    hash[val] = i;
  }

  return [];
}
