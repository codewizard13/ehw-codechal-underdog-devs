<?php

/*
functions.php

PURPOSE: This is Eric Hepperle's functions library for doing PHP code challenges.

Eric Hepperle
2022-12-09
*/

/**
 * filetoArray(): Converts a text file of n lines to an array of n lines.
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

function fileToHashmap($filename)
{
  $namesStr = file_get_contents($filename);
  $namesArr = explode("\n", $namesStr);
  $namesHash = [];
  
  foreach ($namesArr as $key => $value) {
    echo "$key => $value<br>";
  }


  return $namesArr;
}
