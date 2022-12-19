<?php

/*
functions.php

PURPOSE: This is Eric Hepperle's functions library for doing PHP code challenges.

Eric Hepperle
2022-12-09
*/

include_once('../../routes.php');

$fontFamily = "Roboto, Open Sans, Arial, Tahoma, sans-serif";
$message = "padding: .5rem; border-radius: 10px; font-family: $fontFamily; border: solid black 2px;";

$cssStyles = [
  "msgError" => $message . "color: brown; background: pink; border: brown solid 2px;",
  "msgCorrect" => $message . "color: forestgreen; background: lightgreen; border: forestgreen solid 2px;",
  "msgWarn" => $message . "color: orange; background: blanchedalmond; border: orange solid 2px;",
  "msgInfo" => $message . "color: navy; background: aliceblue; border: navy solid 2px;",
];


/**
 * Converts a text file of n lines to an array of n lines.
 * 
 * @param: string $filename
 * @return: array $namesArr
 */
function fileToArray($filename)
{
  $namesStr = file_get_contents($filename);
  $namesArr = explode("\n", $namesStr);
  return $namesArr;
}


/**
 * Converts a text file of n lines to a hashmap / dict where
 * the key is the index number and the value is the line string
 * 
 * @param: string $filename
 * @return: array[ int => string ] $linesHash
 */
function fileToHashmap($filename)
{
  $linesStr = file_get_contents($filename);
  $linesArr = explode("\n", $linesStr);
  $linesHash = [];

  foreach ($linesArr as $key => $value) {
    // echo "$key => $value<br>";

    $linesHash[$value] = true;
  }

  return $linesHash;
}


/**
 * For long text files that are split into arrays, generate a smaller
 *  sample to test with.
 * 
 * @param: array $values
 * @param: bool $print
 * @return: int
 */
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


/**
 * Given a large array of words, generate a smaller subset to use for testing.
 * 
 * @param: array $words
 * @return: array $smallWordsArr
 */
function smallWordsList($words)
{

  $wordsCount = count($words);

  $smallWordsArr = [];

  for ($i = 0; $i < $wordsCount; $i += 55000) {

    // increment index by 55000 and grab three elments including this one
    $subArr = array_slice($words, $i, 3);
    $tmpArr = array_keys(($subArr));
    foreach ($tmpArr as $word) {
      array_push($smallWordsArr, $word);
    }
  }

  return $smallWordsArr;
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
  echo "<div style='background: aliceblue; padding: 1rem; margin: 1rem; border: solid navy 1px;'>";

  echo "Peak: <span style='color: purple'>{$peak}</span><br>";

  $memEnd = memory_get_usage();
  $memTotal = ($memEnd - $memStart) / 1024 / 1024 . PHP_EOL;;
  echo "Avg Mem usage: <span style=''>{$memTotal}</span><br>";
}
