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

// Add BIo
Player.bio = function() {
  console.log(`
    ${this.name} is a ${this.age}-year old ${this.position}, 
    with a skill level of ${this.skillLevel}
  `);
};

Ronaldinho.bio();
// Uncaught TypeError: Ronaldinho.bio is not a function

// Use prototype instead
Player.prototype.bio = function() {
  console.log(`
    ${this.name} is a ${this.age}-year old ${this.position}, 
    with a skill level of ${this.skillLevel}
  `);
};

Ronaldinho.bio();
// Ronaldinho Gaucho is a 38-year old AM, with a skill level of 96
