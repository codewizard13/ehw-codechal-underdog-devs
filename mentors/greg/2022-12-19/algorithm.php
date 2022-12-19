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
DEFINE allowedLetters array

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

/**
 * Primary controller function.
 */
function main($memStart)
{

  // SLURP file into array
  // $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  $scrabbleWords = fileToArray(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $scrabbleWordsCount = count($scrabbleWords);
  echo "SCRABBLE Words count: $scrabbleWordsCount<br>";

  // TODO: DO STUFF ...
  // testHarness($scrabbleWords, ["TH", "ED"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart);



/// FUNCTIONS ///


/**
 * Given a set of needle values, loop through each value
 * and report any matches in haystack.
 * 
 * @arg: $testValues array
 * @return: void
 */
function testHarness($wordsArr, $needleSet = [])
{

  $results = [];

  // LOOP through each needle in needleSet
  for ($i = 0; $i < count($needleSet); $i++) {

    $currentNeedle = $needleSet[$i];

    if (isset($currentNeedle)) {

      // IF we find any matches add them to results array
      $results = findMatches($wordsArr, $currentNeedle);
      
      // OUPUT RESULTS
      echo "<H2>RESULTS:</H2>";
      echo count($results) . " words begin and end with $currentNeedle<br>";
      var_dump($results);
    }
  }

}


// Given a set of needle values
function findMatches($wordsArr, $needle)
{

  $style = 'background: antiquewhite; font-weight: bold;';
  $matches = [];

  // LOOP through each word in array
  for ($i = 0; $i < count($wordsArr); $i++) {

    $currentWord = $wordsArr[$i] ?? null;

    if ($currentWord !== '' && startsWith($currentWord, $needle) && endsWith($currentWord, $needle)) {

      // echo "<p>Word <span style='$style'>$currentWord</span> @ index [$i] starts and ends with $needle</p>";

      array_push($matches, $currentWord);
    }
  }
  return $matches;
}

/**
 * Returns true if haystackStr starts with needle.
 * 
 * @param: string $hastackStr
 * @param: string $needle
 * @return: bool
 */
function startsWith($haystackStr, $needle)
{

  $needleLen = strlen($needle);

  // LOOP through each char in needle
  for ($i = 0; $i < $needleLen; $i++) {

    // IF current needle char is not same as current hastack char
    if ($haystackStr !== '' && $needle[$i] !== $haystackStr[$i]) {
      return false;
    }
  }

  return true;
}

/**
 * Returns true if haystackStr ends with needle.
 * 
 * @param: string $hastackStr
 * @param: string $needle
 * @return: bool
 */
function endsWith($haystackStr, $needle)
{

  $needleLen = strlen($needle);
  $haystackLen = strlen($haystackStr);

  for (
    $needleIndex = $needleLen - 1, $haystackIndex = $haystackLen - 1;
    $needleIndex >= 0;
    $needleIndex--, $haystackIndex--
  ) {

    if ($needle[$needleIndex] !== $haystackStr[$haystackIndex]) {

      return false;
    }
  }

  return true;
}
