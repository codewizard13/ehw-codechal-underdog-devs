<?php

/*
Eric's Anticipatory work:

What are all of the words that can be made without the letters in
“AEIOSHRTN” (in other words, without the most common letters)? Not
all of those letters need to be used, and letters can be repeated.

ALGORITHM only

Eric Hepperle
2022-12-19

V1
*/

/* ALGORITHM

SLURP file into scrabbleWords array
DEFINE illegalChars array

// FUNCTION: main()
LOOP over each scrabble word as currentWord

  IF currentWord doesn't have illegal chars

    ADD currentWord to results array

  END

END

OUTPUT results

// FUNCTION: hasIllegalChars(word, illegalChars)
LOOP over each char in word as currentChar

  LOOP through every illegal char

    IF currentChar matches an illegal char

      RETURN false

    END

  END

  RETURN true

END


*/

