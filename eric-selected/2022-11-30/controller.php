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


$lion = new Animal('leo', 4, 'roar');
$tiger = new Animal('tony', 4, 'roar');
$snake = new Animal('sandy', 0, 'ssss');


$animals = [$lion, $tiger, $snake];

foreach ($animals as $animal) {

  $name = ucfirst($animal->name);
  $sound = ucwords($animal->sound);
  echo "My name is $name. I have " . $animal->num_legs . " legs and I say: <b>$sound</b><br>";


}