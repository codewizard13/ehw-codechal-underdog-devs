<?php

/*
MENTOR Greg:

There is at least one baby name from the top 40 baby names for 2020 that, when spelled backwards, is a valid Scrabble word. Find and print all such names.

SECOND IMPLEMENTATION:



Eric Hepperle
2022-12-05
*/

// Slurp files into arrays
// $namesStr = file_get_contents('../../../docs/baby_names_2020_short.txt');
// $namesArr = explode('\n', $namesStr);

// var_dump($namesArr);

$babyNames2020 = '../../../docs/baby_names_2020_short.txt';
$scrabbleFile = '../../../docs/sowpods.txt';

echo "HI";

function fileToArray($filename)
{
  $namesStr = file_get_contents($filename);
  $namesArr = explode("\n", $namesStr);
  return $namesArr;
}

$namesArr = fileToArray($babyNames2020);
$scrabbleArr = fileToArray($scrabbleFile);

// var_dump( fileToArray($babyNames2020) );
// var_dump(fileToArray($scrabbleFile));

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

$matchedNames = [];

foreach ($namesArr as $name) {

  // echo $name . "<br>";

  $tmpArr = array_reverse(str_split($name));

  $nameReversed = strtoupper(implode($tmpArr));

  if (in_array($nameReversed, $scrabbleArr)) {
    echo $nameReversed . " found in scrabble words!<br>";
  }
}


/*

oldSring = LIAM

foreach char in string

  $newStr .= pop(oldString)

  MAIL

*/

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

// two pointer / dual pointer

// Arrays in PHP are all associative / hashmaps

// Data structure algorithm initally

// Have an understanding and be able to implement library functions

// 

