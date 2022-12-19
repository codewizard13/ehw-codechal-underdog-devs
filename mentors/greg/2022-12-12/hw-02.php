<?php

/*
MENTOR Greg: HOMEWORK

What are all of the words that both start with a "TH" and end with a "TH"?


Eric Hepperle
2022-12-12

V2
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../inc/functions.php');

// FILE PATHS
define('DOCS_PATH', __DIR__ . '/../../../docs/');
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');

/* ALGORITHM in SEPARATE FILE */

/**
 * Primary controller function.
 */
function main($memStart)
{

  // CREATE ARRAYS FROM FILES
  // $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  $scrabbleWords = fileToArray(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $wordsCount = count($scrabbleWords);
  echo "Words count: $wordsCount<br>";

  $smallWordsArr = [
    'AA', 'THAATH', 'THIRTEENTH', 'JOHN'
  ];

  // FIND AND RETURN MATCHES
  // testHarness($smallWordsArr, ["TH", "ED"]);
  // testHarness($smallWordsArr, ["TH"]);
  testHarness($scrabbleWords, ["TH"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart);



/// FUNCTIONS ///

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


/**
 * Calculate and report memory usage of a block of code.
 * 
 * @usage: Call at bottom of a code black that has $memStart as arg.
 * 
 * @param: mixed $memStart
 * @return: void
 */
function reportMemUsage($memStart)
{

  // END memory test and return results
  $peak = memory_get_peak_usage() / 1024 / 1024;

  echo "Peak: {$peak}\n";

  $memEnd = memory_get_usage();
  $memTotal = ($memEnd - $memStart) / 1024 / 1024 . PHP_EOL;;
  echo "Mem usage: {$memTotal}\n";
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

  // LOOP through each needle in needleSet
  for ($i = 0; $i < count($needleSet); $i++) {

    $currentNeedle = $needleSet[$i];

    if (isset($currentNeedle)) {

      // IF we find any matches add them to results array
      $results = findMatches($wordsArr, $currentNeedle);
      
      // OUPUT RESULTS
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

      echo "<p>Word <span style='$style'>$currentWord</span> @ index [$i] starts and ends with $needle</p>";

      array_push($matches, $currentWord);
    }
  }
  return $matches;
}
