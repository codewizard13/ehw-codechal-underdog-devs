<?php

/*
MENTOR Greg: HOMEWORK
What are all of the words that both start with a "TH" and end with a "TH"?
NOTE: File demonstrates smallWordsArray() which makes a small subset of an actual set
This file could be deleted, but I'm keeping for future reference.

Eric Hepperle
2022-12-12

V1
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../../../inc/functions.php');

// FILE PATHS
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');

/**
 * Primary controller function.
 */
function main($memStart)
{

  // CREATE ARRAYS FROM FILES
  $scrabbleWords = fileToHashmap(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $wordsCount = count($scrabbleWords);
  echo "Words count: $wordsCount<br>";

  // Generate smaller scrabble words test set
  $smallWordsArr = smallWordsList($scrabbleWords);
  $smallWordsArr[count($smallWordsArr)] = "THIRTEENTH";
  var_dump($smallWordsArr);

  // FIND AND RETURN MATCHES
  testHarness($smallWordsArr, ["TH", "ED"]);


  // END memory test and return results
  $peak = memory_get_peak_usage() / 1024 / 1024;
  echo "Peak: {$peak}\n";
  $memEnd = memory_get_usage();
  $memTotal = ($memEnd - $memStart) / 1024 / 1024 . PHP_EOL;;
  echo "Mem usage: {$memTotal}\n";
} 
main($memStart);


/// FUNCTIONS

/**
 * Returns true if haystackStr starts with needle
 * 
 * @ar
 */
function startsWith($haystackStr, $needle)
{

  $haystackLen = strlen($haystackStr);
  $needleLen = strlen($needle);

  for ($i = 0; $i < $needleLen; $i++) {

    if ($needle[$i] !== $haystackStr[$i]) {
      return false;
    }
  }

  return true;
}


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

  for ($i = 0; $i < count($needleSet); $i++) {
    if (isset($needleSet[$i])) {
      echo "<h3>\$needleSet[$i]: <span style='color:green'>$needleSet[$i]</span></h3>";

      if (findMatches($wordsArr, $needleSet[$i])) {
        $results = findMatches($wordsArr, $needleSet[$i]);
      }
    }
  }
}

/**
 * Given an array of words and a string 'needle', return
 * all words that both start and end with the needle.
 * 
 * DOESN'T WORK: Later version works
 * 
 * @param: array $wordsArr
 */
function findMatches($wordsArr, $needle)
{

  for ($i = 0; $i < count($wordsArr); $i++) {

    if (endsWith($wordsArr[$i], $needle)) {
      echo "<h2> <span style='background: aliceblue'>$wordsArr[$i]</span> ends with $needle</h2>";
    } else {
      return false;
    }

    if (startsWith($wordsArr[$i], $needle)) {
      echo "<h2> <span style='background: antiquewhite'>$wordsArr[$i]</span> STARTS with $needle</h2>";
    } else {
      return false;
    }

    return true;
  }
}


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