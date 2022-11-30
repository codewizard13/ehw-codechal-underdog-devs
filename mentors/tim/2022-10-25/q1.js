// From a string create an array of words

function createWordList(str) {

  return str.split(' ');

}

let result = createWordList("Hello World")


console.log(result)

// Which word is used the most


let string = "Hello World Hello World world World"

arString = string.split(' ')

const dict = {}

arString.forEach(word => {

  // if word doesn't exist 
  if (dict[word] === undefined) {
    dict[word] = 1
  } else {
    dict[word]++
  }


});

console.log(dict)

// Which word used the most

let mostFrequent = Object.keys(dict).sort((a, b) => dict[b] - dict[a])[0]

console.log(mostFrequent)


