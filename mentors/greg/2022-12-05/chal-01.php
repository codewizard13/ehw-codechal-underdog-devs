<?php

/*
MENTOR Greg:

There is at least one baby name from the top 40 baby names for 2020
that, when spelled backwards, is a valid Scrabble word. Find and
print all such names.

Today's Leanrings:
- Arrays in PHP are all associative / hashmaps
- Data structure algorithm initally

- HW: Research two pointer / dual pointer
- HW: Have an understanding and be able to implement library functions


Eric Hepperle
2022-12-05

*/

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../../../inc/functions.php');

// FILE PATHS
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');
define('BABY_NAMES_2020', DOCS_PATH . 'baby_names_2020_short.txt');


$namesArr = fileToArray(BABY_NAMES_2020);
$scrabbleArr = fileToArray(SCRABBLE_FILE);

$matchedNames = [];

foreach ($namesArr as $name) {

  $tmpArr = array_reverse(str_split($name));

  $nameReversed = strtoupper(implode($tmpArr));

  if (in_array($nameReversed, $scrabbleArr)) {
    echo $nameReversed . " found in scrabble words!<br>";
  }
}


function strReverse2($string) {

  $strLen = strlen($string);

  $newStr = '';

  for ($i=$strLen-1; $i >= 0  ; $i--) {
    echo "$i: $string[$i]<br>";
    $newStr .= $string[$i];    
  }

  return $newStr;
}
$testing = strReverse2("LIAM");

echo "<h2>$testing</h2>";

/*

ALGO:

declare global matchedNames array

FOR EACH baby name

  reverse baby name

  foreach scrabble word

    if reversed baby name found in scrabble words array

      add name to results array

  
END baby loop

return matchedNames array

*/
