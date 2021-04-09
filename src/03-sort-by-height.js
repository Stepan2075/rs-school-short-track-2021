/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const dubler = [];
  const result = [];
  for (let k = 0; k < arr.length; k++) {
    dubler.push(arr[k]);
  }
  const sort = dubler.sort((a, b) => a - b);
  function checkMinus() {
    for (let i = 0; i < sort.length; i++) {
      if (sort[i] === (-1)) {
        sort.splice(i, 1);
      }
    }
  }
  sort.map(checkMinus);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== (-1)) {
      result[i] = sort.shift();
    } else {
      result[i] = -1;
    }
  }
  return result;
}

module.exports = sortByHeight;
