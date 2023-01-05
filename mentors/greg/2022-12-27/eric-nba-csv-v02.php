<?php
/*
MENTOR Greg: HOMEWORK: 2022-12-26
Read the NBA finals CSV data into one more more dictionaries as needed
to complete the following:

- Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
- Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
- Which teams have made it to the NBA finals but have never won?
- Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
  - 6 times: Michael Jordan
  - 3 times: Shaquille O'Neal, LeBron James
  - 2 times: <etc>

Programmer:   Eric Hepperle
Date Created: 2022-12-26

V2
*/


$memStart = memory_get_usage();

// INCLUDE FUNCTIONS LIBRARY
require_once(__DIR__ . '/../../../inc/functions.php');

// FILE PATHS
define('NBA_CSV', DOCS_PATH . 'nba_finals.csv');



/**
 * Primary controller function.
 */
function main($memStart, $cssStyles)
{
  sayFilename($cssStyles);

  $nbaDict = buildNBADictFromCSV(NBA_CSV) ?? NULL;

  $year = 1993;
  $teamName = "Los Angeles Lakers";

  // Q: Write a function that takes as an argument a year and returns the winner of the NBA finals that year.
  echo "<H3>Write a function that takes as an argument a year and returns the winner of the NBA finals that year.</H3>";
  $winner = ${'winnerFor' . $year} = getWinnerByYear($nbaDict, $year);
  echo "Winner for <b>$year</b>: <b><span style='color:green'>" . $winner . "</span></b><br>";

  // Q: Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
  echo "<H3>Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.</H3>";
  $winningYears = getWinningYearsByTeam($nbaDict, $teamName);
  echo "The $teamName has been MVP <b>" . count($winningYears) . "</b> times including:<br>";
  echo implode(', ', $winningYears) . "<br>";

  // Q: Q: Which teams have made it to the NBA finals but have never won?
  echo "<H3>Which teams have made it to the NBA finals but have never won?</H3>";
  $finalists = getFinalistsNotWinners($nbaDict);
  echo "There are <b>" . count($finalists) . "</b> teams who have made it to the finals but didn't win:<br>";
  echo bulletList($finalists);



  // Q: Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
  // - 6 times: Michael Jordan
  // - 3 times: Shaquille O'Neal, LeBron James
  // - 2 times: <etc>
  echo "<H3>Print out a ranking of who has won the MVP more than once, by times won</H3>";
  $mvpDict = getMVPWinnerCounts($nbaDict);
  // var_dump($mvpDict);
  var_dump(printMVPWinnersByFreq($mvpDict)) ;






  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
}
main($memStart, $cssStyles);


function printMVPWinnersByFreq($mvpDict)
{
  $rankDict = [];

  // How many MVPs are in the winnersDict?
  $totalMvps = count($mvpDict);
  echo "Total MVPs: $totalMvps<br>";

  // Build Rankings Dict
  foreach ($mvpDict as $mvp => $mvpCount) {
    if ($mvpCount > 1) {

      // ASSIGN MVP names to their win count index
      if (!isset($rankDict[$mvpCount])) {
        $rankDict[$mvpCount] = [$mvp];
      } else {
        array_push($rankDict[$mvpCount], $mvp);
      }
    }
  }

  echo "<ul>";
  // Print out SORTED (high -> low) Rankings
  foreach ($rankDict as $mvpCount => $mvps) {
    echo "<li>$mvpCount times: " . implode(', ', $mvps) . "</li>";
  }
  echo "</ul>";

  return $rankDict;
}


function bulletList($items)
{

  $style = 'color: brown';

  $out = '<ul>' . PHP_EOL;

  // MAKE EACH LIST ITEM BULLETED
  foreach ($items as $item) {
    $out .= "\t<li style='$style'>$item</li>";
  }

  $out .= "</ul>";
  return $out;
}


/// FUNCTIONS

/*
ALGORITHM for getMVPWinnerCounts()

DEFINE empty array as (rankDict)

LOOP through each year's stats

  // INCREMENT MVP key value
  IF MVP field in NBA dict isn't blank
  
    IF MVP field doesn't exist in rankDict

      ADD column value as key in rankDict
      SET value to 1

    ELSE

      INCREMENT value by 1
    
    END

  END

END


// RETURN WINNERS sorted by value, highest to lowest
LOOP through each entry in rankDict as

  IF ???

END looping through rankDict

*/




function getMVPWinnerCounts($nbaDict)
{

  $winnerCounts = [];

  foreach ($nbaDict as $year => $stats) {

    $mvp = $stats['MVP'];

    if ($mvp !== '') {
      // INCREMENT MVP KEY
      if (!isset($winnerCounts[$mvp])) {
        $winnerCounts[$mvp] = 1;
      } else {
        $winnerCounts[$mvp]++;
      }
    }
  }

  return $winnerCounts;
}



function getFinalistsNotWinners($nbaDict)
{

  $winners = [];
  $losers = [];

  $neverWon = [];

  /*
  IF team is in loser column and NOT in winner column
  */
  foreach ($nbaDict as $year => $stats) {

    $curWinner = $stats["Winner"];
    $curLoser = $stats["Loser"];

    // Create a Set-like assoc array with O(1) time complexity
    $winners[$curWinner] = true;
    $losers[$curLoser] = true;
  }

  foreach ($losers as $loser => $value) {
    if (!isset($winners[$loser])) {
      // echo "$loser <b>NEVER WON</b> the NBA finals<br>";
      array_push($neverWon, $loser);
    }
  }


  // var_dump($winners);
  // var_dump($losers);
  return $neverWon;
}



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

  return $nbaDict[$year]["Winner"];
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
