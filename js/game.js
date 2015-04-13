// require 'underscore';

// -create a 2D array from given string *done*
// - add to to_s method to convert 2D array back to string
// -generate a 2 (or 4) in one of the empty cells
// -allow key arrows to shift cell numbers on board
// -create method: if 2 same number are consecutive ,
//   multiply them and shift the following numbers closer.
// -if arrow right or left, generate method
// -if arrow up or down, transpose board and generate method (then transpose back)
// -generate a 2 (or 4) in one of the empty cells for every key move


var board = function(str){
  this.strg = str;
  this.createBoard = function(){
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

  this.to_s = function(){
    var flat_arr = [].concat.apply([],this.game_array);
    console.log(flat_arr.join(''));
  };

  this.moveLeft = function(){
    // for (var row = 0; row < 4; row++) {
    //   col = 1
    //   while (col < 4) {
    //     var currentSqr = this.game_array[row][col];
    //     var checkSqr = this.game_array[row][col-1];
    //     var idx = 0;
    //     if this.game_array[row][col-1] == 0 {
    //       checkSqr = this.game_array[row][col-1];
    //       idx++;
    //     };
    //     col++
    //   };
    // };

      for (var row = 0; row < 4; row++) {
        console.log(this.game_array[row]);
        if ((this.game_array[row]).indexOf(0) != -1) {
          // console.log("hello"); };
          // console.log((this.game_array).filter(!0));}
          squashed = _.reject((this.game_array), function(num){ return (num > 0); });
        };
      };

  };
};

game1 = new board('0002000000000000');
game1.createBoard();
// console.log(game1.game_array);
game1.to_s();
game1.moveLeft();



