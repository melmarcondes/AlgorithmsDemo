// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

 let aux = "";
 for(let i=str.length-1; i >= 0; i--){
   aux = aux + str[i];
 }
 return aux;
}

module.exports = reverse;
