<?php
/*
MENTOR Greg: HOMEWORK: 2023-01-02
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

V3
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

  $year = 1993;
  $teamName = "Los Angeles Lakers";


  // Q: Print out a ranking of who has won the MVP more than once, by times won, e.g. this output:
  // - 6 times: Michael Jordan
  // - 3 times: Shaquille O'Neal, LeBron James
  // - 2 times: <etc>
  echo "<H3>Print out a ranking of who has won the MVP more than once, by times won</H3>";
  $mvpDict = getMVPWinnerCounts($nbaDict);
  // var_dump($mvpDict);
  $sortedMvps = sortMVPsByWins($mvpDict);

  // PRINT MEMORY USAGE
  reportMemUsage($memStart);
}
main($memStart, $cssStyles);


// HW: Implement bubble sort for the answer



function sortMVPsByWins($dict)
{

  $rankDict = [];

  // How many MVPs are in the winnersDict?
  $totalMvps = count($dict);
  echo "Total MVPs: $totalMvps<br>";


  // Build Rankings Dict
  foreach ($dict as $mvp => $mvpCount) {
    if ($mvpCount > 1) {

      // ASSIGN MVP names to their win count index
      if (!isset($rankDict[$mvpCount])) {
        $rankDict[$mvpCount] = [$mvp];
      } else {
        array_push($rankDict[$mvpCount], $mvp);
      }
    }
  }

  // var_dump($rankDict);
  return ehBubbleSort($rankDict);
}

/*
2 -> Jack
6 -> Michael
3 -> Sue


*/



function ehBubbleSort($rankDict) {

  $sortedDict = [];

  $keys = array_keys($rankDict); // 
  $values = array_values($rankDict);

  // Order Keys
  for ($i = 0; $i < count($keys); $i++) {

    for ($j = 0; $j < count($keys) - $i-1; $j++) {

      $currentKey = $keys[$j];
      $nextKey = $keys[$j+1];

        // SWAP
        if ($currentKey < $nextKey) {
          $currentKey = $nextKey;
        $values[$j] = $values[$j + 1];
          $nextKey = $currentKey;
        $values[$j + 1] = $values[$j];

          
        }

    }
    
  }

  var_dump($rankDict);


  
}




/*
ALGORITHM

// RETURN WINNERS sorted by value, highest to lowest
LOOP through each entry in rankDict as

  IF ???

END looping through rankDict

*/

/// FUNCTIONS


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

// NOTE: Previous 3 questions are in previous version (3).



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
