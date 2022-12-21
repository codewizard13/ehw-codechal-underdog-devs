/*
MENTOR Jacob: HOMEWORK: 2022-12-14

ALGORITHM ONLY

What are all of the words that have only “U”s for vowels?

Eric Hepperle
2022-12-14

V1

*/

/*
ALGORITHM


// FUNCTION: main
DEFINE empty results array
SLURP scrabble file into array (scrabbleWords)

LOOP through each word

  IF currentWord contains only U's for vowels

    PUSH result on to results array

  END

END

RETURN results

// FUNCTION: hasOnlyU(word)
// - Input word string
// - Return boolean
DECLARE array found

LOOP  through each char in word

  LOOP through each vowel

    IF char is vowel

      ADD char to found array

      IF there are 2 elements in found array
        RETURN false
      END

    END

  END vowels loop
    
END word char loop

// AFTER looping though word if found array has length 1
IF found has only one element and that element is U

  RETURN true

ELSE

  RETURN false

END


/*
LEARNINGS / NOTES:

- declarative vs imperative

returns true if and only if there is at least one U and no other vowels

HOMEWORK: Implement the above algorithm I wrote

*/

