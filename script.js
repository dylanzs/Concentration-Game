$(document).ready(function() {
      $(".tile").on('click', function() {
        $(this).find(".tile-cover").css("display", "none");
      });
    });
