/*
Leetcode: 74 - Search a 2D Matrix

https://leetcode.com/problems/search-a-2d-matrix


Eric Hepperle
2023-01-06

*/

/*
ALGORITHM

BINARY search (because sorted)




*/

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]]

let target = 3


function searchMatrix(matrix, target) {

  let rows = matrix.length
  let cols = matrix[0].count

  let row = rows - 1
  let col = 0

  while (row >= 0 && col < columns) {
    let number = matrix[row][col]

    if (number === target) {
      return true
    }

    if (number > target) {
      row--
    } else {
      col++
    }

  }


}
console.log(searchMatrix(matrix, target))