$(document).ready(function(){
    $("#trigger").click(function() {
      if (!$('#gc1').hasClass("newClass")) {
        $("#gc1").toggleClass("newClass");
        $("#gc2").toggleClass("newClass");
      }
      else if (!$('#gc2').hasClass("newClass")) {
        $("#gc2").toggleClass("newClass");
        $("#gc3").toggleClass("newClass");
      }
      else if (!$('#gc3').hasClass("newClass")) {
        $("#gc3").toggleClass("newClass");
        $("#gc4").toggleClass("newClass");
      }
      else if (!$('#gc4').hasClass("newClass")) {
        $("#gc4").toggleClass("newClass");
        $("#gc5").toggleClass("newClass");
      }
      else if (!$('#gc5').hasClass("newClass")) {
        $("#gc1").toggleClass("newClass");
        $("#gc2").toggleClass("newClass");
        $("#gc3").toggleClass("newClass");
        $("#gc4").toggleClass("newClass");
      }
    });
});
