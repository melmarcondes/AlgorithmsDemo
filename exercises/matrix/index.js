// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

let count;

function matrix(n) {
  count = 1;

  const total = n*n;

  let start_row = 0;
  let start_col = 0;
  let end_row = n-1;
  let end_col = n-1;

  var matrix = [];
  for(var i=0; i<n; i++) {
    matrix[i] = [];
  }

  while(count <= total){
    fillRow(start_row, start_col, end_col, matrix, false);
    start_row++;
    fillColumn(end_col, start_row, end_row, matrix, false);
    end_col--;
    fillRow(end_row, end_col, start_col, matrix, true);
    end_row--;
    fillColumn(start_col, end_row, start_row, matrix, true);
    start_col++;
  }
  console.log(matrix);
  return matrix;
}

function fillRow(row, start_col, end_col, matrix, back){
  if(back){
    for(var j = start_col; j >= end_col; j--) {
      matrix[row][j]  = count++;
    }
  }else{
    for(var j = start_col; j <= end_col; j++) {
      matrix[row][j]  = count++;
    }
  }

}

function fillColumn(col, start_row, end_row, matrix, back){
  if(back){
    for(var j = start_row; j >= end_row; j--) {
      matrix[j][col]  = count++;
    }
  }else{
    for(var j = start_row; j <= end_row; j++) {
      matrix[j][col]  = count++;
    }
  }
}


module.exports = matrix;


