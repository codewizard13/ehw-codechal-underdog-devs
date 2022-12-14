<?php

/*
MENTOR Greg: HOMEWORK

What are all of the words that both start with a "TH" and end with a "TH"?

WORK with $scrabbleWords array

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
  sayFilename();

  // CREATE ARRAYS FROM FILES
  // $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  $scrabbleWords = fileToArray(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $scrabbleWordsCount = count($scrabbleWords);
  echo "SCRABBLE Words count: $scrabbleWordsCount<br>";

  $smallWordsArr = [
    'AA', 'THAATH', 'THIRTEENTH', 'JOHN'
  ];

  // FIND AND RETURN MATCHES
  // testHarness($smallWordsArr, ["TH", "ED"]);
  // testHarness($smallWordsArr, ["TH"]);
  // testHarness($scrabbleWords, ["TH"]);
  testHarness($scrabbleWords, ["TH", "ED"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart);



/// FUNCTIONS ///

/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename()
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $_SESSION['styleInfo'] . "'>$thisFilename</span></h3>";
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