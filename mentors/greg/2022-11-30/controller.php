<?php 

// Monster Maker

class Animal {

  public function __construct(
    $name, $num_legs, $sound
  )
  {
    $this->name = $name;
    $this->num_legs = $num_legs;
    $this->sound = $sound;
  }

}

class Monster extends Animal {

  public function __construct($animal1, $animal2)
  {
    $this->animal1 = $animal1;
    $this->animal2 = $animal2;
  }

}