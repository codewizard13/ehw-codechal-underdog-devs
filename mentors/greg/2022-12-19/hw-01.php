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
require_once(__DIR__ . '/../../../inc/functions.php');

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
  tellLabelAndValue("Scrabble Words Count", $scrabbleWordsCount);

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




function getWordsContainingSubstring($words, $needle)
{

  tellLabelAndValue("Function", __FUNCTION__);

  $matchedWords = [];

  foreach ($words as $word => $value) {

    tellLabelAndValue("word", "$word | substring: $needle");

    if (foundIn($word, $needle)) {
      array_push($matchedWords, $word);
    }
  }

  return $matchedWords;
}


function foundIn($word, $needle)
{

  tellLabelAndValue("Function", __FUNCTION__);

  // Return early if word is not valid
  if (!wordIsValid($word, $needle)) {
    return false;
  }
  
  $matchedWords = [];

  for ($i = 0; $i < strlen($word); $i++) {

    $wordChar = $word[$i];

    // If we find the first letter of the needle, then check for substring
    if ($wordChar === $needle[0]) {


      if (substringOf($word, $needle)) {

        array_push($matchedWords, $word);
      }
    }
  }
}


function substringOf($word, $needle)
{
  tellLabelAndValue("Function", __FUNCTION__);

  // We only get here if first char of needle is found in word
  //  and word not shorter than needle

  // LOOP over each char in word
  for ($i = 0; $i < strlen($word); $i++) {

    $wordChar = $word[$i];

    //LOOP over each char in needle
    for ($j = 0; $j < strlen($needle); $j++) {

      $needleChar = $needle[$j];

      tellLabelAndValue('$i, $j, $wordChar, $needleChar', "$i, $j, $wordChar, $needleChar");

      // Early return if needleChar doesn't match wordChar
      //  before hitting end of needle char loop
      if ($wordChar !== $needleChar) {
        return false;
      } else {
        continue; // check next char
      }
    }
  }

  return true;
}



function wordIsValid($word, $needle)
{
  tellLabelAndValue("Function", __FUNCTION__);

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




function tellLabelAndValue($label, $value)
{

  // DEFINE STYLES
  $fontFamily = "Roboto, Open Sans, Arial, Tahoma, sans-serif;";
  $msgBasic = "padding: 1rem .5rem; margin: .8rem 0; line-height: 1; font-family: $fontFamily;";
  $msgCard = "padding: 1rem; border-radius: 10px; line-height: 1.3; font-family: $fontFamily; border: solid black 2px; margin: 1rem;";
  $errorStyle = "color: brown; background: pink; border: brown solid 2px;";
  $correctStyle = "color: forestgreen; background: lightgreen; border: forestgreen solid 2px;";
  $warnStyle = "color: orange; background: blanchedalmond; border: orange solid 2px;";
  $infoStyle = "color: navy; background: aliceblue; border: navy solid 2px;";
  $textStyleMain = "color: cadetblue; font-weight: bold;";
  $labelStyle = "font-weight: bold; margin-right: .5rem;";

  $cssStyles = [
    "msgBasic" => $msgBasic,
    "msgError" => $msgBasic . $errorStyle,
    "msgCorrect" => $msgBasic . $correctStyle,
    "msgWarn" => $msgBasic . $warnStyle,
    "msgInfo" => $msgBasic . $infoStyle,
  ];

  // OUPTUT MESSAGE
  echo "<div style='font-family: $msgBasic'>";
  echo "<span style ='$labelStyle'>$label:</span>";
  echo "<span style='$textStyleMain'>$value</span></div>";
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


/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename($cssStyles)
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $cssStyles['msgInfo'] . "'>$thisFilename</span></h3>";
}
