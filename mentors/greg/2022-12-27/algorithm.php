<?php

/*
This is ERIC's attempt to figure out the CSV parsing before
meeting with mentors. Here is the challenge question:

ALGORITHM ONLY:

Read the NBA finals CSV data into one more more dictionaries as needed
to complete the following:

- Write a function that takes as an argument a year and returns the winner
of the NBA finals that year.

Programmer:   Eric Hepperle
Date Created: 2022-12-26

V1
*/

/*
ALGORITHM

// FUNCTION buildDictFromCSV(filepath)
SPLIT FILE into lines array at newline char
DEFINE first line as (headers) array
DEFINE rest as (rows)
DEFINE delimiter (default is comma)

DEFINE results dict as (dataDict)

SET unique id field as KEY (in this case, year which is first column

LOOP over all row lines // while

  SET temp var row = $rows[rowIndex]

  SPLIT row into array at delimiter
  STORE result array as ($cols)

  DEFINE first col as the unique ID key (year)

  LOOP through each column

    DEFINE temp obj $thisObj as,
      $year => [$cols[colIndex] => $rows[rowIndex]]

    ADD thisObj to dataDict with key of $year

  END cols loop

END rows loop

RETURN dataDict

*/