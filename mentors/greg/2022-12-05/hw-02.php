<?php

/*
MENTOR Greg: HOMEWORK

At least one baby name from the top 40 baby names for 2020 that, when spelled
backwards, is a valid Scrabble word. Find and print all such names.

SECOND IMPLEMENTATION:
- Refactor to use hashmaps

Eric Hepperle
2022-12-12

V2
*/

$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../inc/functions.php');

// FILE PATHS
// $babyNames2020 = '../../../docs/baby_names_2020_short.txt';
// $scrabbleFile = '../../../docs/sowpods.txt';

define('DOCS_PATH', __DIR__ . '/../../../docs/');
define('BABY_NAMES_2020', DOCS_PATH . 'baby_names_2020_short.txt');
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');

echo DOCS_PATH;
// exit;




/*
ALGORITHM

DEFINE babyNames file constant
DEFINE scrabbleWords file contstant

DEFINE matchedNames as empty hashmap

SLURP babyNames file into array (babyNames)
SLURP scrabbleWords file into array (scrabbleWords)

LOOP through baby names

  IF reverse of current baby name exists in scrabble words list

    ADD baby name to matches array

  END

END

RETURN matchedNames

*/


/**
 * Primary controller function.
 */
function main($memStart)
{

  $matchedNames = [];

  // CREATE ARRAYS FROM FILES
  $babyNames2020 = fileToArray(BABY_NAMES_2020);
  $scrabbleWords = fileToHashmap(SCRABBLE_FILE);

  echo '<ul>';

  // LOOP through babyNames2020 AND BUILD hashmap
  for ($i = 0; $i < count($babyNames2020); $i++) {

    $currentName = strtoupper($babyNames2020[$i]);

    $reversedName = strReverse2($currentName);

    echo "<li>";
    echo "$currentName reversed is <span style='color:green'>$reversedName</span></br>";
    // echo "Reveresed name exists in scrabble words? " . $scrabbleWords[$reversedName] . "<br>";

    if (isset($scrabbleWords[$reversedName])) {
      // if ( array_key_exists($reversedName, $scrabbleWords) ) {
      // if ( in_array($reversedName, $scrabbleWords) ) {

      echo "<h4>Name reversed [$reversedName] IS A KEY in \$scrabbleWords</h4>";
    }


    echo "</li>";
  }
  echo '</ul>';



  print_r($matchedNames);


  $peak = memory_get_peak_usage() / 1024 / 1024;

  echo "Peak: {$peak}\n";

  
$memEnd = memory_get_usage();
$memTotal = ($memEnd - $memStart) / 1024 / 1024 . PHP_EOL;;
echo "Mem usage: {$memTotal}\n";
} // END main





// function reversed($inputStr)
// {


//   $remainder = $inputStr;

//   $count = 0;

//   while (strlen($remainder) > 0) {

//     // echo "<h3>Run: $count</h3>";

//     // get last char
//     $lastChar = substr($remainder, -1);
//     // echo "lastChar: $lastChar<br>";

//     // set $remainder as remainder
//     $newStrLastIndex = strlen($remainder) - 1;
//     // echo "\$newStrLastIndex = $newStrLastIndex</br>";
//     $remainder = substr($remainder, 0, $newStrLastIndex);

//     // append last char to $newStr ??


//     $count++;
//   }

//   return $newStr;
// }


// RUN program

main($memStart);



// This was the original strReverse2, but I renamed it
function strReverse($string)
{

  $strLen = strlen($string);

  $leftP = 0;
  $rightP = $strLen;

  $newStr = '';

  for ($i = $strLen - 1; $i >= 0; $i--) {
    // echo "$i: $string[$i]<br>";
    $newStr .= $string[$i];
  }

  return $newStr;
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
