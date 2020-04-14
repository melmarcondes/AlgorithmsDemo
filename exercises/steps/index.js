// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

  for(let i=1; i <= n; i++){
    let print = draw(i, '#');
    print+= draw(n-i, ' ');
    console.log(print);
  }
}

function draw(n, char){
  let str = '';
  for(let i=0; i < n; i++){
    str += char;
  }
  return str;
}

/* Solution with recursion (no for, just if em recursion)
function steps(n, row=0, stair = '') {

  if(n===0){
    return;
  }

  if(n === stair.length){
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ?  '#' : ' ';
  steps(n, row, stair + add);
}*/

module.exports = steps;
