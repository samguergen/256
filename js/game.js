var require = require || function() { };
var _ = _ || require('./underscore.js');

// -create a 2D array from given string *done*
// - add to to_s method to convert 2D array back to string
// -generate a 2 (or 4) in one of the empty cells
// -allow key arrows to shift cell numbers on board
// -create method: if 2 same number are consecutive ,
//   multiply them and shift the following numbers closer.
// -if arrow right or left, generate method
// -if arrow up or down, transpose board and generate method (then transpose back)
// -generate a 2 (or 4) in one of the empty cells for every key move


function transpose(arr,arrLen) {
  for (var i = 0; i < arrLen; i++) {
    for (var j = 0; j <i; j++) {
      var temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
};


var Game = function(str){
  this.strg = str;
  Game.prototype.createBoard = function(){
    var numbers = this.strg.split('');
    this.game_array = [];
    for (var row = 0; row < 4; row++) {
      var row_array = [];
      for (var col = 0; col < 4; col++) {
        row_array.push((numbers[(4 * row) + col]) * 1);
      };
      this.game_array.push(row_array);
    };
    // console.log(this.game_array);
  };



  Game.prototype.to_s = function(){
    var flat_arr = [].concat.apply([],this.game_array);
    console.log(flat_arr.join(''));
  };

  Game.prototype.matrix = function(){
    for (var row=0; row < 4; row++) {
      console.log(this.game_array[row]);
    }
  };


  Game.prototype.shift = function(){
      for (var row = 0; row < 4; row++) {

        if ((this.game_array[row]).indexOf(0) != -1) {
          squashed = _.reject((this.game_array[row]), function(num){ return (num == 0); });
           for (var x = 1; x < (this.game_array[row].length); x++){
            if (squashed.length == 4){
              break
                };
            (squashed).push(0);
              };
          this.game_array[row] = squashed;
          };
        };
     };


  Game.prototype.merge = function(){
    for (var row = 0; row < 4; row++) {
      for (var col = 0; col < 4; col++) {
            if (this.game_array[row][col] == this.game_array[row][col-1]){

              this.game_array[row][col] = (this.game_array[row][col] * this.game_array[row][col-1]);
              this.game_array[row][col-1] = 0;

            //refactor into variable as this is mostly the shift function.
            if ((this.game_array[row]).indexOf(0) != -1) {
            squashed = _.reject((this.game_array[row]), function(num){ return (num == 0); });
             for (var x = 1; x < (this.game_array[row].length); x++){
              if (squashed.length == 4){
                break
                  };
              (squashed).push(0);
                };
            this.game_array[row] = squashed;
            };
            };
          };
        };
      };
  Game.prototype.spawnBlock = function(){
    x = Math.floor(Math.random() * 4);
    y = Math.floor(Math.random() * 4);
    console.log("x is " + x + ", and y is " + y);
    if (this.game_array[x][y] == 0){
      this.game_array[x][y] = 2;
      console.log(this.game_array[x][y]);
    }
    else{
      this.spawnBlock();
    };
    return this.game_array;
  };

  Game.prototype.testNaN = function(){
    this.game_array.toString();
    for (var row = 0; row < 4; row++) {
        for (var col = 0; col < 4; col++) {
            if (isNaN(this.game_array[row][col])){
              this.game_array[row][col] = 0;
               };
            };
          };
        };


  Game.prototype.move = function(direction){
    if (direction == "left"){
      // add spawnBlock here
      this.shift();
      this.merge();
      this.testNaN();
    }

    else if (direction == "right"){
      for (var row = 0; row < 4; row++) {
        this.game_array[row].reverse();
        };
      this.shift();
      this.merge();

      for (var row = 0; row < 4; row++) {
        this.game_array[row].reverse();
      };
      this.testNaN();
    }

    else if (direction == "up"){
      transpose(this.game_array, 4);
      this.shift();
      this.merge();
      transpose(this.game_array, 4);
      this.testNaN();
    }

    else if (direction == "down"){
      transpose(this.game_array, 4);
      for (var row = 0; row < 4; row++) {
        this.game_array[row].reverse();
        };
      this.shift();
      this.merge();
      for (var row = 0; row < 4; row++) {
        this.game_array[row].reverse();
      };
      transpose(this.game_array, 4);
    }
    this.testNaN();
    }

  };


console.log("New game:")
game1 = new Game('0402004002022022');
game1.createBoard();
game1.matrix();
// console.log(game1.game_array);
// game1.to_s();
// game1.shift();
// game1.merge();
// console.log("Move right:")
// // game1.move("left");
// game1.move("right");
// game1.matrix();
// console.log("Move down:")
// game1.move("down");
// game1.matrix();
// game1.move("right");
// game1.matrix();
console.log("Spawning block...");
game1.spawnBlock();
game1.matrix();
