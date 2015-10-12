// play.js

function nextTurn() {
  if (playerUp.indexOf('space__player-one-chip') > -1) {
    currentPlayer = 'space__player-one-chip';
    currentColor = 'red';
    playerUp = 'space__player-two-chip';
    colorUp = 'black';
  } else {
    currentPlayer = 'space__player-two-chip';
    currentColor = 'black';
    playerUp = 'space__player-one-chip';
    colorUp = 'red';
  }
}

function dropPiece(e) {
  var id = $(e.target).parent().attr('id');
  console.log(id);
  console.log('Up next: ' + playerUp + ' - ' + colorUp + ' piece!');
  var col = $('#' + id + ' .wrapper div');
  var indexCol = id.replace( /^\D+/g, '');
  if (col[0].classList.contains('space__player-one-chip') || col[0].classList.contains('space__player-two-chip')) {
    return;
  }

  for (var i = 0; i < col.length - 1; i++) {
    if (col[i+1].classList.contains('bottom')) {
      nextTurn();
      col[i].className = playerUp;
      boardModel.field[indexCol - 1][i] = playerUp;
      return;
    } else if (col[i+1].classList.contains('space__player-one-chip') || col[i+1].classList.contains('space__player-two-chip')) {
      nextTurn();
      col[i].className = playerUp;
      boardModel.field[indexCol - 1][i] = playerUp;
      return;
    }
  }
}

for(var i = 1; i < 8; i++) {
  $('#col-' + i + ' button').click(dropPiece);
}
