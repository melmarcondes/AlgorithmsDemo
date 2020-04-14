// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nStr = n.toString().replace("-","").trim();
  let aux = "";
  for(let i=nStr.length-1; i >= 0; i--){
     aux = aux + nStr[i];
  }
  return parseInt(aux*(n < 0 ? -1 : 1));
}


module.exports = reverseInt;
