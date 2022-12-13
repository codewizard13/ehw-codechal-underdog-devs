<?php

/*
MENTOR Greg: HOMEWORK

What are all of the words that both start with a "TH" and end with a "TH"?


Eric Hepperle
2022-12-12

V1
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../inc/functions.php');

// FILE PATHS
define('DOCS_PATH', __DIR__ . '/../../../docs/');
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');


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

*/

function startsWith($haystackStr, $needle) {

  $haystackLen = strlen($haystackStr);
  $needleLen = strlen($needle);

  for ($i = 0; $i < $needleLen; $i++ ) {

    if ($needle[$i] !== $haystackStr[$i]) {
      return false;
    }

  }

  return true;

}


/*

// H: THE
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

  $matchedNames = [];

  // CREATE ARRAYS FROM FILES
  $scrabbleWords = fileToHashmap(SCRABBLE_FILE);


  /// DO STUFF ...
  // var_dump($scrabbleWords);
  echo "Hey<br>";

  $temp = endsWith("HTH", "TH");
  echo "<h2>$temp</h2>";

  $temp = endsWith("APPLE", "TH");
  echo "<h2>$temp</h2>";

  $temp = endsWith("ooooTH", "TH");
  echo "<h2>$temp</h2>";

  // testHarness($scrabbleWords);
  $wordsCount = count($scrabbleWords);
  echo "Words count: $wordsCount<br>";

  // Generate smaller scrabble words test set
  $smallWordsArr = ["TENTH", "EIGHTH"];
  $smallWordsArr = smallWordsList($scrabbleWords);
  // $smallWordsArr = array_push($smallWordsArr, smallWordsList($scrabbleWords)) ;
  $smallWordsArr[count($smallWordsArr)] = "THIRTEENTH";


  var_dump($smallWordsArr);
  // exit;

  testHarness($smallWordsArr, ["TH", "ED"]);

  // for ($i = 0; $i < count($smallWordsArr); $i++) {
  //   if (isset($smallWordsArr[$i])) {
  //     echo "<h3>\$smallWordsArr[$i]: <span style='color:green'>$smallWordsArr[$i]</span></h3>";

  //     $temp = endsWith($smallWordsArr[$i], "TH");
  //     echo "<h2>$temp</h2>";
  //   }
  // }


  // END memory test and return results
  $peak = memory_get_peak_usage() / 1024 / 1024;
  echo "Peak: {$peak}\n";
  $memEnd = memory_get_usage();
  $memTotal = ($memEnd - $memStart) / 1024 / 1024 . PHP_EOL;;
  echo "Mem usage: {$memTotal}\n";
} // END main



// RUN program
main($memStart);

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
  // $increment = calcIncrement($values);
  // findMatches();

/*
ALGO

LOOP through each needle

  IF haystack ends with needle

    ADD needle to results array

*/


  for ($i = 0; $i < count($needleSet); $i++) {
    if (isset($needleSet[$i])) {
      echo "<h3>\$needleSet[$i]: <span style='color:green'>$needleSet[$i]</span></h3>";

      findMatches($wordsArr, $needleSet[$i]);
    }
  }
}

// Given a set of needle values
function findMatches($wordsArr, $needle)
{

for ($i = 0; $i < count($wordsArr); $i++) {

  if (endsWith($wordsArr[$i], $needle)) {
    echo "<h2> <span style='background: aliceblue'>$wordsArr[$i]</span> ends with $needle</h2>";
  }

  if (startsWith($wordsArr[$i], $needle)) {
    echo "<h2> <span style='background: antiquewhite'>$wordsArr[$i]</span> STARTS with $needle</h2>";

  }
    
}


}



function calcIncrement($values = [], $print = false)
{

  // Determine increment interval
  $valsLen = count($values);
  $incrementAmount = $valsLen / 100;
  $incrementAmount = floor($incrementAmount);

  if ($print) {

    echo "<h3>There are <span style='color: green'>" . $valsLen . " total elements passed in.</h3>";
    echo "<h3>Increment Amount: <span style='color: green'>" . $incrementAmount . "</h3>";
  }

  return $incrementAmount;
}

// Since there are of 260K words, generate a smaller word set to work with
function smallWordsList($words)
{

  $wordsCount = count($words);

  $smallWordsArr = [];

  for ($i = 0; $i < $wordsCount; $i += 55000) {

    // increment index by 55000 and grab three elments including this one
    $subArr = array_slice($words, $i, 3);
    $tmpArr = array_keys(($subArr));
    // var_dump($tmpArr);
    // array_push($smallWordsArr, $tmpArr);
    foreach ($tmpArr as $word) {
      array_push($smallWordsArr, $word);
    }
  }

  return $smallWordsArr;
}


// This version reverses a string in place without any temporary variables
//   and reduces the memory usage by half (~29 MB)
function strReverse2($string)
{
  for ($i = strlen($string) - 1, $j = 0; $j < $i; $i--, $j++) {
    list($string[$j], $string[$i]) = array($string[$i], $string[$j]);
  }

  return $string;
}
