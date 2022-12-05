<?php

/*
Define bicycle class

Properties: brand, model, year, description, weight_kg

Methods: name, weight_lbs, set_weight_lbs

1kg = 2.2046226218 lbs

set_weight_lbs - pass in weight in lbs and convert to kg

Instantiate, set and read props, call all methods

2022-12-05
Eric Hepperle
#COURSEWORK #TUTWRK #LINKEDINLEARNING
*/

class Bicycle
{

  var $brand;
  var $model;
  var $year;
  var $description;
  var $weight_kg;
  var $weight_lbs;

  var $kgToLbs = 2.2046226218;

  function name()
  {
    return $this->brand . " " . $this->model . " (" . $this->year . ")";
  }

  // function weight_lbs()
  // {
  //   // if (null !== $this->weight_lbs() ) {
  //   if ($this->weight_lbs) {
  //     return $this->weight_lbs;
  //   } else {
  //     return $this->set_weight_lbs($this->weight_kg);
  //   }
  // }

  // // function set_weight_lbs($weight_kg) {
  // function set_weight_lbs() {
  //   if ($this->weight_kg) {
  //     $this->weight_lbs = $this->weight_kg * $this->kgToLbs;
  //   } else {
  //     return "Weight KG is not set<br/>";
  //   }
  // }

  function weight_lbs()
  {
      return $this->weight_kg * $this->kgToLbs;
  }


  function set_weight_lbs()
  {
    $this->weight_lbs = $this->weight_kg * $this->kgToLbs;
  }
  
}

$bicycle1 = new Bicycle;
$bicycle1->brand = "Schwinn";
$bicycle1->model = "500e";
$bicycle1->year = 1998;
$bicycle1->description = "A nice, swifit bicycle for pedestrian living.";
$bicycle1->weight_kg = 12;


$object_vars = get_object_vars($bicycle1);

echo "<h3>Bicycle1:</h3>";
// echo "Object Vars: " . implode(', ', $object_vars) . "<br/>";
echo "Name: " . $bicycle1->name() . "<br>";
echo "Object Vars: ";
var_dump($object_vars);
echo "Bicycle Model: " . $bicycle1->model . "<br/>";
echo "Bicycle Weight : " . $bicycle1->weight_kg . " (kg) / " . $bicycle1->weight_lbs() . " (lbs)<br />";
