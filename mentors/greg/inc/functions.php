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
    // echo "$key => $value<br>";

    $namesHash[$value] = true;

  }

  return $namesHash;
}


/**
 * For long text files that are split into arrays, generate a smaller
 *  sample to test with.
 * 
 * @arg: $values array
 * @arg: $print bool
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