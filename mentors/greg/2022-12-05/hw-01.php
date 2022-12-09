<?php

/*
MENTOR Greg: HOMEWORK

At least one baby name from the top 40 baby names for 2020 that, when spelled
backwards, is a valid Scrabble word. Find and print all such names.

SECOND IMPLEMENTATION:
- Refactor to use hashmaps

Eric Hepperle
2022-12-09
*/

echo "HEY!<BR>";

// INCLUDE FUNCTIONS LIBRARY
require_once('../inc/functions.php');

// FILE PATHS
$babyNames2020 = '../../../docs/baby_names_2020_short.txt';
$scrabbleFile = '../../../docs/sowpods.txt';

// CREATE ARRAYS FROM FILES
$namesArr = fileToArray($babyNames2020);
$scrabbleArr = fileToArray($scrabbleFile);

var_dump($namesArr);


$matchedNames = [];


foreach ($namesArr as $name) {

  // echo $name . "<br>";

  $tmpArr = array_reverse(str_split($name));

  $nameReversed = strtoupper(implode($tmpArr));

  if (in_array($nameReversed, $scrabbleArr)) {
    echo $nameReversed . " found in scrabble words!<br>";
  }
}



function strReverse2($string) {

  $strLen = strlen($string);

  $newStr = '';

  // for ($i = $strLen-$j; $i < $sstrLen; $j++ )

  for ($i=$strLen-1; $i >= 0  ; $i--) {
    echo "$i: $string[$i]<br>";
    $newStr .= $string[$i];    
  }

  return $newStr;
}
$testing = strReverse2("LIAM");

echo "<h2>$testing</h2>";


