// reset-button.js

$('#reset-button').click(function() {
  $('.space__player-one-chip').addClass('space__player-one-chip animated bounceOutDown');
  $('.space__player-two-chip').addClass('space__player-two-chip animated bounceOutDown');
  setTimeout(function() {
    $('.space__player-one-chip').removeClass('space__player-one-chip animated bounceOutDown').addClass('space__vacant');
    $('.space__player-two-chip').removeClass('space__player-two-chip animated bounceOutDown').addClass('space__vacant');
  }, 1000);

  console.log('The game has been reset');
});
