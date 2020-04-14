// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let base = n + (n-1);
  for(let i=1; i <= n; i++){
    let full = i + (i-1);
    let spaces = (base - full) > 0 ? (base - full)/2 : 0;
    console.log(draw(spaces, ' ') + draw(full, '#') + draw(spaces, ' '));
  }
}

function draw(n, char){
  let str = '';
  for(let i=0; i < n; i++){
    str += char;
  }
  return str;
}



module.exports = pyramid;
