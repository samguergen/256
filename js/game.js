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
    console.log(this.game_array);
  };

  Game.prototype.to_s = function(){
    var flat_arr = [].concat.apply([],this.game_array);
    console.log(flat_arr.join(''));
  };

  Game.prototype.shiftdouble = function(){
      for (var row = 0; row < 4; row++) {
        // console.log(this.game_array[row]);
        if ((this.game_array[row]).indexOf(0) != -1) {
          squashed = _.reject((this.game_array[row]), function(num){ return (num == 0); });
           for (var x = 1; x < (this.game_array[row].length); x++){
            if (squashed.length == 4){
              break };
            (squashed).push(0);
          };
        };
          // console.log(squashed);

          for (var col = 0; col < 4; col++) {
            // console.log(squashed[col]);
            if (squashed[col] == squashed[col-1]){
              squashed[col-1] = (squashed[col] * squashed[col-1]);
              squashed[col] = 0;
            };
          };
            console.log(squashed);
      };
  };

  // Game.prototype.double = function(){
  //   for (var row = 0; row < 4; row++) {
  //     // console.log(squashed);
  //     for (var col = 0; col < 4; col++) {
  //     }
  //   }
  // }





};

game1 = new Game('0402004002022022');
game1.createBoard();
// console.log(game1.game_array);
// game1.to_s();
game1.shiftdouble();




