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