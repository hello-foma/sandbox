
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 *
 * Recursive approach
 *  rec func that accept array and return flatten array
 *  return concat each child if child are array - flatten them
 */
function flat(arr, depth = 1) {
  if (depth === 0) {
    return arr;
  }

  return [].concat(...arr.map(elem => {
    console.log(elem, depth);

    return Array.isArray(elem) ? flat(elem, depth - 1) : elem
   }));
}
