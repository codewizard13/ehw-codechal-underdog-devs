console.log("HI")


// Two Sum

// https://leetcode.com/problems/two-sum/


// create dictionary to hold results?

/*


*/

sampleSet = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3,3], 6]
]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const options = {}

  console.table([...nums, target])

  let index2 = 0

  console.log("nums.length:", nums.length)

  // Nested for loop
  for (i = 0; i < nums.length; i++) {

    console.log("i:", i)

    // as long as there is a 'next' num
    if (nums[i + 1] !== undefined) {
      if (nums[i] + nums[i+1] === target) {
      console.log(`nums[${i}] + nums[${i+1}] === ${target}`)
      }
    }

  }

  // return results

}

function testValues(inputSet) {

  inputSet.forEach(set => {
    twoSum(set[0], set[1])
  })

}

testValues(sampleSet)


/*

FOLI's algorithm hashmap propblem

*/