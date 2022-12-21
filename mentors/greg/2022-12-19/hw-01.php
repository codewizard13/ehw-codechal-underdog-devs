<?php

/*
MENTOR Greg: HOMEWORK

Write a function that takes a string substring as an argument and returns
an array of all of the words that contain that substring (the substring
can appear anywhere in the word).


Eric Hepperle
2022-12-19

V1
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once('functions.php');

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
  // $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  // $scrabbleWords = fileToArray(SCRABBLE_FILE);
  
  $scrabbleWords = [
    "AA" => true,
    "THE" => true
  ];

  // testHarness($scrabbleWords);
  $scrabbleWordsCount = count($scrabbleWords);
  echo "SCRABBLE Words count: $scrabbleWordsCount<br>";

  // DEFINE substring
  $substring = "TH";

  // TODO: DO STUFF ...
  // testHarness($scrabbleWords, [$substring], $cssStyles);
  $matchedWords = getWordsContainingSubstring($scrabbleWords, $substring);
  echo "<H3>Matched Words:</h3>";
  var_dump($matchedWords);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart, $cssStyles);


function getWordsContainingSubstring($words, $needle) {

  $matchedWords = [];

  foreach ($words as $word => $value) {

    if (foundIn($word, $needle)) {

      array_push($matchedWords, $word);

    }

  }

  return $matchedWords;

}


function foundIn($word, $needle) {

  // Return early if word is not valid
  if (!wordIsValid($word, $needle)) { return false; }

  for ($i = 0; $i < strlen($word); $i++ ) {

    $wordChar = $word[$i];

    // If we find the first letter of the needle, then check for substring
    if ($wordChar === $needle[0]) {

      // substringOf($word, $needle)

    }

  }

}


function wordIsValid($word, $needle) {
  $word = trim($word);
  $needle = trim($needle);

  if (strlen($word) < strlen($needle)) {
    return false;
  }

  return true;

}






/// FUNCTIONS ///


// /**
//  * Given a set of needle values, loop through each value
//  * and report any matches in haystack.
//  * 
//  * @arg: $testValues array
//  * @return: void
//  */
// function testHarness($wordsArr, $needleSet, $cssStyles)
// {
//   echo "I'M IN <b>" . __FUNCTION__ . "</b><br>";
//   // DO stuff
//   echo "<h3 style='" . $cssStyles['msgError'] . "'>NEED TO FINISH CODING</h3>";
//   $results = [];
// }





















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


/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename($cssStyles)
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $cssStyles['msgInfo'] . "'>$thisFilename</span></h3>";
}
