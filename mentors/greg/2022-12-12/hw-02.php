<?php

/*
MENTOR Greg: HOMEWORK: 2022-12-12

What are all of the words that both start with a "TH" and end with a "TH"?
WORK with $scrabbleWords array

Eric Hepperle
2022-12-12

V2
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../../../inc/functions.php');

// FILE PATHS
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');

/* ALGORITHM in SEPARATE FILE */

/**
 * Primary controller function.
 */
function main($memStart, $cssStyles)
{
  sayFilename($cssStyles);

  // CREATE ARRAYS FROM FILES
  $scrabbleWords = fileToArray(SCRABBLE_FILE);

  echo "<h2 style='color: cadetblue; background: aliceblue; padding: 1rem;'>USES: array</h2>";

  $scrabbleWordsCount = count($scrabbleWords);
  echo "SCRABBLE Words count: $scrabbleWordsCount<br>";

  $smallWordsArr = [
    'AA', 'THAATH', 'THIRTEENTH', 'JOHN'
  ];

  // FIND AND RETURN MATCHES
  testHarness($scrabbleWords, ["TH", "ED"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
}
main($memStart, $cssStyles);


/// FUNCTIONS ///

/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename($cssStyles)
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $cssStyles['msgInfo'] . "'>$thisFilename</span></h3>";
}

/**
 * Given a set of needle values, loop through each value
 * and report any matches in haystack.
 * 
 * @param: array $testValues
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
  $matches = [];

  // LOOP through each word in array
  for ($i = 0; $i < count($wordsArr); $i++) {

    $currentWord = $wordsArr[$i] ?? null;

    if ($currentWord !== '' && startsWith($currentWord, $needle) && endsWith($currentWord, $needle)) {
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
