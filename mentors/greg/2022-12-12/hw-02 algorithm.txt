<?php

/*
MENTOR Greg: HOMEWORK

What are all of the words that both start with a "TH" and end with a "TH"?

THIS IS JUST THE ALGORITHM. I put it in separate file since it was so long.

Eric Hepperle
2022-12-12

V1
*/

/*
ALGORITHM

// FUNCTION:  MAIN
SLURP Scrabble words into array (scrabbleWords)

LOOP through each word

  IF WORD STARTS with TH && WORD ENDS WITH TH
  // if (startsWith(haystack, needle) && endsWith(haystack, needle))

    ADD word to results

  END

END

RETURN RESULTS



// FUNCTION:  startsWith() - ARGS: needle, haystack (both strings)
LOOP through each char in needle (needleChar)

  IF needleChar DIFFERENT than hayStack char
  needle[0] === haystack[0]

    RETURN false

  END

END

OTHERWISE RETURN true


// FUNCTION:  endsWith() - ARGS: needle, haystack (both strings)
STORE needle length (needleLen)
STORE haystack length (haystackLen)

for ($needleIndex = needleLen -1, $haystackIndex = haystackLen -1;
    $needleIndex >= 0   ; needleIndex--, haystackIndex--
)
LOOP through each char in needle (needleChar)

  // IF needleChar DIFFERENT than hayStack char
  // needle[$needleIndex] !== haystack[$haystackIndex]

    RETURN false

  END

END

OTHERWISE RETURN true

*/