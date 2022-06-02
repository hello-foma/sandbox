/*
Given a 2D array binaryMatrix of 0s and 1s, implement a function getNumberOfIslands that returns the number of islands of 1s in binaryMatrix.

An island is defined as a group of adjacent values that are all 1s. A cell in binaryMatrix is considered adjacent to another cell if they are next to each either on the same row or column. Note that two values of 1 are not part of the same island if they’re sharing only a mutual “corner” (i.e. they are diagonally neighbors).

Explain and code the most efficient solution possible and analyze its time and space complexities.

input:  binaryMatrix = [ [0,    1,    0,    1,    0],
                         [0,    0,    1,    1,    1],
                         [1,    0,    0,    1,    0],
                         [0,    1,    1,    0,    0],
                         [1,    0,    1,    0,    1] ]

output: 6 # since this is the number of islands in binaryMatrix.
          # See all 6 islands color-coded below.


hash[0][3] = true;
islandsCounter
go for each value
if its 1,
  check if we already visit that point
  check neighbours and save it to hash
  if no more neighbours, update counter
continue until we check all matrix

O(n), O(n)
*/

function getNumberOfIslands(binaryMatrix) {
  // your code goes here
  if (binaryMatrix.length === 0 || binaryMatrix[0].length === 0) {
    return 0;
  }

  const hash = {};
  let islandsCounter = 0;

  const oneHandle = (y, x) => {
    if (y === -1 || x === -1) {
      return false;
    }

    if (y === binaryMatrix.length || x === binaryMatrix[0].length) {
      return false;
    }

    if (binaryMatrix[y][x] === 0) {
      return false;
    }

    if (hash[y] && hash[y][x]) {
      return false;
    }

    if (hash[y]) {
      hash[y][x] = true;
    } else {
      hash[y] = {[x]: true};
    }

    // up
    oneHandle(y-1, x);
    // right
    oneHandle(y, x + 1);
    // down
    oneHandle(y+1, x);
    // left
    oneHandle(y, x - 1);

    return true;
  };

  for(let i = 0; i < binaryMatrix.length; i++) {
    for(let j = 0; j < binaryMatrix[0].length; j++) {
      const isIsland = oneHandle(i, j);
      isIsland && islandsCounter++;
    }
  }

  return islandsCounter;
}
