/*
Leetcode: 128 - Longest consecutive sequence

https://leetcode.com/problems/longest-consecutive-sequence/


Eric Hepperle
2023-01-06

*/

/*
ALGORITHM

ARG unsorted array of ints

left bound

*/

const nums = [100,4,200,1,3,2]

function solution() {
  set = new Set()
  let longest = 0

  nums.forEach(num => {
    set.add(num)
  })

  nums.forEach(num => {
    if (!set.has(num - 1)) {
      let counter = 1
      while (set.has(num + counter)) {
        counter++
      }
      longest = longest > counter ? longest : counter
    }
  })
  return longest

}
console.log(solution())