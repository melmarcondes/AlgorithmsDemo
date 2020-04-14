// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let a = stringA.replace(/[^\w]/g, "").toLowerCase(); //or use sort here, and just compare both string after sort
  let b = stringB.replace(/[^\w]/g, "").toLowerCase();
  let charsA = {};
  let charsB = {};

  if(a.length != b.length){ //avoid for iteration
    return false;
  }

  for(let i=0; i < a.length; i++){
    charsA[a[i]] = charsA[a[i]] + 1 || 1;
    charsB[b[i]] = charsB[b[i]] + 1 || 1;
  }

  if(charsA.length != charsB.length){
    return false;
  }

  for(key in charsA) {
    if (charsA[key] !== charsB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
