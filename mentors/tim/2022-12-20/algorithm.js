/*
MENTOR Tim: CHALLENGE 2022-12-20

ALGORITHM ONLY

Challenge:

What are all of the words that can be made without the letters in “AEIOSHRTN”
(in other words, without the most common letters)? Not all of those letters
need to be used, and letters can be repeated.

Programmer: Eric Hepperle
Started:    2022-12-20

V1

*/

/*
ALGORITHM:

// FUNCTION: main()
SLURP scrabble file in to scrabbleWords
DEFINE legalWords array as empty
DEFINE set for illegal chars

LOOP over each word in scrabbleWords

  SET temp varr currentWord

  IF word doesn't contain illegal characters
    ADD word to legalWords array
  END

END

RETURN legalWords


// FUNCTION: containsIllegalChars(string)
LOOP through each char in string

  SET temp var currentChar

  IF currentChar is an index of illegalChars set
    RETURN true // found illegal char
  END

END

RETURN false // no illegal chars


*/