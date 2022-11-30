/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ""
*/

/*

Compare first word to next word

If common substring starting from left,

  Save substring as common_prefix_1

  if we have another string

    repeat


while (have_another_string in array) {

  if has_common_prefix (a, b) {
    add to common_prefix_array
  } 

}


common_prefix_array [

  flower
  flow
  [0] = 'flow'
  flow

  if (has_next_string and next_string_has_commonality)

  else
    return ""
]

*/
let common = ''
let current_common = ''
const test_array = ["flower","flow","flight"]

let myArray = test_array

myArray.forEach( (el, i) => {

  if (myArray.length == 1) {
    return myArray[0]
  } else  {
    let first_item = myArray[i]
    let next_item = myArray[i+1]

    find_common_prefix(first_item, next_item)


  }

})



function find_common_prefix(a, b) {


  // if 2nd word shorter than first
  if (b.length < a.length) {

    common = b

  }

  if (b.length === a.length) {
    
  }

  for (let i=0; i<a.length; i++) {


    if (a[i] === b[i] && a[i] !== undefined && b[i] !== undefined) {

      console.log(`${a[i]} equals ${b[i]}`)
      
      current_common += a[i]

      console.log(`current_common: ${current_common}`)

    } else {

      

    }

  }

  return common

}