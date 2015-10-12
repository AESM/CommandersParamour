// setup.js

var round, boardView, boardController, chipAdd, pinPoint, player, piece, heightLimit, gameInSession, chipCount, field, dropPiece, nextTurn, round, currentPlayer, currentColor, playerUp, colorUp, gameStatus;

function BoardModel() {
  this.chipCount = 0;
  // this.field = [ [], [], [], [], [], [], [] ];
  // this.field = [
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', ''],
  //   ['', '', '', '', '', '']
  // ];
  this.field = [
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ];
  this.gameInSession = true;
  this.heightLimit = 6;
  this.player = 'space__player-one-chip';
}

function BoardView() {
  // Display updated field
}

function BoardController(model, view) {
  this.field = model;
  this.view = view;
}

boardModel = new BoardModel();
boardView = new BoardView();
boardController = new BoardController(boardModel, boardView);

currentPlayer = 'space__player-one-chip';
currentColor = 'red';
playerUp = 'space__player-two-chip';
colorUp = 'black';
