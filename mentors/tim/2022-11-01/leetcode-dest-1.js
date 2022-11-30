/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 
*/

// const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"], ["Paris", "France"]]
const paths = [["Lima", "Sao Paulo"], ["London", "New York"], ["New York", "Lima"]]

console.log(paths)

// Destination city is last city in pair

// pairsArr.length - 1 = last pair

// const totalPaths = paths.length

// const lastPath = paths[(totalPaths - 1)]

// const destination = lastPath[1]

// console.log(destination)


// Take first pair 

// Take all cities as a set to get unique values as array

const cities = []

paths.forEach((pair) => {
  console.log(pair)

  cities.push(pair[0])
  cities.push(pair[1])

})

const uniqueCities = Array.from(new Set(cities))



console.log(uniqueCities)

uniqueCities.forEach(city => {

  paths.forEach(path => {
    if (city === path[0]) {
      // this is a departure. Skip to next item
      console.log(`${city} is a DEPARTURE, and therfore NOT a destination`)
    } else {
      destination = city
    }
  })

})


console.log(`The DESTINATION is: ${destination}`)