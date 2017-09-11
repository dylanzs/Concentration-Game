let choices = ['∑', 'π', '®', '≠', 'ß', '∞', 'α', 'µ'];
let pairs = [16];

function initGame() {
  for (let i = 0; i < 16; i++){
    pairs[i] = 0;
  }
}
$(document).ready(function() {
  initGame();
  $(".tile").on('click', function() {
    $(this).find(".tile-cover").css("display", "none");
  });
});
