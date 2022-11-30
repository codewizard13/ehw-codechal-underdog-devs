/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists
a direct path going from cityAi to cityBi. Return the destination city, that is,
the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore,
there will be exactly one destination city.

*/

// const paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"], ["Paris", "France"]]
const paths = [["Lima", "Sao Paulo"], ["London", "New York"], ["New York", "Lima"]]

console.log(paths)

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {

  const cities = []
  const sources = []
  const destinations = []

  paths.forEach((path, i) => {

    console.log(`Path ${i}: ${path}`)

    sources.push(path[0])
    destinations.push(path[1])

  })

  var finalDest = destinations.filter(function (x) {
    // checking second array does not contain element "x"
    if (sources.indexOf(x) == -1)
      return true;
    else
      return false;
  });

  return finalDest[0];
};

console.log(`Your FINAL DESTINATION is: ${destCity}`);


/* SOLVED!

I rethought about how to solve the problem and realized what we actually
trying to find is which city on the right side NEVER appears on the left.
I thought we could do that with intersection, but realized it was actually
"array difference" I needed. The "finalDest" code was inspired by this post:

https://usefulangle.com/post/189/javascript-array-intersection-difference#How-to-Get-Difference-of-Arrays

This is a minimized version that I submitted to Leetcode

Works on the site, but here it prints the function instead of the result
*/