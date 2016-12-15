// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.row = this.randomrow();
    this.speed = this.randomspeed();
    this.x = 0;
    this.y = this.row*90-30;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed*dt;
    if(this.x > 505)
    {
      this.x = 0;
      this.y = this.randomrow()*90-30;
      this.speed = this.randomspeed();
    }
};

Enemy.prototype.randomrow = function(){
  var rowline = 1+Math.round(Math.random()*2);
  return rowline;
};
Enemy.prototype.randomspeed = function(){
  var speedlevel = 1+Math.round(Math.random()*2);
  return speedlevel * 90;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
  var startpositionX = 202;
  var startpositionY = 410;
  this.sprite = 'images/char-boy.png';
  this.x = startpositionX;
  this.y = startpositionY;
};

Player.prototype.update = function(dt){

  this.x = this.x;
  this.y = this.y;
  if(this.y == -10){
    this.x = 202;
    this.y = 410;
  }
};

Player.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input){
  switch (input) {
    case 'left':
      if(this.x>0){
      this.x-=101;}
      break;
    case 'right':
    if(this.x<404){
    this.x+=101;}
      break;
    case 'up':
    if(0<this.y){
    this.y-=84;}
      break;
    case 'down':
    if(this.y<400){
    this.y+=84;}
      break;

    default:

  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var player = new Player();
var allEnemies = [enemy1,enemy2,enemy3];

Player.prototype.checkCollisions = function(){
  allEnemies.forEach(function(enemy){
    if(Math.abs(enemy.x+75-this.x)<50){
      if(Math.abs(enemy.y+75-this.y)<50)
      {
      this.x = 202;
      this.y = 410;
    }}});
    };


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
