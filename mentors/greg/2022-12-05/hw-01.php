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


// INCLUDE FUNCTIONS LIBRARY
require_once('../inc/functions.php');

// FILE PATHS
// $babyNames2020 = '../../../docs/baby_names_2020_short.txt';
// $scrabbleFile = '../../../docs/sowpods.txt';

define('DOCS_PATH',  '../../../docs/');
define('BABY_NAMES_2020', DOCS_PATH . 'baby_names_2020_short.txt');
define('SCRABBLE_FILE', DOCS_PATH . 'sowpods.txt');






/*
ALGORITHM

DEFINE babyNames file constant
DEFINE scrabbleWords file contstant

DEFINE matchedNames var as empty array

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
function main()
{

  $matchedNames = [];

  // CREATE ARRAYS FROM FILES
  $babyNames2020 = fileToArray(BABY_NAMES_2020);
  $scrabbleWords = fileToArray(SCRABBLE_FILE);

  echo '<ul>';
  for ($i=0; $i < count($babyNames2020); $i++) {

    $currentName = $babyNames2020[$i];

    echo "<li>";
    echo "$currentName reversed is <span style='color:green'>" . reversed($currentName);
    
    if (isset($scrabbleWords[reversed($currentName)])) {

      echo "{$i}: " . $currentName;

    }

    echo "</li>";

  }  
  echo '</ul>';
  
  
  
  print_r($matchedNames);

} // END main



function reversed($inputStr) {

  $newStr = '';

  $remainder = $inputStr;

  $count = 0;

  while (strlen($remainder) > 0) {

    echo "<h3>Run: $count</h3>";

    // get last char
    $lastChar = substr($remainder, -1);
    echo "lastChar: $lastChar<br>";
    
    // set $remainder as remainder
    $newStrLastIndex = strlen($remainder) - 1;
    echo "\$newStrLastIndex = $newStrLastIndex</br>";
    $remainder = substr($remainder, 0, $newStrLastIndex);

    // append last char to $newStr
    $newStr .= $lastChar;

    $count++;

  }

  // $newStr .= array_pop(explode('', $inputStr));

  return $newStr;

}




// RUN program

main();




// foreach ($namesArr as $name) {

//   // echo $name . "<br>";

//   $tmpArr = array_reverse(str_split($name));

//   $nameReversed = strtoupper(implode($tmpArr));

//   if (in_array($nameReversed, $scrabbleArr)) {
//     echo $nameReversed . " found in scrabble words!<br>";
//   }
// }



// function strReverse2($string) {

//   $strLen = strlen($string);

//   $newStr = '';

//   // for ($i = $strLen-$j; $i < $sstrLen; $j++ )

//   for ($i=$strLen-1; $i >= 0  ; $i--) {
//     echo "$i: $string[$i]<br>";
//     $newStr .= $string[$i];    
//   }

//   return $newStr;
// }
// $testing = strReverse2("LIAM");

// echo "<h2>$testing</h2>";
