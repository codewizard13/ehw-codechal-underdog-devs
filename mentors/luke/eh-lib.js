/*
MENTOR Luke: ERIC'S LIBRARY FUNCTIONS (JavaScript)
Programmer: Eric Hepperle
Date Created: 2022-12-22

*/

/**
 * Get shortest lines(s)
 * - If there are ties, return all lines that match shortest length.
 *
 * @arg: {array} lines
 * @return: {array} filtered
 */
 function shortestLines(lines) {

  let shortestLines = []

  let shortestLength = 0

  lines.forEach((line, i) => {

    if (i === 0) {
      shortestLength = line.length
      shortestLines.push(line)
    } else if (line.length < shortestLength) {
      shortestLength = line.length
      shortestLines = [line] // clear shortest array
    } else if (line.length === shortestLength) {
      shortestLines.push(line)
    }

  })

  // const filtered = lines.filter(line => line.length === shortestLength)
  // return filtered

  return shortestLines
}