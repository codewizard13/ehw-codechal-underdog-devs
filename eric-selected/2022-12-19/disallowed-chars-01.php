<?php

/*
Eric's Anticipatory work:

What are all of the words that can be made without the letters in
“AEIOSHRTN” (in other words, without the most common letters)? Not
all of those letters need to be used, and letters can be repeated.


Eric Hepperle
2022-12-19

V1
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/functions.php');

// FILE PATHS
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');

// DEFINE illegal chars array
$illegalChars = ["A", "E", "I", "O", "S", "H", "R", "T", "N"];

/**
 * Primary controller function.
 */
function main($memStart, $cssStyles)
{
  sayFilename($cssStyles);

  // SLURP file into array
  $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  // $scrabbleWords = fileToArray(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $scrabbleWordsCount = count($scrabbleWords);
  echo "SCRABBLE Words count: $scrabbleWordsCount<br>";

  // TODO: DO STUFF ...
  testHarness($scrabbleWords, ["TH", "ED"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart, $cssStyles);

/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename($cssStyles)
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $cssStyles['msgInfo'] . "'>$thisFilename</span></h3>";
}


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
  echo "i'M IN " . __FUNCTION__ . "<br>";
  // DO stuff
  $results = [];
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

      array_push($matches, $currentWord);
    }
  }
  return $matches;
}
