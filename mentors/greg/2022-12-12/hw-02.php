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

// var_dump($_SESSION);
$messageStyle = $_SESSION['cssStyles']['message'];
$errorStyle = $_SESSION['cssStyles']['error'];
$correctStyle = $_SESSION['cssStyles']['correct'];
$warnStyle = $_SESSION['cssStyles']['warn'];

// echo "<p style='$messageStyle$errorStyle'>TESTING ERROR</p>";
// echo "<p style='$messageStyle$correctStyle'>TESTING CORRECT</p>";
// echo "<p style='$messageStyle$warnStyle'>TESTING WARN</p>";

// exit;

// FILE PATHS
define('DOCS_PATH', __DIR__ . '/../../../docs/');
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');


/* ALGORITHM in SEPARATE FILE */

/**
 * Returns true if haystackStr starts with needle
 * 
 * @ar
 */
function startsWith($haystackStr, $needle)
{

  // $haystackLen = strlen($haystackStr);
  $needleLen = strlen($needle);

  // LOOP through each char in needle
  for ($i = 0; $i < $needleLen; $i++) {

    // echo '$needle[$i]: ' . $needle[$i] . ' | ' . '$haystackStr[$i]' . $haystackStr[$i] . "<br>";

    // IF current needle char is not same as current hastack char
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
 * Primary controller function.
 */
function main($memStart)
{

  // CREATE ARRAYS FROM FILES
  $scrabbleWords = fileToHashmap(SCRABBLE_FILE);

  // testHarness($scrabbleWords);
  $wordsCount = count($scrabbleWords);
  echo "Words count: $wordsCount<br>";

  $smallWordsArr = [
    'AA', 'THAATH', 'THIRTEENTH', 'JOHN'
  ];
  // var_dump($smallWordsArr);

  // FIND AND RETURN MATCHES
  // testHarness($smallWordsArr, ["TH", "ED"]);
  // testHarness($smallWordsArr, ["TH"]);
  testHarness($scrabbleWords, ["TH"]);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);

} // END main

// RUN program
main($memStart);


function reportMemUsage($memStart) {

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
      // echo "<h3>\$currentNeedle: <span style='color:green'>$currentNeedle</span></h3>";

      // IF we find any matches,
        $results = findMatches($wordsArr, $currentNeedle);
        var_dump($results);

    }
  }

  return $results;
}




// Given a set of needle values
function findMatches($wordsArr, $needle)
{

  // echo "<h3>\$wordsArr:</h3>";
  // echo count($wordsArr). ' words in $wordsArr<br>';

  $matches = [];

  // LOOP through each word in array
  for ($i = 0; $i < count($wordsArr); $i++) {

    $currentWord = $wordsArr[$i] ?? null;
    // echo "current array key: $i<br>";
    // echo "\$currentWord: $currentWord<br>";

    if (startsWith($currentWord, $needle)) {
      echo "<h2>Word: $currentWord <span style='background: antiquewhite'>$currentWord</span> STARTS with $needle</h2>";
    }
    if (endsWith($currentWord, $needle)) {
      echo "<h2> <span style='background: aliceblue'>$currentWord</span> ends with $needle</h2>";
      array_push($matches, $currentWord);
    }

  }
  return $matches;

}


