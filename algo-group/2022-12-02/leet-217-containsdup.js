console.log("HI")


/*

Two Sum

https://leetcode.com/problems/two-sum/


// create dictionary to hold results?

Eric Hepperle
2022-12-02

*/

sampleSet = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3,3], 6],
  [[2,8,7], 9]
]



/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
  const counts = {}
  
  for (let i=0; i < nums.length; i++) {
      
      let key = nums[i]
      
      if (counts[key] === undefined) {
          
          counts[key] = 1
          
      } else {
          counts[key]++
      }
      
  }
  
  return counts
  
  console.log({counts})
  
  
};


// HOMEWORK: Read up / learn about hashmaps





// function testValues(inputSet) {

//   inputSet.forEach(set => {
//     twoSum(set[0], set[1])
//   })

// }

// testValues(sampleSet)
