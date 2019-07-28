// Blueprint constructor for Player
// generate instance of player with:
// name, age and position
function Player(name, age, position, skillLevel) {
  this.name = name;
  this.age = age;
  this.position = position;
  this.skillLevel = skillLevel;
}


// Create Player instances
const Ronaldinho = new Player("Ronaldinho Gaucho", 38, "AM", 96);
const Messi = new Player("Lio Messi", 32, "AM", 99);

// We want to log a bio for each player
// so we add a method to the Person constructor
Player.bio = function() {
  console.log(`
    ${this.name} is a ${this.age}-year old ${this.position}, 
    with a skill level of ${this.skillLevel}
  `);
}

// Messi.bio();
//! NO!
// this does not work, we need the method to be added
// to the prototype of the constructor, not the constructor itself
// the constructor function is a separate object to it's constructor
// instances get their properties from the constructors prototype, not
// the constructor function itself, so
Player.prototype.bio = function() {
  console.log(`
    ${this.name} is a ${this.age}-year old ${this.position}, 
    with a skill level of ${this.skillLevel}
  `);
}

Ronaldinho.bio();
//* YES!
// Ronaldinho Gaucho is a 38-year old AM, with a skill level of 96