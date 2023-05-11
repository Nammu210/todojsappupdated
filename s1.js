// Parent constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Parent method
  Animal.prototype.speak = function() {
    console.log('The ' + this.type + ' ' + this.name + ' speaks.');
  };
  
  // Child constructor function
  function Dog(name) {
    Animal.call(this, name);
    this.type = 'dog';
  }
  
  // Inherit from Animal.prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Set the child's constructor to itself
  Dog.prototype.constructor = Dog;
  
  // Child constructor function
  function Cat(name) {
    Animal.call(this, name);
    this.type = 'cat';
  }
  
  // Inherit from Animal.prototype
  Cat.prototype = Object.create(Animal.prototype);
  
  // Set the child's constructor to itself
  Cat.prototype.constructor = Cat;
  
  // Create instances of the child classes
  var myDog = new Dog('Rufus');
  var myCat = new Cat('Whiskers');
  
  // Call parent method
  myDog.speak(); // Output: The dog Rufus speaks.
  myCat.speak(); // Output: The cat Whiskers speaks.
  
  // Add class names to the elements
  myDog.element.className += ' animal dog';
  myCat.element.className += ' animal cat';
  