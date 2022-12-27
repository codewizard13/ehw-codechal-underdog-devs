<?php
/*
MENTOR Greg: HOMEWORK: 2022-12-19

Write a function that takes a string substring as an argument and returns
an array of all of the words that contain that substring (the substring
can appear anywhere in the word).

Eric Hepperle
2022-12-19

V2
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../../../inc/functions.php');

// FILE PATHS
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');



/**
 * Primary controller function.
 */
function main($memStart, $cssStyles)
{
  sayFilename($cssStyles);

  // SLURP file into array
  // $scrabbleWords = fileToHashmap(SCRABBLE_FILE);
  $scrabbleWords = fileToArray(SCRABBLE_FILE);
  // $scrabbleWords = ["ADVERT", "AD", "ADULTERY", "JOHN"];

  // testHarness($scrabbleWords);
  $scrabbleWordsCount = count($scrabbleWords);
  tellLabelAndValue("Scrabble Words Count", $scrabbleWordsCount);

  // DEFINE substring
  $substring = "ADULT";

  $matchedWords = getWordsContainingSubstring($scrabbleWords, $substring);
  echo "<H3>Matched Words:</h3>";
  var_dump($matchedWords);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
} // END main

// RUN program
main($memStart, $cssStyles);



/**
 * Finds all words containing substring anywhere in the word.
 * Returns array of matched words.
 * 
 * @param: array $words
 * @param: string $substring
 * @return: array $matchedWords
 */
function getWordsContainingSubstring($words, $substring)
{

  $matchedWords = [];

  foreach ($words as $word) {

    // If current word is not valid jump to next word
    if(!wordIsValid($word, $substring)) { continue; }

    if (substringOf($word, $substring)) {
      array_push($matchedWords, $word);
    }

  }

  return $matchedWords;
}


/**
 * Returns true if needle is a substring of a word.
 * My from-scratch approximation of "indexOf".
 * 
 * @param: string $word
 * @param: string $needle
 * @return: bool
 */
function substringOf($word, $needle)
{

  $needleCharsFound = '';
  $firstNeedleChar = $needle[0];

  // LOOP over word chars
  for ($i = 0; $i < strlen($word); $i++) {

    $currentWordChar = $word[$i];

    // IF curentWord char is same as firstNeedleChar, then start testing
    //  here for needle string.
    if ($currentWordChar === $firstNeedleChar) {

      $needleCharsFound = $firstNeedleChar;
      $nextWordCharIndex = $i + 1;

      // LOOP through needle chars from 2nd to end
      for ($j = 1; $j < strlen($needle); $j++) {

        $currentNeedleChar = $needle[$j];
        $nextWordChar = $word[$nextWordCharIndex] ?? NULL ;

        if ($nextWordChar && $nextWordChar !== $currentNeedleChar) {
          $needleCharsFound = '';
          break;
        } else {
          $needleCharsFound .= $nextWordChar;
          $nextWordCharIndex++;
        }

        if ($needleCharsFound === $needle) {
          return true;
        }

      }
    } // END testing for firstNeedleChar

  } // END word char loop

  return false;
}





/**
 * Sanitize word and return true if validates. 
 */
function wordIsValid($word, $needle)
{
  // tellLabelAndValue("Function", __FUNCTION__);

  $word = trim($word);
  $needle = trim($needle);

  if (strlen($word) < strlen($needle)) {
    // echo "<h3>Word: $word is shorter than needle $needle</h3>";
    return false;
  }

  return true;
}



/// FUNCTIONS ///

/** 
 * Ouptut a styled message.
 */
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
