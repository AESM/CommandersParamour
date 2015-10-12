// main.js

BoardController.prototype = {
  chipAdd: function() {
    if(this.board.gameInSession) {
      return chipCount++;
    }
  },
};
