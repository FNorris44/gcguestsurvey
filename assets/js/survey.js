$(document).ready(function(){



      $("#trigger").click(function() {
        if (!$('#gc1').hasClass("newClass")) {
          $("#gc1").toggleClass("newClass");
          $("#gc2").toggleClass("newClass");
          var q1 = document.getElementById('surveyvalue').value;
          $("#surveyvalue").val("150");
        }
        else if (!$('#gc2').hasClass("newClass")) {
          $("#gc2").toggleClass("newClass");
          $("#gc3").toggleClass("newClass");
          var q2 = document.getElementById('surveyvalue').value;
          $("#surveyvalue").val("7");
        }
        else if (!$('#gc3').hasClass("newClass")) {
          $("#gc3").toggleClass("newClass");
          $("#gc4").toggleClass("newClass");
          var q3 = document.getElementById('surveyvalue').value;
          $("#surveyvalue").val("10");
        }
        else if (!$('#gc4').hasClass("newClass")) {
          $("#gc4").toggleClass("newClass");
          $("#gc5").toggleClass("newClass");
          var q4 = document.getElementById('surveyvalue').value;
          $("#surveyvalue").val("3");
        }
        else if (!$('#gc5').hasClass("newClass")) {
          var q5 = document.getElementById('surveyvalue').value;

          window.location.href = '/Survey2';
        }
      });

      $("#up").click(function() {
        if (!$('#gc1').hasClass("newClass")) {
            document.getElementById("surveyvalue").stepUp(2);
          }
        else if (!$('#gc2').hasClass("newClass")) {
            document.getElementById("surveyvalue").stepUp(10);
          }
        else if (!$('#gc3').hasClass("newClass")) {
            document.getElementById("surveyvalue").stepUp(2);
          }
        else if (!$('#gc4').hasClass("newClass")) {
            document.getElementById("surveyvalue").stepUp(2);
          }
        else if (!$('#gc5').hasClass("newClass")) {
            document.getElementById("surveyvalue").stepUp(1);
          }
        });

        $("#down").click(function() {
          if (!$('#gc1').hasClass("newClass")) {
              document.getElementById("surveyvalue").stepDown(2);
            }
          else if (!$('#gc2').hasClass("newClass")) {
              document.getElementById("surveyvalue").stepDown(10);
            }
          else if (!$('#gc3').hasClass("newClass")) {
              document.getElementById("surveyvalue").stepDown(2);
            }
          else if (!$('#gc4').hasClass("newClass")) {
              document.getElementById("surveyvalue").stepDown(2);
            }
          else if (!$('#gc5').hasClass("newClass")) {
              document.getElementById("surveyvalue").stepDown(1);
            }
          });

          document.getElementById('survey1').value=q1;
          document.getElementById('survey2').value=q2;
          document.getElementById('survey3').value=q3;
          document.getElementById('survey4').value=q4;
          document.getElementById('survey5').value=q5;
});
