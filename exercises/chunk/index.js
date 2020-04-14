// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  let result = [];
  for(let i=0; i <= array.length-1; i++) {
    let chunk = [];
    for(let j=0; j < size; j++) {
      chunk.push(array[i]);
      if((i == array.length-1) || (j == size-1)){
        break;
      }else{
        i++;
      }
    }
    result.push(chunk);
  }
  return result;
}

module.exports = chunk;