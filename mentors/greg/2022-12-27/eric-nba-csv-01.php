<?php
/*
This is ERIC's attempt to figure out the CSV parsing before
meeting with mentors. Here is the challenge question:

Read the NBA finals CSV data into one more more dictionaries as needed
to complete the following:

- Write a function that takes as an argument a year and returns the winner
of the NBA finals that year.

Programmer:   Eric Hepperle
Date Created: 2022-12-26

V1
*/


$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once('functions.php');

// FILE PATHS
define('NBA_CSV', DOCS_PATH . 'nba_finals.csv');



/**
 * Primary controller function.
 */
function main($memStart, $cssStyles)
{
  sayFilename($cssStyles);

  $nbaDict = buildNBADictFromCSV(NBA_CSV) ?? NULL;

  $year = 2001;
  $teamName = "Los Angeles Lakers";

  echo "<H3>Write a function that takes as an argument a year and returns the winner of the NBA finals that year.</H3>";
  echo getWinnerByYear($nbaDict, $year);

  echo "<H3>Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.</H3>";
  $winningYears = getWinningYearsByTeam($nbaDict, $teamName);
  echo "The $teamName has been MVP " . count($winningYears) . " times including:<br>";
  echo implode(', ', $winningYears) . "<br>";


  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
}
main($memStart, $cssStyles);


function getWinningYearsByTeam($nbaDict, $teamName)
{

  $winningYears = [];

  foreach ($nbaDict as $year => $stats) {
    if ($stats["Winner"] === $teamName) {
      array_push($winningYears, $year);
    }
  }

  return $winningYears;
}


function getWinnerByYear($nbaDict, $year)
{

  return "Winner for $year: " . $nbaDict[$year]["Winner"] . "<br>";
}


function buildNBADictFromCSV($filepath)
{
  $delim = ","; // delimiter

  $dataDict = [];

  $rows = explode(PHP_EOL, file_get_contents($filepath));

  // Remove row Item 0 from $lines and assign as $headers
  $headers = array_shift($rows);
  $headers = explode($delim, $headers);

  // [$headers, ...$rows] = $lines; // destructuring doesn't work in PHP!

  for ($rowIndex = 0; $rowIndex < count($rows); $rowIndex++) {

    $row = $rows[$rowIndex];

    $cols = explode($delim, $row);

    // Set first col as the key
    $year = $cols[0];

    // LOOP through rest of col values starting at 2nd element
    for ($colIndex = 1; $colIndex < count($cols); $colIndex++) {

      $colVal = $cols[$colIndex];

      $dataDict[$year][$headers[$colIndex]] = $colVal;
    } // END cols loop

  } // END rows loop

  return $dataDict;
}











































/**
 * Print styled filename so you know what file you are seeing.
 */
function sayFilename($cssStyles)
{
  // IDENTIFY file name
  $thisFilename = basename(__FILE__);
  echo "<br><h3>Current File: <span style='" . $cssStyles['msgInfo'] . "'>$thisFilename</span></h3>";
}
